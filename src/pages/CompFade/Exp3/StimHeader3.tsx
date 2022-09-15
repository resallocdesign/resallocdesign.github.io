
interface IStimHeaderProps {
	program: string;
	population: number;
	donation: number;
	textCond: "none" | "per-person" | "per-cause"
}

export default function StimHeader3(props: IStimHeaderProps) {
	const { program, population, donation, textCond } = props;

	return (
		<h5 className="w-full pb-2 text-center text-white bg-gray-800 rounded-lg ">
			{" "}
			<span className="text-xl underline">{program}</span> <br />{" "}
			<div className="flex justify-center text-md">
				<div className="mt-2 space-y-2">
					{textCond === "per-person" && (
						<span className="text-lg font-bold text-indigo-300">
							{" "}
							<span className="inline-block w-24 my-1 bg-gray-700 rounded-lg">${Math.round((donation / population) * 10) / 10}</span> per person
						</span>
					)}
					{textCond === "per-cause" && <>
						Number of Beneficiaries: <span className="px-2 py-1 mb-2 font-bold bg-gray-700 rounded-lg"> {population} people</span>
						<br /> Current Donation: <span className="inline-block w-20 py-1 font-bold bg-gray-700 rounded-lg">${donation}</span> </>
					}
				</div>
			</div>
		</h5>
	);
}