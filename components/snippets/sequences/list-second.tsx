import AddLinks from "./addLinks";

interface prop {
  dialogSequence: any;
  input: any;
  setNumberOfListelements: Function;
  goBack: Function;
  numberOfListelements: any;
  setInput: Function;
  reset: boolean;
  setReset: Function;
  setCreateType: Function;
}

const SecondListSequence = ({
  input,
  goBack,
  dialogSequence,
  setNumberOfListelements,
  numberOfListelements,
  setInput,
  reset,
  setReset,
  setCreateType,
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
      <h2>Mache deine Eingaben</h2>
      {numberOfListelements.map((element: any) => {
        return (
          <div id="element">
            <h3>{element + 1}. Punkt</h3>
            <textarea
              value={input.list.listelemente[element]}
              onChange={(e) => {
                setInput((prev: any) => {
                  let newList = prev.list.listelemente;
                  const newListElement = e.target.value;
                  newList[element] = newListElement;
                  return {
                    ...prev,
                    list: {
                      type: prev.list.type,
                      keyLearning: prev.list.keyLearning,
                      listelemente: newList,
                      sublists: prev.list.keyLearning,
                    },
                  };
                });
              }}
              key={element}
            />
            <AddLinks
              reset={reset}
              setReset={setReset}
              setInput={setInput}
              input={input}
              dialogSequence={dialogSequence}
              position={element}
              numberOfListelements={numberOfListelements}
            />
          </div>
        );
      })}
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

export default SecondListSequence;
