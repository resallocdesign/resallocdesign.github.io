import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export function DivPerson() {
  const style = { transform: "rotate(180deg)" };
  const [stimuli, setStimuli] = useState("person.png");
  const hist = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(hist.location.search);
    const personType = params.get("person_type");
    if (personType === "person1") {
      setStimuli("person.png");
    } else if (personType === "people") {
      setStimuli("people.png");
    } else if (personType === "abstract") {
      setStimuli("abstract");
    }
  }, [hist.location]);

  if (stimuli === "abstract") {
    return <DivPersonNoBack />;
  }

  return (
    <div style={style} className="inline-block ">
      <img
        className="h-7 "
        alt="stimuli"
        src={process.env.PUBLIC_URL + "/comp_stim/" + stimuli}
      />
    </div>
  );
}

export function DivPersonNoBack() {
  return (
    <div className="inline-block w-3 h-8 mx-4 my-auto ml-5 bg-blue-500 rounded-lg" />
  );
}

export function DivPeople() {
  return (
    <div className="flex w-8 h-8 m-1 space-x-1 bg-gray-300 rounded-sm">
      {[1, 2, 3].map((num, idx) => {
        return (
          <div
            key={num}
            className="w-2 h-6 mx-auto my-auto bg-blue-500 rounded-lg"
          />
        );
      })}
    </div>
  );
}

export function DivCoin({ height }: { height: number }) {
  const style = { height, transform: "rotate(180deg)" };
  const [stimuli, setStimuli] = useState("coin1.svg");
  const hist = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(hist.location.search);
    const moneyType = params.get("money_type");
    if (moneyType === "coin1") {
      setStimuli("coin1.svg");
    } else if (moneyType === "coin2") {
      setStimuli("coin2.svg");
    } else if (moneyType === "wallet") {
      setStimuli("money.png");
    } else if (moneyType === "piggy") {
      setStimuli("piggy.png");
    } else if (moneyType === "abstract") {
      setStimuli("abstract");
    }
  }, [hist.location]);

  if (stimuli === "abstract") {
    return <DivDollar height={height} />;
  }

  return (
    <div
      className={`inline-block cursor-pointer text-middle text-center rounded-lg ${
        height === 0 && "hidden"
      }`}
      style={style}
    >
      <img
        className={`inline-block mr-1 w-6 cursor-pointer text-middle text-center -mb-6 ${
          height === 0 && "hidden"
        }`}
       //style={{objectPosition: `0px ${height}px`}} 
        src={process.env.PUBLIC_URL + "/comp_stim/" + stimuli}
        alt="coins"
      />
    </div>
  );
}

export function DivDollar({ height }: { height: number }) {
  const styles = {
    height,
    transform: "rotate(180deg)",
  };

  return (
    <div
      className={`inline-block w-3 mx-4 ml-5 h-8 m-1 overflow-hidden bg-green-600 rounded-lg cursor-pointer text-middle text-center ${
        height === 0 && "hidden"
      }`}
    >
      <div
        style={styles}
        className="inline-block w-3 mx-1 overflow-hidden text-xs text-center text-green-800 bg-blue-200 rounded-lg cursor-pointer text-middle"
      >
        $
      </div>
    </div>
  );
}

export function DivWallet({ height }: { height: number }) {
  const styles = {
    height,
  };

  return (
    <img
      style={styles}
      alt="stimuli"
      src={process.env.PUBLIC_URL + "/comp_stim/money.png"}
      className="inline-block w-6 mx-1 overflow-hidden text-center text-white bg-green-600 rounded-lg cursor-pointer text-middle"
    ></img>
  );
}

export function DivDollarBar({ height }: { height: number }) {
  return (
    <div
      style={{ height }}
      className={`inline-block w-10 h-8 m-1 bg-green-600 cursor-pointer text-middle text-center ${
        height === 0 && "hidden"
      }`}
    ></div>
  );
}

export function PigRow() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(<DivDollar height={30} />);
    arr.push(
      <img
        className="w-10 h-8"
        alt="stimuli"
        src={process.env.PUBLIC_URL + "/comp_stim/money.png"}
      />
    );
  }
  return <div className="flex">{arr}</div>;
}
