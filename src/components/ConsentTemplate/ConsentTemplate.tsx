import React, { useState, useEffect } from "react";

interface IConsentTemplateProps {
  studyName: string;
  pi: string;
  address: string;
  telephone: string;
  email: string;
  bodyComponent: React.ReactElement;
  consentFunc: Function;
  noConsentFunc: Function;
  isKidMode?: boolean;
  coInvestigators: string[];
}

export enum ConsentChoices {
  Default = 0,
  Agree = 1,
  Disagree = 2,
}

function ConsentTemplate(props: IConsentTemplateProps) {
  const [consent, setConsent] = useState(ConsentChoices.Default);
  const [scrollBot, setScrollBot] = useState(false);
  useEffect(() => {
    // scroll to bottom of the page when you accept or decline consent
    if (consent && !scrollBot) {
      setScrollBot(true);
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [consent, scrollBot]);

  return (
    <div className="container px-8 pt-4 mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Study: {props.studyName}
      </h2>
      <h3 className="mt-2 mb-8 text-lg font-bold text-center text-gray-800">
        Research Consent Form
      </h3>
      <div className="mt-16 text-gray-800 text-md">
        <b>Principal Investigator:</b> {props.pi} <br />
        <b>Co-Investigators:</b>{" "}
        {props.coInvestigators.map((inst) => (
          <>
            {" "}
            <br /> <span className="pl-4">{inst}</span>{" "}
          </>
        ))}{" "}
        <br />
        <b>Address:</b> {props.address} <br />
        <b>Telephone:</b> {props.telephone} <br />
        <b>Email:</b> {props.email} <br />
        <b>Project:</b> Effect of Information Presentation Methods on Cognitive
        Biases
        <br /> <br />
        {props.bodyComponent}
      </div>

      <ChooseConsentButtons consent={consent} setConsent={setConsent} />
      {consent ? (
        <SubmitConsentButton
          consent={consent}
          noConsentFunc={props.noConsentFunc}
          consentFunc={props.consentFunc}
        />
      ) : null}
    </div>
  );
}

interface IChooseConsentButtonsProps {
  consent: ConsentChoices;
  setConsent: Function;
}

function ChooseConsentButtons(props: IChooseConsentButtonsProps) {
  const { consent, setConsent } = props;
  return (
    <div className="flex w-full my-10 md:px-12">
      <div className="flex flex-col justify-around w-full text-sm md:space-x-12 md:flex-row">
        <button
          onClick={() => {
            setConsent(ConsentChoices.Disagree);
          }}
          className={`bg-indigo-100 hover:bg-indigo-200 mb-4 md:mb-0 md:w-1/2 font-bold rounded-lg py-4 px-8 shadow-lg uppercase tracking-wider 
              ${
                consent === ConsentChoices.Disagree
                  ? " bg-indigo-300 hover:bg-indigo-300"
                  : ""
              }`}
        >
          I Do Not Consent
        </button>
        <button
          onClick={() => {
            setConsent(ConsentChoices.Agree);
          }}
          className={`bg-indigo-100 hover:bg-indigo-200 md:w-1/2 font-bold rounded-lg py-4 px-8 shadow-lg uppercase tracking-wider
              ${
                consent === ConsentChoices.Agree
                  ? "bg-indigo-300 hover:bg-indigo-300"
                  : ""
              }`}
        >
          I Consent
        </button>
      </div>
    </div>
  );
}

interface ISubmitConsentButtonProps {
  consent: ConsentChoices;
  consentFunc: Function;
  noConsentFunc: Function;
}

function SubmitConsentButton(props: ISubmitConsentButtonProps) {
  return (
    <div className="mb-16">
      <div className="flex justify-around">
        <button
          onClick={() => {
            switch (props.consent) {
              case ConsentChoices.Disagree:
                window.scrollTo(0, 0);
                props.noConsentFunc();
                break;
              case ConsentChoices.Agree:
                props.consentFunc();
                break;
              default:
                alert("Submit Error, please refesh the page.");
                break;
            }
          }}
          className="w-full px-8 py-4 font-bold tracking-wider uppercase bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ConsentTemplate;
