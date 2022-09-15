function CompFadeTask({ nextState }: { nextState: () => void }) {
  return (
    <div>
      <div className="container px-8 pt-4 mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Instructions 
        </h2>
        <div className="flex flex-col mt-16 mb-12 space-y-2 text-gray-800 text-md">
          <p>
            Mercy Corps is an organization which runs multiple aid programs to
            benefit the impoverished population of different areas in the world.
            Your task is to help the organization decide how to distribute money
            between two of their programs.
          </p>

          <h3 className="pt-4 text-lg font-bold">About Mercy Corps</h3>

          <p>
            For three decades, the Mercy Corps charitable organization has
            helped support children in need around the globe. The organization
            runs programs in dozens of countries to help children get access to
            food, shelter, and educational materials. In all of the work they do, cost
            effectiveness is highly important to the organization, as they want
            donors’ money to go to the ones who need it the most--the children.
          </p>

          <h3 className="pt-4 text-lg font-bold">About the Programs</h3>

          <p>
            Today you will help Mercy Corps’ distribute donators’ money between
            the two following programs.
          </p>

          <p className="p-2 mx-6 bg-gray-100 rounded-lg">
            <i>Program Alpha</i> is a new program to help prevent the death of
            children who are unable to live out their lives due to unstable
            conditions. A report says that donating to this program will mean
            that the money will go toward food, clothes, and education to help 3
            children who would greatly benefit from the aid.
          </p>

          <p className="p-2 mx-6 bg-gray-100 rounded-lg">
            <i>Program Zefa</i> is another newly lauched program to help prevent the
            death of children who are unable to live out their lives due to
            unstable conditions in a different community from Program Alpha.
            Another report projects that donating to this program will mean that
            the money will go toward food, clothes, and education to help 12
            children, who will greatly benefit from the aid.
          </p>

          <h3 className="pt-4 text-lg font-bold">Your Task</h3>

          <p>
            You have a total of $3000 (US Dollars) to allocate between the two
            programs, please use the scale on the next page to select how you
            would allocate these resources.
          </p>
          <p className="">
            Whenever you are ready, you may click next to proceed.
          </p>
        </div>

        <NextButton nextState={nextState} />
      </div>
    </div>
  );
}

function NextButton({ nextState }: { nextState: () => void }) {
  return (
    <div className="mb-16">
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

export default CompFadeTask;
