import StudyEntryBlock from "../../../components/StudyEntryBlock";

function CompFadeStart({ nextState }: { nextState: Function }) {
  return (
    <div className="px-6">
      <StudyEntryBlock
        studyTitle="Effect of Information Presentation Methods on Judgment"
        ageRange="18 and over"
        studyDesc="We’re interested in investigating the effect of data presentation methods on data interpretation and decision making."
        studyWorkDesc="You will not need anything besides your current device. You will read the text presented to you and answer the questions to the best of your ability. 
        Please make sure to not resize your screen during the study.
        "
        studyImgURI="/comp_stim/start.svg"
        studyImgAlt="Understanding Compassion Study"
        nextState={nextState}
      />
    </div>
  );
}

export default CompFadeStart;
