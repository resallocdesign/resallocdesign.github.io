import { useState } from "react";
import { useHistory } from "react-router-dom";

const exp1_2_cond = [
  { name: "(text+vis, individual)", uri: "vp" },
  { name: "(text+vis, group)", "uri": "vc" },
  { name: "(text, individual)", "uri": "np" },
  { name: "(text, group)", "uri": "nc" }]
const exp3_cond = [
  { name: "(textNone, visGroup)", uri: "nc" },
  { name: "(textIndividual, visGroup)", uri: "pc" },
  { name: "(textGroup, visNone)", uri: "cn" },
  { name: "(textGroup, visGroup)", uri: "cc" },
  { name: "(textGroup, visIndividual)", uri: "cp" },
  { name: "(textIndividual, visNone)", uri: "pn" },
  { name: "(textIndividual, visGroup)", uri: "pc" },
  { name: "(textIndividual, visIndividual)", uri: "pp" }]

function CompFadeStart({ nextState }: { nextState: Function }) {

  const [expr, setExpr] = useState(1)

  const experiments: IExp[] = [
    {
      "title": "Experiment 1", "desc": "Initial Investigation of Resource Allocation",
      "pic": "/exp1-display.png",
      "measure": "Large Progam Allocation",
      url: "/exp1"
    },
    {
      "title": "Experiment 2", "desc": "A Closer Look at Fair vs. Unfair Allocations",
      "pic": "/exp2-display.png",
      "measure": "Proportion of Fair Allocations",
      url: "/exp2"
    },
    {
      "title": "Experiment 3", "desc": "A Rigorous Look at presentation format and framing",
      "pic": "/exp3-display.png",
      "measure": "Unfairness",
      url: "/exp3"
    }
  ]

  return (
    <div className="">
      <div className="px-2 pt-4 mx-auto">
        <h2 className="mt-4 mb-2 text-2xl font-bold text-center text-gray-800">
          Designing Resource Allocation Tools to Promote Fair Allocation
        </h2>
        <h3 className="mb-2 text-xl text-center text-gray-800">
          Does Visualization and Information Framing Matter?
        </h3>
        <h4 className="text-center">
          <a className="text-blue-600 underline hover:text-blue-400" target="_blank" rel="noreferrer" href="https://www.arnavverma.com/">Arnav Verma</a>,{" "}
          <a className="text-blue-600 underline hover:text-blue-400" target="_blank" rel="noreferrer" href="https://luizaugustomm.github.io/">Luiz Morais</a>, {" "}
          <a className="text-blue-600 underline hover:text-blue-400" target="_blank" rel="noreferrer" href="http://dragice.fr/">Pierre Dragicevic</a>, {" "}
          <a className="text-blue-600 underline hover:text-blue-400" target="_blank" rel="noreferrer" href="http://fannychevalier.net/">Fanny Chevalier</a>
        </h4>
        
        <h4 className="ml-4">Paper Link:  <a target="_blank" rel="noreferrer" href="https://doi.org/10.1145/3544548.3580739" className="text-blue-600 underline hover:text-blue-400">https://doi.org/10.1145/3544548.3580739</a></h4>
        <div className="mb-2 ml-4 ">
          Click on one of the conditions below to start an experiment!
        </div>
        <div className="flex flex-col w-full lg:flex-row ">
          {experiments.map((exp, idx) => {
            return <ExpBlock onClick={() => { setExpr(idx + 1); }} isSelected={expr === idx + 1} exp={exp} />
          })}

        </div>
      </div>
    </div>
  );
}

interface IExp {
  title: string
  desc: string
  pic: string
  measure: string
  url: string
}

const ExpBlock: React.FC<{ exp: IExp; onClick: () => void; isSelected: boolean }> = ({ exp, onClick, isSelected }) => {
  const history = useHistory();
  const [cond, setCond] = useState("")

  return <div onClick={onClick} // onClick={() => {history.push(exp.url);}} 
    className="flex w-full py-1 mx-2 bg-gray-100 rounded-lg md:flex-col hover:bg-gray-200">
    <h2 className="w-full py-1 ml-4 text-xl font-bold tracking-wider uppercase"> {exp.title}</h2>
    <h3 className="w-full pb-4 ml-4 text-md" > {exp.desc} </h3>
    <div className="w-full text-gray-800 bg-white rounded-lg hover:bg-gray-100 hover:text-orange-500">
      <div className={"flex justify-center w-full h-64 " + (exp.title === "Experiment 3" ? "bg-gray-800" : "bg-gray-300")} onClick={() => { }}>
        <img
          className="absolute h-64 py-2"
          src={process.env.PUBLIC_URL + exp.pic}
          alt={"props.studyImgAlt"}
        />

      </div>

    </div>
    <h4 className="w-full px-8 py-4 font-semibold rounded-lg ">
      Measure: <span>{exp.measure}</span>
    </h4>
    <div className="mx-4 my-2">
      <h3 className="text-lg font-bold"> Conditions:</h3>
      <div className="flex flex-wrap ml-6 space-x-4">
        {exp.title === "Experiment 3" && exp3_cond.map((c) => {
          return <button className="px-2 py-1 mt-2 bg-gray-300 rounded-lg cursor-pointer hover:bg-yellow-400"
            onClick={() => { history.push("/exp3?cond=" + c.uri); }}> {c.name} </button>
        })}
        {exp.title !== "Experiment 3" && exp1_2_cond.map((c) => {
          return <button className="px-2 py-1 mt-2 bg-gray-300 rounded-lg cursor-pointer hover:bg-yellow-400"
            onClick={() => {
              if (exp.title === "Experiment 1") history.push("/exp1?cond=" + c.uri);
              if (exp.title === "Experiment 2") history.push("/exp2?cond=" + c.uri);
            }}>
            {c.name}

          </button>
        })}
      </div>

    </div>
  </div>
}

export default CompFadeStart;
