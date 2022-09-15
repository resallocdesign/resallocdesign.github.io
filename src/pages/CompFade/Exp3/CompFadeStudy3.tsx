import usePageTitle from "../../../hooks/usePageTitle";
import { useEffect, useState } from "react";
import CompFadeStart from "../CompFadeStart";
import CompFadeConsent from "../CompFadeConsent";
import CompFadeThanks from "../CompFadeThanks";
import CompFadeInstructions from "../CompFadeInstructions";
import CompFadeTask3 from "./CompFadeTask3";
import ExplainQuestions from "../ExplainQuestions";
import { CompFadeStudyService } from "../../../services/CompFadeStudy";
import CompFadeAttentionQ from "../CompFadeAttentionQ";
import BadScreenWidth from "../BadScreenWidth";
import CompFadeSelect3 from "./CompFadeSelect3";

enum CFStudyState {
  Start = 0,
  AskConsent = 1,
  NoConsent = 2,
  Instructions = 3,
  Task = 4,
  Selection = 5,
  Questions = 6,
  AttentionCheck = 7,
  Complete = 8,
  BadWidth = 9,
}

export interface ICompFadeStudyCondition3 {
  text: "none" | "per-person" | "per-cause"
  vis: "none" | "per-person" | "per-cause";
}

export interface ICompFadeStudyResults {
  programBAlloc: number;
  q1: string;
  q2: string;
  q3: string;
}

function CompFadeStudy3() {
  usePageTitle("Resource Allocation Design Study: Experiment 3");
  const [studyState, setStudyState] = useState(CFStudyState.Task);
  const [results, setResults] = useState<ICompFadeStudyResults>({
    programBAlloc: -1,
    q1: "",
    q2: "",
    q3: "",
  });
  const [condition, setCondition] = useState<ICompFadeStudyCondition3>();
  const [isWide, setIsWide] = useState(true);
  const [slider, setSlider] = useState(0);
  const [taskTimer, setTaskTimer] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1032) {
        setIsWide(false);
      } else {
        setIsWide(true);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setResults((r) => ({ ...r, programBAlloc: slider * 100 }));
  }, [slider]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [studyState]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cond = params.get("cond");

    switch (cond) {
      case "cn": // no text, cause vis
        setCondition({ text: "per-cause", vis: "none" });
        break;
      case "pn": // cause text, cause vis
        setCondition({ text: "per-person", vis: "none" });
        break;
      case "nc":
        setCondition({ text: "none", vis: "per-cause" });
        break;
      case "cc":
        setCondition({ text: "per-cause", vis: "per-cause" });
        break;
      case "pc":
        setCondition({ text: "per-person", vis: "per-cause" });
        break;
      case "np":
        setCondition({ text: "none", vis: "per-person" });
        break;
      case "cp":
        setCondition({ text: "per-cause", vis: "per-person" });
        break;
      case "pp":
        setCondition({ text: "per-person", vis: "per-person" });
        break;
      default:
        const condArr: ICompFadeStudyCondition3[] = [
          { text: "per-cause", vis: "none" },
          { text: "per-person", vis: "none" },
          { text: "none", vis: "per-cause" },
          { text: "per-cause", vis: "per-cause" },
          { text: "per-person", vis: "per-cause" },
          { text: "none", vis: "per-person" },
          { text: "per-cause", vis: "per-person" },
          { text: "per-person", vis: "per-person" },
        ]
        setCondition(condArr[Math.floor(Math.random() * condArr.length)]);
    }

    // if (process.env.NODE_ENV === "development") {
    //   setStudyState(CFStudyState.Instructions)
    // }
  }, []);

  useEffect(() => {
    if (!condition) {
      return;
    } else if (
      !results ||
      !results.q1 ||
      !results.q2 ||
      !results.q3 ||
      results.programBAlloc === -1
    ) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const pid = params.get("PROLIFIC_PID") || "";
    const sessionId = params.get("SESSION_ID") || "";
    const studyId = params.get("STUDY_ID") || "";

    CompFadeStudyService.create({
      prolificInfo: {
        pid,
        sessionId,
        studyId,
      },
      results,
      condition,
    });
  }, [results, condition]);

  function cycleStudyStates(compFadeStudyState: CFStudyState) {
    let state = null;
    switch (compFadeStudyState) {
      case CFStudyState.Start:
        state = (
          <CompFadeStart
            nextState={() => setStudyState(CFStudyState.AskConsent)}
          />
        );
        break;
      case CFStudyState.AskConsent:
        state = (
          <CompFadeConsent
            consentFunc={() => setStudyState(CFStudyState.Task)}
            noConsentFunc={() => setStudyState(CFStudyState.NoConsent)}
          />
        );
        break;
      case CFStudyState.NoConsent:
        state = <CompFadeThanks />;
        break;
      case CFStudyState.Instructions:
        state = (
          <CompFadeInstructions
            nextState={() => setStudyState(CFStudyState.Task)}
          />
        );
        break;
      case CFStudyState.Task:
        state = (
          <CompFadeTask3
            nextState={() => {
              setStudyState(CFStudyState.Selection);
              setTaskTimer(new Date().getTime())
            }}
          />
        );
        break;
      case CFStudyState.Selection:
        state =
          condition === undefined ? (
            <></>
          ) : (
            <CompFadeSelect3
              condition={condition}
              nextState={() => {
                setStudyState(CFStudyState.Questions);
                setResults(r => ({ ...r, timer:  new Date().getTime() - taskTimer }))
              }}
              slider={slider}
              setSlider={setSlider}
            />
          );
        break;
      case CFStudyState.Questions:
        state = (
          <ExplainQuestions
            setResults={setResults}
            nextState={() => setStudyState(CFStudyState.AttentionCheck)}
          />
        );
        break;
      case CFStudyState.AttentionCheck:
        state = (
          <CompFadeAttentionQ
            setResults={setResults}
            nextState={() => setStudyState(CFStudyState.Complete)}
          />
        );
        break;
      case CFStudyState.Complete:
        state = <CompFadeThanks />;
        break;
      default:
        state = <CompFadeThanks />;
    }
    return state;
  }

  return (
    <div>{isWide ? cycleStudyStates(studyState) : <BadScreenWidth />}</div>
  );
}

export default CompFadeStudy3;