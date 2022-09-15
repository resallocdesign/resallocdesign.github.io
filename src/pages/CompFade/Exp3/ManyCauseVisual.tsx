import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ICompFadeStudyCondition3 } from "./CompFadeStudy3";
import StimHeader3 from "./StimHeader3";

interface IIndVisualProps {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
  programLabel: { A: string; B: string };
  programStimuli: { A: number; B: number };
  programAllocation: number;
  textCond: ICompFadeStudyCondition3["text"]
}

export function ManyCauseVisual(props: IIndVisualProps) {
  const { slider, setSlider, programLabel, programStimuli, programAllocation, textCond } =
    props;

  const programARef = useRef<HTMLDivElement>(null);
  const programBRef = useRef<HTMLDivElement>(null);

  const MAX_SLIDER_VALUE =  programAllocation;
  const MAX_PEOPLE = programStimuli.B;
  const MIN_PEOPLE = programStimuli.A;

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };

  // set slider to the middle
  useEffect(() => {
    setSlider(Math.floor(MAX_SLIDER_VALUE / 2));
  }, [MAX_SLIDER_VALUE, setSlider]);


  const peopleArr = (people: number) => {
    let arr = [];
    for (let i = 0; i < people; i++) {
      if (i % 10 === 0) {
        arr.push(<br key={uuidv4()} />);
      }
      arr.push(<DivPerson key={uuidv4()} />);
    }
    return arr;
  };

  const coinArr = (coins: number) => {

    const maxWidth = 100;
    const maxHeight = 100;
    const partialCoinFill = "rgb(234 179 8)";
    const coinFill = "#eeb501";
    const coinRadius = 2;
    const maxCoinFit = Math.floor(maxWidth / (2 * coinRadius));

    const wholeCoins = coins
    const partialCoin = 0;

    const coinX = (i: number) =>
      maxWidth - (i % maxCoinFit) * (coinRadius * 2) - coinRadius;

    const coinY = (i: number) =>
      maxHeight - coinRadius - Math.floor(i / maxCoinFit) * 2 * coinRadius;

    let coinInset = "inset(0% 0% 0% 0%)";
    if (partialCoin <= 25) {
      coinInset = "inset(40% 0% 0% 40%)";
    } else if (partialCoin <= 50) {
      coinInset = "inset(40% 0% 0% 0%)";
    } else if (partialCoin <= 75) {
      coinInset =
        "polygon(50.00% 3.00%,51% 45%,100% 44%,100% 100%,0% 100%,0% 3%)";
    } else if (partialCoin <= 33) {
      coinInset = "polygon(55% 50%,100% 100%,0% 100%,0% 50%)";
    } else if (partialCoin <= 66) {
      coinInset = "polygon(100% 0%,40% 49%,100% 100%,0% 100%,0% 0%)";
    }

    return (
      <div className="flex flex-col justify-end w-full h-full px-4 pb-4">
        <svg
          viewBox={`0 0 ${maxWidth} ${maxHeight}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from(Array(wholeCoins + 1).keys()).map((i) => {
            if (i < wholeCoins) {
              return (
                <circle
                  cx={coinX(i)}
                  cy={coinY(i)}
                  r={coinRadius}
                  fill={coinFill}
                />
              );
            } else {
              return (
                <circle
                  cx={coinX(i)}
                  cy={coinY(i)}
                  r={coinRadius}
                  fill={partialCoinFill}
                  className={`bg-blue-200 ${partialCoin === 0 ? "hidden" : ""}`}
                  clipPath={coinInset}
                />
              );
            }
          })}
        </svg>
      </div>
    )
  };

  return (
    <>
      <div className="flex flex-col justify-center space-y-4 md:space-x-4 md:flex-row md:space-y-0">
        <div className="" style={{ width: 500 }}>
          <StimHeader3
            program={programLabel.A}
            population={MIN_PEOPLE}
            donation={(MAX_SLIDER_VALUE - slider) * 100}
            textCond={textCond}
          />
          <div className="flex w-full bg-black rounded-lg h-96">
            <div ref={programARef} className="w-1/2 h-full pt-6">
              {coinArr((MAX_SLIDER_VALUE - slider))}
            </div>
            <div className="flex flex-col justify-end w-1/2 pb-4">
              <div className="" >{peopleArr(MIN_PEOPLE)}</div>
            </div>
          </div>
        </div>
        <div className="" style={{ width: 500 }}>
          <StimHeader3
            program={programLabel.B}
            population={MAX_PEOPLE}
            donation={slider * 100}
            textCond={textCond}
          />
          <div
            className="flex w-full bg-black rounded-lg h-96">
            <div ref={programBRef} className="w-1/2 h-full pt-6 ">
              {coinArr(slider)}
            </div>
            <div className="flex flex-col justify-end w-1/2 h-full pb-4"><div>{peopleArr(MAX_PEOPLE)}</div></div>

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


function DivPerson() {

  return (
    <svg fill="white" viewBox={`0 0 ${100} ${100}`}
      xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 ">
      <g>
        <circle
          cx={45}
          cy={27}
          r={9}
          className={`bg-blue-200`}
        />
        <ellipse
          clipPath="polygon(50% 33%, 65% 0, 100% 0, 100% 99%, 0 100%, 0 0, 35% 0)"
          cx={45}
          cy={50}
          rx={17}
          ry={13}
          className={`bg-blue-200`}
        />
        <rect
          width={23}
          height={35}
          x={33.5}
          y={60}
          clipPath="polygon(0 0, 100% 0, 75% 100%, 25% 100%)"
        />
      </g>
    </svg>
  );
}


export default ManyCauseVisual;
