import { useEffect } from "react";
import { ICompFadeStudyCondition3 } from "./CompFadeStudy3";
import StimHeader3 from "./StimHeader3";
import * as d3 from "d3-shape";

interface IManyVisualProps {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
  programLabel: { A: string; B: string };
  programStimuli: { A: number; B: number };
  programAllocation: number;
  textCond: ICompFadeStudyCondition3["text"]
}

export function ManyVisual(props: IManyVisualProps) {
  const { slider, setSlider, programLabel, programStimuli, programAllocation, textCond } =
    props;

  const MAX_SLIDER_VALUE = programAllocation;
  const MAX_PEOPLE = programStimuli.B;
  const MIN_PEOPLE = programStimuli.A;

  // set slider to the middle
  useEffect(() => {
    setSlider(Math.floor(MAX_SLIDER_VALUE / 2));
  }, [MAX_SLIDER_VALUE, setSlider]);

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };

  const peopleArr = (people: number, coinsPerPerson: number) => {
    const style: React.CSSProperties =
      people > 10
        ? {}
        : {
          height: 200,
          width: 100,
          marginTop: -50
        };

    const maxWidth = people > 10 ? 100 : 400;
    const maxHeight = people > 10 ? 100 : 200;
    const partialCoinFill = "rgb(234 179 8)";
    const coinFill = "#eeb501";
    const coinRadius = 15;
    const maxCoinFit = Math.floor(maxWidth / (2 * coinRadius));

    const wholeCoins = Math.floor(coinsPerPerson / people);

    // find the fraction, i.e 0.25, 0.5, 0.75, 1
    const partialCoin = (coinsPerPerson / people - wholeCoins);

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

    const arr = Array.from(Array(people).keys()).map((_, idx) => {
      return (
        <>
          {idx % 20 === 0 ? <br /> : null}
          <div className="inline-block ">
            <div className="flex flex-col">
              <div className="mt-1">
                <DivPerson />
              </div>
              <div
                style={{ transform: "rotate(270deg)", ...style }}
                className="flex flex-wrap "
              >
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
                        <path
                          transform={`translate(${coinX(i)},${coinY(i)})`}
                          fill={coinFill}
                          d={d3.arc()({
                            innerRadius: 0,
                            outerRadius: coinRadius,
                            startAngle: 0,
                            endAngle: Math.PI * 2 * partialCoin,
                          })?.toString()
                          }
                          // stroke="#000000" stroke-width="1" 
                        />
                        // <circle
                        //   cx={coinX(i)}
                        //   cy={coinY(i)}
                        //   r={coinRadius}
                        //   fill={partialCoinFill}
                        //   className={`bg-blue-200 ${partialCoin === 0 ? "hidden" : ""}`}
                        //   clipPath={coinInset}
                        // />
                      );
                    }
                  })}
                </svg>
              </div>
            </div>
          </div>
        </>
      );
    });

    return arr;
  };

  //const smallPeopleArr = peopleArr(MIN_PEOPLE, slider / MIN_PEOPLE );
  // const largePeopleArr = peopleArr(MAX_PEOPLE, 10);
  // console.log(slider, slider / MIN_PEOPLE);

  const optionContainerStyles = {
    transform: "rotate(180deg)",
  };

  return (
    <>
      <div className="flex justify-center space-x-4">
        <div className="" style={{ width: 500 }}>
          <StimHeader3
            program={programLabel.A}
            population={MIN_PEOPLE}
            donation={(MAX_SLIDER_VALUE - slider) * 100}
            textCond={textCond}
          />

          <div
            style={optionContainerStyles}
            className="w-full bg-black rounded-lg h-96"
          >
            <div>{peopleArr(MIN_PEOPLE, (MAX_SLIDER_VALUE - slider))}</div>
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
            style={optionContainerStyles}
            className="w-full bg-black rounded-lg h-96"
          >
            <div>{peopleArr(MAX_PEOPLE, slider)}</div>
          </div>
        </div>
      </div>

      <div className="w-full mr-32">
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
    </>
  );
}

export function DivPerson() {
  const style = { transform: "rotate(180deg)"  };

  return (
    <svg style={style} viewBox={`0 0 ${100} ${100}`}
      xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 ">
      <g  fill="white">
        <circle
          cx={45}
          cy={27}
          r={9}
        />
        <ellipse
          clipPath="polygon(50% 33%, 65% 0, 100% 0, 100% 99%, 0 100%, 0 0, 35% 0)"
          cx={45}
          cy={50}
          rx={17}
          ry={13}
          
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
