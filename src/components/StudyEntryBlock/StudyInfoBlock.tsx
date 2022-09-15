interface IStudyInfoBlockProps {
  /* Title of the study */
  studyTitle: string;

  /* Age range of the study */
  ageRange: string;

  /* Long  desription of the study */
  studyDesc: string;

  /* A description of how the study works */
  studyWorkDesc: string;

  /* A URI of the actual study */
  studyImgURI: string;

  /* A URI of the study image preview */
  nextState: Function;

  /* Alternitive text for the image */
  studyImgAlt: string;
}

function StudyEntryBlock(props: IStudyInfoBlockProps) {
  return (
    <div className="container px-2 pt-4 mx-auto">
      <h2 className="mb-2 text-2xl font-bold text-center text-gray-800">
        Study: {props.studyTitle}
      </h2>
      <h3 className="mb-8 text-xl text-center text-gray-800">
        Information Section
      </h3>
      <div className="flex flex-wrap mb-16 text-gray-800 fair-study">
        <div className="w-full px-2 md:w-1/2">
          <p className="mb-8 text-gray-600 text-md">
            <b>Participant Ages: {props.ageRange} </b> <br />
            {props.studyDesc}
          </p>
          <h4 className="mb-3 text-lg font-bold"> How does it work? </h4>
          <p className="mb-8 text-gray-600 text-md">{props.studyWorkDesc}</p>
        </div>
        <div className="w-full text-gray-800 bg-white rounded-lg md:w-1/2 hover:bg-gray-100 hover:text-orange-500">
          <div className="cursor-pointer" onClick={() => props.nextState()}>
            <img
              className="px-6 pt-2 mx-auto h-72"
              src={process.env.PUBLIC_URL + props.studyImgURI}
              alt={props.studyImgAlt}
            />
            <button className="w-full px-8 py-4 font-bold tracking-wider uppercase rounded-lg shadow-lg ">
              Start!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyEntryBlock;
