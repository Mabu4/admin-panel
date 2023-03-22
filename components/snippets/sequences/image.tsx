interface prop {
  dialogSequence: any;
  input: any;
  setCreateType: Function;
  goBack: Function;
}

const ImageSequence = ({
  input,
  goBack,
  setCreateType,
  dialogSequence,
}: prop) => {
  return (
    <div className="dialog image-dialog">
      <h2>Link</h2>
      <input
        type="text"
        onChange={(e) => {
          input.image.src = e.target.value;
        }}
      />
      <h2>Alt</h2>
      <input
        type="text"
        onChange={(e) => {
          input.image.alt = e.target.value;
        }}
      />
      <div className="button-box">
        <button onClick={() => goBack()} className="button-18">
          Zurück
        </button>
        <button
          onClick={() => {
            input.id = new Date().getTime();
            setCreateType({ name: dialogSequence, parentID: "" });
          }}
          className="button-18"
        >
          Weiter
        </button>
      </div>
    </div>
  );
};

export default ImageSequence;
