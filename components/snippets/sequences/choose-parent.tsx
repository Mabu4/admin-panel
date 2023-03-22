interface prop {
  contentHTML: any;
  setCreateType: Function;
  goBack: Function;
}

const ChooseParentSequence = ({ contentHTML, setCreateType, goBack }: prop) => {
  return (
    <div className="dialog">
      <h2>Zugehörigkeit</h2>
      <div className="parent-list">
        {contentHTML.map((content: any) => {
          if (content.family.type === "parent") {
            return (
              <button
                onClick={() => {
                  setCreateType({
                    name: "headline-child",
                    parentID: content.id,
                  });
                }}
              >
                {content.title}
              </button>
            );
          }
        })}
      </div>
      <div className="button-box">
        <button onClick={() => goBack()} className="button-18">
          Zurück
        </button>
      </div>
    </div>
  );
};

export default ChooseParentSequence;
