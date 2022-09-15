import React from "react";

interface IStimHeaderProps {
  program: string;
  population: number;
  donation: number;
  hasPerPerson: boolean;
}

function StimHeader(props: IStimHeaderProps) {
  const { program, population, donation, hasPerPerson } = props;

  return (
    <h5 className="w-full pb-2 text-center bg-gray-100 rounded-lg">
      {" "}
      <span className="text-xl underline">{program}</span> <br />{" "}
      <div className="flex justify-center text-md">
        <div className="mt-2 space-y-2">
          Number of Beneficiaries: <span className="px-2 py-1 mb-2 font-bold bg-gray-200 rounded-lg"> {population} people</span>
          <br /> Current Donation: <span className="inline-block w-20 py-1 font-bold bg-gray-200 rounded-lg">${donation}</span>
          <br />
          {hasPerPerson && (
            <span className="text-lg font-bold text-indigo-600">
              {" "}
              <span className="inline-block w-24 my-1 bg-gray-200 rounded-lg">${Math.round((donation / population) * 10) / 10}</span> per person
            </span>
          )}
        </div>
      </div>
    </h5>
  );
}

export default StimHeader;
