import React, { useEffect, useRef, useState } from "react";
import { possionDiskSampling } from "./possionDiskSampling";
import StimHeader from "./StimHeader";
import { DivCoin, DivPerson } from "./Stimuli";

interface IIndVisualProps {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
  programLabel: { A: string; B: string };
  programStimuli: { A: number; B: number };
  programAllocation: number;
}

export function CauseVisual(props: IIndVisualProps) {
  const { slider, setSlider, programLabel, programStimuli, programAllocation } =
    props;

  const [programASamples, setProgramASamples] = useState<
    { x: number; y: number }[]
  >([]);
  const [programBSamples, setProgramBSamples] = useState<
    { x: number; y: number }[]
  >([]);

  const programARef = useRef<HTMLDivElement>(null);
  const programBRef = useRef<HTMLDivElement>(null);

  const MAX_SLIDER_VALUE = programAllocation;
  const MAX_PEOPLE = programStimuli.B;
  const MIN_PEOPLE = programStimuli.A;

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };

  // set slider to the middle
  useEffect(() => {
    setSlider(Math.floor(MAX_SLIDER_VALUE / 2));
  }, [MAX_SLIDER_VALUE, setSlider]);

  useEffect(() => {
    const programAEl = programARef.current;
    const programBEl = programBRef.current;

    if (!programAEl || !programBEl) {
      return;
    }

    // get height and width of program divs
    const { width: programAWidth, height: programAHeight } =
      programAEl.getBoundingClientRect();
    const { width: programBWidth, height: programBHeight } =
      programBEl.getBoundingClientRect();

    // keep trying until we find 30 points
    let programASamples: { x: number; y: number }[] | undefined;
    do {
      programASamples = getSamples(programAWidth, programAHeight);
    } while (programASamples === undefined);

    let programBSamples: { x: number; y: number }[] | undefined;
    do {
      programBSamples = getSamples(programBWidth, programBHeight);
    } while (programBSamples === undefined);

    if (!programBSamples || !programASamples) {
      return;
    }

    setProgramASamples(programASamples);
    setProgramBSamples(programBSamples);
  }, [programARef, programBRef]);

  const peopleArr = (people: number) => {
    let arr = [];
    for (let i = 0; i < people; i++) {
      arr.push(
        <div key={people + "key" + i}>
          {" "}
          <DivPerson />{" "}
        </div>
      );
    }
    return arr;
  };

  const programDollarEl = (
    sampleArr: { x: number; y: number }[],
    program: "A" | "B"
  ) =>
    sampleArr.map((coord, idx) => {
      const stimHeight = 30;
      const divStyle = {
        left: coord.x + "px",
        top: coord.y + "px",

        position: "absolute",
      } as any;
      const sliderValue = program === "A" ? slider : MAX_SLIDER_VALUE - slider;

      if (idx < sliderValue)
        return <React.Fragment key={program + idx}></React.Fragment>;
      else {
        return (
          <div key={program + idx} style={divStyle}>
            <DivCoin height={stimHeight} />
          </div>
        );
      }
    });

  const smallPeopleArr = peopleArr(MIN_PEOPLE);
  const largePeopleArr = peopleArr(MAX_PEOPLE);

  const optionContainerStyles = {
    transform: "rotate(180deg)",
  };

  return (
    <>
      <div className="flex flex-col justify-center space-y-4 md:space-x-4 md:flex-row md:space-y-0">
        <div className="w-96">
          <StimHeader
            program={programLabel.A}
            population={MIN_PEOPLE}
            donation={(MAX_SLIDER_VALUE - slider) * 100}
            hasPerPerson={false}
          />

          <div
            style={optionContainerStyles}
            className="w-full p-2 bg-gray-200 rounded-lg h-96"
          >
            <div className="flex justify-center">{smallPeopleArr}</div>
            <div className="w-full mt-8 h-72">
              <div ref={programARef} className="w-full h-full m-3">
                {programASamples.length !== 0 &&
                  programDollarEl(programASamples, "A")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-96">
          <StimHeader
            program={programLabel.B}
            population={MAX_PEOPLE}
            donation={slider * 100}
            hasPerPerson={false}
          />
          <div
            style={optionContainerStyles}
            className="w-full p-2 bg-gray-200 rounded-lg h-96"
          >
            <div className="flex justify-center">{largePeopleArr}</div>
            <div
              ref={programBRef}
              className="flex flex-wrap-reverse justify-end w-full mt-8 h-72"
            >
              <div ref={programBRef} className="w-full h-full m-3">
                {programBSamples.length !== 0 &&
                  programDollarEl(programBSamples, "B")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mr-32">
        <div className="w-full">
          <input
            id="slider"
            className="w-1/2 rounded-md cursor-pointer "
            type="range"
            min="0"
            max={MAX_SLIDER_VALUE}
            value={slider}
            onChange={onSliderChange}
          />
        </div>
      </div>
    </>
  );
}

function getSamples(programWidth: number, programHeight: number) {
  const radius = 40;
  const programSampler = possionDiskSampling(
    radius,
    programWidth - 60,
    programHeight - 60
  );
  const programSamples = [];

  let i = 0;
  while (i < 30) {
    const coord = programSampler();
    if (!coord) return;
    const [x, y] = coord;
    programSamples.push({ x: x + 15, y: y + 120 });
    i++;
  }
  return programSamples;
}

export default CauseVisual;
