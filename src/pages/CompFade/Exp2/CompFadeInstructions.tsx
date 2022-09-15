function CompFadeInstructions({ nextState }: { nextState: () => void }) {
  return (
    <div>
      <div className="container px-8 pt-4 mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Instructions
        </h2>

        <p className="mt-16 mb-12 text-gray-800 text-md">
          For three decades, a charitable organization known as Mercy Corps has
          helped support children in need around the globe. <br /> <br /> The
          organization runs programs in dozens of countries to help children get
          access to food, shelter, and education. In all of the work they do,
          cost effectiveness is highly important to the organization, as they
          want donors’ money to go to the ones who need it the most--the
          children. <br /> <br /> Their financial report indicates that 87% of
          their money went directly to programs that support people in need.
          (The remaining 13% covers administrative costs.) <br /> <br />
          Please take this into consideration and read your task for this study
          on the next page. Afterwards, you will be prompted to use a slider and
          the context surrounding it to make an informed decision. <br /> <br />
          Whenever you are ready, you may click next to proceed.
        </p>
        <NextButton nextState={nextState} />
      </div>
    </div>
  );
}

function NextButton({ nextState }: { nextState: () => void }) {
  return (
    <div className="mb-16 ">
      <div className="flex justify-around">
        <button
          onClick={nextState}
          className="w-full px-8 py-4 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CompFadeInstructions;
