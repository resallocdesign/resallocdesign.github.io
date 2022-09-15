import { useEffect } from "react";
import CauseVisual from "./CauseVisual";
import { IndVisual } from "./IndVisual";
import "./slider.css";
import { DivCoin, DivPerson } from "./Stimuli";
import { TextVisual } from "./TextVisual";
import usePageTitle from "../../../hooks/usePageTitle";
import { ICompFadeStudyCondition } from "./CompFadeStudy";
interface ICompFadeSelectProps {
  condition: ICompFadeStudyCondition;
  nextState: () => void;
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
}

function CompFadeSelect(props: ICompFadeSelectProps) {
  const { nextState, condition, slider, setSlider } = props;

  const PROGRAM_LABEL = { A: "Program Alpha", B: "Program Zefa" };
  const PRGORAM_STIMULI = { A: 3, B: 12 };
  const PROGRAM_ALLOCATION = 30;

  const submitResult = () => nextState();
  usePageTitle("Resource Allocation Design Study: Experiment 1");
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className="container py-6 mx-auto space-y-6 text-center">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Your Decision
      </h2>
      <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
      {condition.stim === "visualization" && (
        <>
          <div className="flex flex-col justify-between p-6 pt-0">
            <h3 className="mb-4 text-xl text-center underline">Legend</h3>
            <div className="mx-auto space-y-4 text-md">
              <div className="flex font-bold text-center">
                <div
                  style={{
                    transform: "rotate(180deg)",
                  }}
                >
                  <DivCoin height={30} />
                </div>
                <p className="pt-2 ml-6">= $100 (US Dollars)</p>
              </div>
              <div className="flex font-bold text-center ">
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
      {condition.stim === "visualization" &&
        condition.partition === "per-person" && (
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
      {condition.stim === "text" && condition.partition === "per-person" && (
        <>
          <TextVisual
            programLabel={PROGRAM_LABEL}
            programStimuli={PRGORAM_STIMULI}
            programAllocation={PROGRAM_ALLOCATION}
            showPerPerson={true}
            slider={slider}
            setSlider={setSlider}
          />
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
        </>
      )}
      {condition.stim === "visualization" &&
        condition.partition === "per-cause" && (
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
      {condition.stim === "text" && condition.partition === "per-cause" && (
        <>
          <TextVisual
            programLabel={PROGRAM_LABEL}
            programStimuli={PRGORAM_STIMULI}
            programAllocation={PROGRAM_ALLOCATION}
            showPerPerson={false}
            slider={slider}
            setSlider={setSlider}
          />
          <div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
        </>
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

export default CompFadeSelect;
