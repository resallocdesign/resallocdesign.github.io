import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { ICompFadeStudyResults } from "./CompFadeStudy";

interface IExplainQuestionsProps {
  nextState: () => void;
  setResults: Dispatch<SetStateAction<ICompFadeStudyResults>>;
}

function CompFadeAttentionQ({ nextState, setResults }: IExplainQuestionsProps) {
  const [question3Choice, setQuestion3Choice] = useState("");
  const question3 = {
    question: "What was the purpose of the charity you read about?",
    choices: [
      "Funding cancer research, advocacy and patient and family services",
      "Helping address environmental damage",
      "Helping children get access to shelter, food and education",
      "Reducing the spread of malaria in Sub-Saharan Africa",
      "Addressing modern day civil rights violations",
      "Helping address potential risks from advanced artificial intelligence",
    ],
  };

  const [explainText, setExplainText] = useState("");
  const onQ2Change = (val: string) => setQuestion3Choice(val);
  const onExplainTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setExplainText(e.currentTarget.value);
  };

  const submitResult = () => {
    if (!question3Choice) {
      toast.error("Please respond to question 3.");
      return;
    } else {
      setResults((r) => ({ ...r, q3: question3Choice, q4: explainText }));
      nextState();
    }
  };

  return (
    <div>
      <h2 className="mt-6 text-2xl font-bold text-center text-gray-800">
        Post-Study Questions
      </h2>
      <div className="w-3/4 mx-auto md:w-1/2 ">
        <div>
          <div className="py-4 mt-4 text-gray-800 rounded-md text-md ">
            <p className="flex mb-6 text-lg"> 3. {question3.question} </p>
            <div className="flex flex-col justify-around space-y-2 text-sm rounded-lg">
              {question3.choices.map((value, index: number) => {
                return (
                  <button
                    key={index}
                    onClick={() => onQ2Change(value)}
                    className={`bg-purple-100 hover:shadow-lg hover:bg-purple-200 rounded-lg  tracking-wider py-2 ${
                      question3Choice === value
                        ? "bg-purple-300 hover:bg-purple-300"
                        : ""
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div>
          <div className="mt-6">
            <label className="flex mb-6 text-lg ">
              4. Please provide any feedback that may improve the study.
            </label>
            <textarea
              placeholder="Write your answer here..."
              className="w-full px-4 py-2 text-sm bg-gray-100 rounded-lg hover:shadow-lg hover:bg-gray-200"
              rows={6}
              onChange={onExplainTextChange}
              value={explainText}
            />
          </div>
          <div className="w-full h-1 mt-4 bg-blue-200 rounded-lg"> </div>
        </div> */}
      </div>
      <div onClick={submitResult} className="flex justify-around my-6">
        <button className="w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 ">
          Finish Study
        </button>
      </div>
    </div>
  );
}

export default CompFadeAttentionQ;
