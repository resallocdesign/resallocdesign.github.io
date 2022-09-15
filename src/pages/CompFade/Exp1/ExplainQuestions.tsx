import React, { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { ICompFadeStudyResults } from "./CompFadeStudy";

interface IExplainQuestionsProps {
  nextState: () => void;
  setResults: Dispatch<SetStateAction<ICompFadeStudyResults>>;
}

function ExplainQuestions({ nextState, setResults }: IExplainQuestionsProps) {
  const [explainText, setExplainText] = useState("");
  const [question2Choice, setQuestion2Choice] = useState("");

  const question2 = {
    question:
      "How confident are you that the amount you have allocated to the two programs is a suitable amount?",
    choices: [
      "Not at all Confident",
      "Slightly Confident",
      "Somewhat Confident",
      "Moderately Confident",
      "Very Confident",
    ],
  };

  const onExplainTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setExplainText(e.currentTarget.value);
  };

  const onQ2Change = (val: string) => setQuestion2Choice(val);

  const submitResult = () => {
    if (!question2Choice) {
      toast.error("Please respond to question 2.");
      return;
    } else if (explainText === "") {
      toast.error("Please respond to question 1.");
      return;
    } else {
      setResults((r) => ({ ...r, q1: explainText, q2: question2Choice }));
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
          <div className="mt-6">
            <label className="flex mb-6 text-lg ">
              1. Please briefly explain your choice.
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
        </div>
        <div>
          <div className="py-4 mt-4 text-gray-800 rounded-md text-md ">
            <p className="flex mb-6 text-lg ">
              {" "}
              2. {question2.question}{" "}
            </p>
            <div className="flex flex-col justify-around space-y-2 text-sm rounded-lg">
              {question2.choices.map((value, index: number) => {
                return (
                  <button
                    key={index}
                    onClick={() => onQ2Change(value)}
                    className={`bg-purple-100 hover:shadow-lg hover:bg-purple-200 rounded-lg  tracking-wider py-2 ${
                      question2Choice === value
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
      </div>
      <div onClick={submitResult} className="flex justify-around my-6">
        <button className="w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 ">
          Next
        </button>
      </div>
    </div>
  );
}

export default ExplainQuestions;
