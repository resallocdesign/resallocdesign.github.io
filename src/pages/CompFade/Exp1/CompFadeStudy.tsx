import usePageTitle from "../../../hooks/usePageTitle";
import { useEffect, useState } from "react";
import CompFadeStart from "./CompFadeStart";
import CompFadeConsent from "./CompFadeConsent";
import CompFadeThanks from "./CompFadeThanks";
import CompFadeInstructions from "./CompFadeInstructions";
import CompFadeTask from "./CompFadeTask";
import ExplainQuestions from "./ExplainQuestions";
import CompFadeSelect from "./CompFadeSelect";
import { CompFadeStudyService } from "../../../services/CompFadeStudy";
import CompFadeAttentionQ from "./CompFadeAttentionQ";
import BadScreenWidth from "./BadScreenWidth";

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

export interface ICompFadeStudyCondition {
  stim: "visualization" | "text";
  partition: "per-person" | "per-cause";
}

export interface ICompFadeStudyResults {
  programBAlloc: number;
  q1: string;
  q2: string;
  q3: string;
}

function CompFadeStudy() {
  usePageTitle("Compassion Fade Study");
  const [studyState, setStudyState] = useState(CFStudyState.Instructions);
  const [results, setResults] = useState<ICompFadeStudyResults>({
    programBAlloc: -1,
    q1: "",
    q2: "",
    q3: "",
  });
  const [condition, setCondition] = useState<ICompFadeStudyCondition>();
  const [isWide, setIsWide] = useState(true);
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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
      case "vp":
        setCondition({ stim: "visualization", partition: "per-person" });
        break;
      case "vc":
        setCondition({ stim: "visualization", partition: "per-cause" });
        break;
      case "np":
        setCondition({ stim: "text", partition: "per-person" });
        break;
      case "nc":
        setCondition({ stim: "text", partition: "per-cause" });
        break;
      default:
        setCondition({
          stim: Math.random() > 0.5 ? "visualization" : "text",
          partition: Math.random() > 0.5 ? "per-person" : "per-cause",
        });
    }
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
          <CompFadeTask
            nextState={() => setStudyState(CFStudyState.Selection)}
          />
        );
        break;
      case CFStudyState.Selection:
        state =
          condition === undefined ? (
            <></>
          ) : (
            <CompFadeSelect
              condition={condition}
              nextState={() => setStudyState(CFStudyState.Questions)}
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

export default CompFadeStudy;
