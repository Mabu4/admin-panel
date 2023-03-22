import AddLinks from "./addLinks";

interface prop {
  setDialogSequence: Function;
  dialogSequence: any;
  setInput: Function;
  input: any;
  reset: any;
  setReset: Function;
  setCreateType: Function;
  goBack: Function;
}

const TextSequence = ({
  setDialogSequence,
  dialogSequence,
  setInput,
  input,
  reset,
  setReset,
  setCreateType,
  goBack,
}: prop) => {
  return (
    <div className="headline-dialog dialog">
      {dialogSequence === "text" ? (
        <>
          <h2>Gebe den Text ein</h2>
          <textarea
            value={input.content}
            onChange={(e) => {
              setInput((prev: any) => {
                return { ...prev, content: e.target.value };
              });
            }}
          />
          <AddLinks
            reset={reset}
            setReset={setReset}
            setInput={setInput}
            input={input}
            dialogSequence={dialogSequence}
          />
          <h2>KeyLearning ?</h2>
          <input
            className="checkbox"
            type="checkbox"
            onChange={(e) => (input.keyLearning = e.target.checked)}
          />
        </>
      ) : (
        <>
          <h2>Gebe die Headline ein</h2>
          <input
            onChange={(e) => {
              input.content = e.target.value;
            }}
          />
        </>
      )}
      {dialogSequence === "headline" && (
        <>
          <h2>Lesezeit</h2>
          <input
            type="text"
            onChange={(e) => {
              input.readingTime = e.target.value;
            }}
          />
          <h2>Autor</h2>
          <input
            type="text"
            onChange={(e) => {
              input.author = e.target.value;
            }}
          />
        </>
      )}
      {(dialogSequence === "subheadline" ||
        dialogSequence === "subheadlineAK") && (
        <>
          <h2>Parent, oder Child ?</h2>
          <select onChange={(e) => (input.family.type = e.target.value)}>
            <option value="none">Wähle den Typ</option>
            <option value="parent">Parent</option>
            <option value="child">Child</option>
          </select>
        </>
      )}
      <div className="button-box">
        <button onClick={() => goBack()} className="button-18">
          Zurück
        </button>
        <button
          onClick={() => {
            if (input.family.type === "child") {
              setDialogSequence("choose-parent");
            } else {
              input.id = new Date().getTime();
              setCreateType({ name: dialogSequence, parentID: "" });
            }
          }}
          className="button-18"
        >
          Weiter
        </button>
      </div>
    </div>
  );
};

export default TextSequence;
