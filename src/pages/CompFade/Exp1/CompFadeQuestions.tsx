import React, { useState } from "react";
import * as questionAndChocicesDefault from "./questions.json";
import MultiChoice from "../../../components/Questions/MultiChoice";
import toast from "react-hot-toast";

// type ConditionType =
//   | "visPerson"
//   | "visCause"
//   | "numPerson"
//   | "numCause"
//   | "all";

function CompFadeQuestions({ nextState }: { nextState: () => void }) {
  const [response, setResponse] = useState<{
    [key: number]: {
      question: string;
      response: any;
    };
  }>({ 4: { question: "", response: "" } });
  // const [condition, setCondition] = useState<ConditionType>("all");
  const [explainText, setExplainText] = useState("");

  const questionAndChocices = questionAndChocicesDefault.main;

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setExplainText(e.currentTarget.value);
  };

  const submitResult = () => {
    console.log(response);
    if (!response[0]) {
      toast.error("Please respond to question 1.");
      return;
    } else if (!response[1]) {
      toast.error("Please respond to question 3.");
      return;
    } else if (explainText === "") {
      toast.error("Please respond to question 4.");
      return;
    } else {
      nextState();
    }
  };

  return (
    <div>
      <h2 className="mt-6 text-4xl font-bold text-center text-gray-800">
        Post-Study Questions
      </h2>
      <div className="w-3/4 mx-auto md:w-1/2 ">
        {questionAndChocices.map((qa, idx) => {
          const qNum = idx + 1;
          const isMultiChoice = qa.question.includes("select more than one");
          return (
            <div key={idx + 200}>
              <MultiChoice
                selectMultiple={isMultiChoice}
                choices={qa.choices}
                question={qNum + ". " + qa.question}
                responseSetter={(res: any) =>
                  setResponse((r) => {
                    let obj = { ...r };
                    r[idx] = { question: qa.question, response: res };
                    return obj;
                  })
                }
              />
              <div className="w-full h-1 bg-blue-200 rounded-lg"> </div>
            </div>
          );
        })}
        <div className="mt-6">
          <label className="flex mb-2 text-lg font-bold">
            4. Explain your decision for the slider value you have selected.
          </label>
          <textarea
            placeholder="Write your answer here..."
            className="w-full px-4 py-2 bg-gray-100 rounded-lg hover:shadow-lg hover:bg-gray-200 "
            rows={6}
            onChange={onTextChange}
            value={explainText}
          ></textarea>
        </div>
      </div>
      <div onClick={submitResult} className="flex justify-around my-6">
        <button className="w-3/4 px-8 py-4 my-6 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 ">
          Finish Study
        </button>
      </div>
    </div>
  );
}

export default CompFadeQuestions;
