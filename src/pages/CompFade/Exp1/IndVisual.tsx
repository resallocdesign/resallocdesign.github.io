import { useEffect } from "react";
import { DivCoin, DivPerson } from "./Stimuli";
import StimHeader from "./StimHeader";

interface IIndVisualProps {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
  programLabel: { A: string; B: string };
  programStimuli: { A: number; B: number };
  programAllocation: number;
}

export function IndVisual(props: IIndVisualProps) {
  const { slider, setSlider, programLabel, programStimuli, programAllocation } =
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

  const coinArr = (isLarge: boolean) => {
    let arr = [];
    const sliderValue = isLarge ? slider : MAX_SLIDER_VALUE - slider;
    const stimCount = isLarge ? MAX_PEOPLE : MIN_PEOPLE;
    const stimHeight = 30;
    const amountPerPerson = Math.floor((sliderValue * 1000) / stimCount) / 10;
    const fixedCoinRows = Math.floor(amountPerPerson / 100);
    const finalCoinRowRatio = Math.floor(amountPerPerson % 100) / 100;
    const finalCoinRowHeight = finalCoinRowRatio * stimHeight;

    for (let i = 0; i < fixedCoinRows; i++) {
      for (let j = 0; j < stimCount; j++) {
        arr.push(<DivCoin height={stimHeight} />);
      }
      arr.push(<div className="-mb-3" />);
    }
    for (let j = 0; j < stimCount; j++) {
      arr.push(<div className="mb-2" />);
    }

    for (let j = 0; j < stimCount; j++) {
      arr.push(<DivCoin height={finalCoinRowHeight} />);
    }

    return arr;
  };

  const peopleArr = (people: number) => {
    let arr = [];
    for (let i = 0; i < people; i++) {
      arr.push(<DivPerson />);
    }
    return arr;
  };

  const smallPeopleArr = peopleArr(MIN_PEOPLE);
  const largePeopleArr = peopleArr(MAX_PEOPLE);

  const optionContainerStyles = {
    transform: "rotate(180deg)",
  };

  return (
    <>
      <div className="flex justify-center space-x-4">
        <div className="w-96">
          <StimHeader
            program={programLabel.A}
            population={MIN_PEOPLE}
            donation={(MAX_SLIDER_VALUE - slider) * 100}
            hasPerPerson={true}
          />
          <div
            style={optionContainerStyles}
            className="w-full p-2 bg-gray-200 rounded-lg h-96"
          >
            <div>{smallPeopleArr}</div>
            <div className="py-2 overflow-hidden">{coinArr(false)}</div>
          </div>
        </div>
        <div className="w-96">
          <StimHeader
            program={programLabel.B}
            population={MAX_PEOPLE}
            donation={slider * 100}
            hasPerPerson={true}
          />
          <div
            style={optionContainerStyles}
            className="w-full p-2 bg-gray-200 rounded-lg h-96"
          >
            <div>{largePeopleArr}</div>
            <div className="py-2 overflow-hidden">{coinArr(true)}</div>
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
