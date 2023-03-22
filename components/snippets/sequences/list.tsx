interface prop {
  dialogSequence: any;
  input: any;
  setNumberOfListelements: Function;
  goBack: Function;
  setDialogSequence: Function;
}

const ListSequence = ({
  input,
  goBack,
  dialogSequence,
  setDialogSequence,
  setNumberOfListelements
}: prop) => {
  const handleCounter = (num: number) => {
    setNumberOfListelements([]);
    let arr: any = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    setNumberOfListelements(arr);
  };

  return (
    <div className="dialog">
      <h2>Anzahl Listenelemente</h2>
      <input
        type="number"
        onChange={(e) => handleCounter(Number(e.target.value))}
      />
      <h2>KeyLearning ?</h2>
      <input
        className="checkbox"
        type="checkbox"
        onChange={(e) => (input.list.keyLearning = e.target.checked)}
      />
      <div className="button-box">
        <button onClick={() => goBack()} className="button-18">
          Zurück
        </button>
        <button
          onClick={() => {
            setDialogSequence(`${dialogSequence}-second`);
          }}
          className="button-18"
        >
          Weiter
        </button>
      </div>
    </div>
  );
};

export default ListSequence;
