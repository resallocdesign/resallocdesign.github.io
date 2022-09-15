import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BarCharVisual } from "./BarCharVisual";
import CauseVisual from "./CauseVisual";
import { IndVisual } from "./IndVisual";
import "./slider.css";
import { DivCoin, DivPerson } from "./Stimuli";
import { TextVisual } from "./TextVisual";
import * as questionAndChocicesDefault from "./questions.json";
import MultiChoice from "../../../components/Questions/MultiChoice";
import usePageTitle from "../../../hooks/usePageTitle";

export interface IOptions {
  moneyStim: string;
  peopleStim: string;
  orientation: string;
}

type ConditionType =
  | "visPerson"
  | "visCause"
  | "numPerson"
  | "numCause"
  | "all";

function CompFade({ nextState }: { nextState: () => void }) {
  usePageTitle("Resource Allocation Design Study: Experiment 2");

  const PROGRAM_LABEL = { A: "Program Alpha", B: "Program Zefa" };
  const PRGORAM_STIMULI = { A: 3, B: 12 };
  const PROGRAM_ALLOCATION = 30;

  const [slider, setSlider] = useState(5);
  const [textSlider, setTextSlider] = useState(10);
  const [options, setOptions] = useState<IOptions>({
    moneyStim: "coin1",
    peopleStim: "person1",
    orientation: "hsplit",
  });
  const [response, setResponse] = useState<{
    [key: number]: {
      question: string;
      response: any;
    };
  }>({ 4: { question: "", response: "" } });
  const [condition, setCondition] = useState<ConditionType>("all");
  const [explainText, setExplainText] = useState("");

  const hist = useHistory();

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setExplainText(e.currentTarget.value);
  };

  
  const submitResult = () => {
    nextState();
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const currentCondition = searchParams.get("cond");

    switch (currentCondition) {
      case "vp":
        setCondition("visPerson");
        break;
      case "vc":
        setCondition("visCause");
        break;
      case "np":
        setCondition("numPerson");
        break;
      case "nc":
        setCondition("numCause");
        break;
      default:
        setCondition("all");
    }

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const updateParam = (param: string, value: string) => {
    const params = new URLSearchParams(hist.location.search);
    params.set(param, value);
    const search = "?" + params.toString();
    hist.push({ pathname: "/project/compfade", search });
  };
  const onMoneyStimChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const moneyStim = e.currentTarget.value;
    updateParam("money_type", moneyStim);
    setOptions({ ...options, moneyStim });
  };
  const onPersonStimChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const peopleStim = e.currentTarget.value;
    setOptions({ ...options, peopleStim });
    updateParam("person_type", peopleStim);
  };
  const questionAndChocices = questionAndChocicesDefault.main;

  return (
    <div className="container py-6 mx-auto space-y-6 text-center">
      {condition === "all" && (
        <>
          <div className="mx-auto text-xl text-center text-gray-800">
            <h3 className="mb-8 text-3xl font-semibold text-center text-gray-800 underline">
              Instructions
            </h3>
            <div className="flex flex-col w-3/4 mx-auto text-left">
              <p>
                For three decades, a charitable organization known as Mercy
                Corps has helped support children in need around the globe. The
                organization runs programs in dozens of countries to help
                children get access to food, shelter, and education. In all of
                the work they do, cost effectiveness is highly important to the
                organization, as they want donors’ money to go to the ones who
                need it the most– the children. Their financial report indicates
                that 87 % of their money went directly to programs that support
                people in need. (The remaining 13% covers administrative costs.){" "}
                <br /> <br />
                Please read your task below and then use the slider and the
                context surrounding it to make an informed decision.
              </p>
            </div>
          </div>
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
          <h3 className="mb-8 text-3xl font-semibold text-center text-gray-800 underline">
            Your Task
          </h3>
          <div className="mx-auto text-xl text-center text-black">
            <div className="flex flex-col w-3/4 mx-auto text-left">
              <p>
                Mercy Corps is an organization which often runs multiple aid
                programs to benefit the impoverished population of different
                areas in the world. Today you will be playing the role of a
                small investor looking to donate to this program based on your
                own rationale. <br /> Their first newly launched program,
                Program Alpha, can help prevent the death of children who are
                unable to live out their lives due to unstable conditions. A
                report says that donating to this program will mean that your
                money will go toward food, clothes, and education to help 12
                children who would greatly benefit from the aid. <br /> Their
                second newly launched program, Program Zefa, can also help
                prevent the death of children who are unable to live out their
                lives due to unstable conditions in a different community from
                Program Alpha. Another report projects that donating to this
                program will mean that your money will go toward food, clothes,
                and education to help 3 children, who will greatly benefit from
                the aid. <br />
                Given that you have a total of 2700 US Dollars to allocate
                between the two programs, please use the scale below to select
                how you allocate your resources.
              </p>
            </div>
          </div>
        </>
      )}
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Your Decision
      </h2>
      <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
      {condition === "all" && (
        <>
          <div className="flex justify-center space-x-8 text-left">
            <label className="block">
              <span className="text-xl text-gray-800">Money Stimuli:</span>
              <select
                onChange={onMoneyStimChange}
                value={options.moneyStim}
                className="block p-2 mt-1 ml-2"
              >
                <option value="coin1">Coin 1</option>
                <option value="coin2">Coin 2</option>
                <option value="wallet">Wallet</option>
                <option value="piggy">Piggy</option>
                <option value="abstract">Abstract</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xl text-gray-800">Person Stimuli:</span>
              <select
                onChange={onPersonStimChange}
                value={options.peopleStim}
                className="block p-2 mt-1"
              >
                <option value="person1">Gray Person </option>
                <option value="people">Gray People </option>
                <option value="abstract">Abstract</option>
              </select>
            </label>
          </div>
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
        </>
      )}

      {(condition === "all" ||
        condition === "visCause" ||
        condition === "visPerson") && (
        <>
          <div className="flex flex-col justify-between p-6 pt-0">
            <h3 className="mb-4 text-3xl text-center underline">Legend</h3>
            <div className="mx-auto space-y-6">
              <div className="flex text-xl font-bold text-center">
                <div
                  style={{
                    transform: "rotate(180deg)",
                  }}
                >
                  <DivCoin height={30} />
                </div>
                <p className="pt-2 ml-6">= $100 (US Dollars)</p>
              </div>
              <div className="flex text-xl font-bold text-center ">
                <div
                  style={{
                    transform: "rotate(180deg)",
                  }}
                >
                  <DivPerson />
                </div>

                <p className="pt-2 ml-6">= 1 Person</p>
              </div>
            </div>
          </div>{" "}
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />{" "}
        </>
      )}

      {condition === "all" && (
        <h2 className="text-2xl text-bold "> Visual | Per-person focus</h2>
      )}
      {(condition === "visPerson" || condition === "all") && (
        <>
          <IndVisual
            programLabel={PROGRAM_LABEL}
            programStimuli={PRGORAM_STIMULI}
            programAllocation={PROGRAM_ALLOCATION}
            slider={slider}
            setSlider={setSlider}
          />
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
        </>
      )}

      {condition === "all" && (
        <h2 className="text-2xl text-bold "> Numerals | Per-person focus</h2>
      )}
      {(condition === "numPerson" || condition === "all") && (
        <>
          <TextVisual
            programLabel={PROGRAM_LABEL}
             programStimuli={PRGORAM_STIMULI}
            programAllocation={PROGRAM_ALLOCATION}
            showPerPerson={true}
            slider={textSlider}
            setSlider={setTextSlider}
          />
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
        </>
      )}
      {condition === "all" && (
        <h2 className="text-2xl text-bold "> Visual | Per-cause focus</h2>
      )}
      {(condition === "visCause" || condition === "all") && (
        <>
          <CauseVisual
            programLabel={PROGRAM_LABEL}
            programStimuli={PRGORAM_STIMULI}
            programAllocation={PROGRAM_ALLOCATION}
            slider={slider}
            setSlider={setSlider}
          />
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
        </>
      )}
      {condition === "all" && (
        <h2 className="text-2xl text-bold "> Numerals | Per-cause focus</h2>
      )}
      {(condition === "numCause" || condition === "all") && (
        <>
          <TextVisual
            programLabel={PROGRAM_LABEL}
             programStimuli={PRGORAM_STIMULI}
            programAllocation={PROGRAM_ALLOCATION}
            showPerPerson={false}
            slider={textSlider}
            setSlider={setTextSlider}
          />
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
        </>
      )}
      {condition === "all" && (
        <>
          <h2 className="text-2xl text-bold ">
            {" "}
            Visual (Bar) | Per-person focus
          </h2>
          <BarCharVisual numPeople={9} slider={slider} setSlider={setSlider} />
        </>
      )}

      {condition === "all" && (
        <div className="w-3/4 mx-auto md:w-1/2 ">
          <h3 className="-mb-4 text-3xl font-bold text-center underline">
            Questions
          </h3>
          {questionAndChocices.map((qa, idx) => {
            const qNum = idx + 1;
            const isMultiChoice = qa.question.includes("select more than one");
            return (
              <div key={idx + 200}>
                <MultiChoice
                  selectMultiple={isMultiChoice}
                  choices={qa.choices}
                  question={qNum + ". " + qa.question}
                  responseSetter={(res: any) =>
                    setResponse((r) => {
                      let obj = { ...r };
                      r[idx] = { question: qa.question, response: res };
                      return obj;
                    })
                  }
                />
                <div className="w-full h-1 bg-blue-200 rounded-lg"> </div>
              </div>
            );
          })}
          <div className="mt-6">
            <label className="flex mb-2 text-lg font-bold">
              4. Explain your decision for the slider value you have selected.
            </label>
            <textarea
              placeholder="Write your answer here..."
              className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:shadow-lg hover:bg-gray-200 "
              rows={6}
              onChange={onTextChange}
              value={explainText}
            ></textarea>
          </div>
        </div>
      )}

      <div className="flex justify-around my-6">
        <button
          onClick={submitResult}
          className="w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 "
        >
          Submit Choice
        </button>
      </div>
    </div>
  );
}

export default CompFade;
