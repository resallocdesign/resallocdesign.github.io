import { useEffect } from "react";
import "../slider.css";
import { DivPerson } from "./ManyVisual";
import usePageTitle from "../../../hooks/usePageTitle";
import { ManyVisual } from "./ManyVisual";
import ManyCauseVisual from "./ManyCauseVisual";
import { ICompFadeStudyCondition3 } from "./CompFadeStudy3";
import { TextVisual3 } from "./TextVisual3";

interface ICompFadeSelectProps {
	condition: ICompFadeStudyCondition3;
	nextState: () => void;
	slider: number;
	setSlider: React.Dispatch<React.SetStateAction<number>>;
}

export default function CompFadeSelect3(props: ICompFadeSelectProps) {
	const { nextState, condition, slider, setSlider } = props;

	const PROGRAM_LABEL = { A: "Program Alpha", B: "Program Zefa" };
	const PRGORAM_STIMULI = { A: 3, B: 120 };
	const PROGRAM_ALLOCATION = 246;

	const submitResult = () => nextState();
	usePageTitle("Resource Allocation Design Study: Experiment 3");
	useEffect(() => {
		return () => {
			window.scrollTo(0, 0);
		};
	}, []);

	return (
		<div className="min-h-screen bg-gray-600">
			<div className="container py-6 mx-auto space-y-6 text-center ">
				<h2 className="text-4xl font-bold text-center text-gray-100">
					Your Decision
				</h2>
				<p className="py-4 text-white bg-gray-800 rounded-lg">
					You have a total of $24 600 (US Dollars) to allocate between the two
					programs, <br /> please use the scale to select how you
					would allocate these resources.
				</p>
				<div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
				{condition.vis !== "none" && (
					<Legend />
				)}
				{condition.vis === "none" && <TextVisual3
					programLabel={PROGRAM_LABEL}
					programStimuli={PRGORAM_STIMULI}
					programAllocation={PROGRAM_ALLOCATION}
					textCond={condition.text}
					slider={slider}
					setSlider={setSlider}
				/>}
				{condition.vis === "per-cause" && (
					<>
						<ManyCauseVisual
							programLabel={PROGRAM_LABEL}
							programStimuli={PRGORAM_STIMULI}
							programAllocation={PROGRAM_ALLOCATION}
							textCond={condition.text}
							slider={slider}
							setSlider={setSlider}
						/>
						<div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
					</>
				)}

				{condition.vis === "per-person" && (
					<>
						<ManyVisual
							programLabel={PROGRAM_LABEL}
							programStimuli={PRGORAM_STIMULI}
							programAllocation={PROGRAM_ALLOCATION}
							textCond={condition.text}
							slider={slider}
							setSlider={setSlider}
						/>
						<div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />
					</>
				)}

				<div className="flex justify-around my-6">
					<button
						onClick={submitResult}
						className="w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-indigo-300 rounded-lg shadow-lg hover:bg-indigo-200 "
					>
						Submit Choice
					</button>
				</div>
			</div>
		</div>
	);
}

function Legend() {
	return (
		<>
			<div className="flex flex-col justify-between p-6 text-white bg-gray-800 rounded-lg">
				<h3 className="mb-4 text-xl text-center underline">Legend</h3>
				<div className="mx-auto space-y-4 text-md">
					<div className="flex font-bold text-center">
						<svg
							className="w-8 h-full"
							viewBox={`0 0 ${100} ${100}`}
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx={40} cy={60} r={20} fill={"rgb(234 179 8)"} />
						</svg>

						<p className="pt-2 ">= $100 (US Dollars)</p>
					</div>
					<div className="flex font-bold text-center ">
						<div
							style={{
								transform: "rotate(180deg)",
							}}
						>
							<DivPerson />
						</div>
						<p className="pt-2 ml-2">= 1 Person</p>
					</div>
				</div>
			</div>{" "}
			<div className="w-full h-1 my-4 bg-indigo-300 rounded-full " />{" "}
		</>
	)
}