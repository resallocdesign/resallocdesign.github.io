import React from "react";
import { DivDollar, DivPeople, DivPerson, PigRow } from "./Stimuli";

function GroupedVisual({
  slider,
  setSlider,
}: {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
}) {
  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };
  const PEOPLE_REP = 9;

  const pigArr = (slider: number) => {
    let arr: JSX.Element[] = [];
    for (let i = 0; i < slider; i++) {
      arr.push(<PigRow />);
    }
    return arr;
  };

  const peopleArr = (fileName: string) => {
    let arr = [];
    for (let i = 0; i < PEOPLE_REP; i++) {
      if (fileName === "people.png") {
        arr.push(<DivPeople />);
      } else if (fileName === "person.png") {
        arr.push(<DivPerson />);
      }
    }
    return arr;
  };

  return (
    <>
      <div className="flex justify-center pb-20 space-x-4">
        <div className="h-96 w-96">
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 2 <br /> (Donating ${(10 - slider) * 1000})
          </h5>
          <div className="w-full h-full p-2 bg-gray-200 rounded-lg">
            <div className="flex flex-wrap ">{pigArr(10 - slider)}</div>
            <div className="flex">{peopleArr("person.png")}</div>
          </div>
        </div>
        <div className="h-96 w-96">
          <h5 className="w-full pb-2 text-lg font-bold text-center bg-gray-100 rounded-lg">
            {" "}
            Village 1 <br /> (Donating ${slider * 1000})
          </h5>
          <div className="p-2 bg-gray-200 rounded-lg w-96 h-96">
            <div className="flex flex-wrap ">{pigArr(slider)}</div>
            <div className="flex">{peopleArr("people.png")}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-40 p-2 bg-gray-100 rounded-lg w-42">
          <h2 className="mb-2 text-xl font-semibold underline">Legend</h2>
          <div className="flex space-x-2">
            <DivDollar height={30} />{" "}
            <strong className="flex my-auto text-center align-center">
              $100
            </strong>{" "}
          </div>
          <div className="flex space-x-2">
            <DivPerson />{" "}
            <strong className="flex my-auto text-center align-center">
              1,000 People
            </strong>{" "}
          </div>
          <div className="flex space-x-2">
            <DivPeople />{" "}
            <strong className="flex my-auto text-center align-center">
              3,000 People
            </strong>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <input
          id="slider"
          className="w-1/2 mt-2 mr-40 rounded-md cursor-pointer"
          type="range"
          min="0"
          max="10"
          value={slider}
          onChange={onSliderChange}
        />
      </div>
    </>
  );
}

export default GroupedVisual;
