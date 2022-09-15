import { useEffect } from "react";
import { ICompFadeStudyCondition3 } from "./CompFadeStudy3";
import StimHeader3 from "./StimHeader3";

interface ITextVisualProps {
	slider: number;
	setSlider: React.Dispatch<React.SetStateAction<number>>;
	textCond: ICompFadeStudyCondition3["text"];
	programLabel: { A: string; B: string };
	programAllocation: number;
	programStimuli: { A: number; B: number };
}

export function TextVisual3({
	slider,
	setSlider,
	textCond,
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
					<StimHeader3
						program={programLabel.A}
						population={MIN_PEOPLE}
						donation={(MAX_SLIDER_VALUE - slider) * 100}
						textCond={textCond}
					/>
				</div>
				<div className="h-30 w-96">
					<StimHeader3
						program={programLabel.B}
						population={MAX_PEOPLE}
						donation={slider * 100}
						textCond={textCond}
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
