import { useEffect, useState } from "react";
import { DivDollarBar, DivPerson } from "./Stimuli";

interface IIndVisualProps {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
  numPeople: number;
}

export function BarCharVisual(props: IIndVisualProps) {
  const { slider, setSlider, numPeople } = props;
  const [stim, setStim] = useState({
    small: { height: 0, count: 0 },
    large: { height: 0, count: 0 },
  });
  const MAX_ROWS = 3;
  const MAX_SLIDER_VALUE = MAX_ROWS * 3;

  useEffect(() => {
    const height = 100;
    const largeCount = numPeople;
    const smallCount = Math.floor(numPeople / 3);
    setSlider(Math.floor(MAX_SLIDER_VALUE / 2));

    setStim({
      small: { height, count: smallCount },
      large: { height, count: largeCount },
    });
  }, [MAX_SLIDER_VALUE, numPeople, setSlider]);

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };

  const pigArr = (isLarge: boolean) => {
    let arr = [];
    const sliderValue = isLarge ? slider : MAX_SLIDER_VALUE - slider;
    const currStim = isLarge ? stim.large : stim.small;

    // value per person
    const stimCount = sliderValue / currStim.count;
    const stimHeight = currStim.height * stimCount;

    for (let j = 0; j < currStim.count; j++) {
      arr.push(<DivDollarBar height={stimHeight} />);
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

  const smallPeopleArr = peopleArr(stim.small.count);
  const largePeopleArr = peopleArr(stim.large.count);

  const mainStyles = {
    height: "35rem",
  };
  const optionStyles = {
    width: "40rem",
  };
  const optionContainerStyles = {
    transform: "rotate(180deg)",
  };

  return (
    <>
      <div className="flex justify-center pb-20 space-x-4" style={mainStyles}>
        <div style={optionStyles}>
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 1 <br /> (Donating ${MAX_SLIDER_VALUE - slider})
          </h5>
          <div
            style={optionContainerStyles}
            className="w-full h-full p-2 bg-gray-200 rounded-lg"
          >
            <div>{smallPeopleArr}</div>
            <div>{pigArr(false)}</div>
          </div>
        </div>
        <div style={optionStyles}>
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 2 <br /> (Donating ${slider})
          </h5>
          <div
            style={optionContainerStyles}
            className="w-full h-full p-2 bg-gray-200 rounded-lg"
          >
            <div>{largePeopleArr}</div>
            <div>{pigArr(true)}</div>
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
