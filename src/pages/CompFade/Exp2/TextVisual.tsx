import { useEffect } from "react";
import StimHeader from "./StimHeader";

interface ITextVisualProps {
  slider: number;
  setSlider: React.Dispatch<React.SetStateAction<number>>;
  showPerPerson: boolean;
  programLabel: { A: string; B: string };
  programAllocation: number;
  programStimuli: { A: number; B: number };
}

export function TextVisual({
  slider,
  setSlider,
  showPerPerson,
  programLabel,
  programAllocation,
  programStimuli,
}: ITextVisualProps) {
  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlider(parseInt(e.currentTarget.value));
  };
  const MAX_SLIDER_VALUE = programAllocation;
  const MAX_PEOPLE = programStimuli.B;
  const MIN_PEOPLE = programStimuli.A;

  useEffect(() => {
    setSlider(Math.floor(MAX_SLIDER_VALUE / 2));
  }, [MAX_SLIDER_VALUE, setSlider]);

  return (
    <>
      <div className="flex justify-center mb-8 space-x-4">
        {" "}
        <div className="h-16 mb-6 w-96">
          <StimHeader
            program={programLabel.A}
            population={MIN_PEOPLE}
            donation={(MAX_SLIDER_VALUE - slider) * 100}
            hasPerPerson={showPerPerson}
          />
        </div>
        <div className="h-30 w-96">
          <StimHeader
            program={programLabel.B}
            population={MAX_PEOPLE}
            donation={slider * 100}
            hasPerPerson={showPerPerson}
          />
        </div>
      </div>
      <div className="w-full ">
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
