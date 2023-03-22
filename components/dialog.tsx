import { useState, useEffect } from "react";
import DefaultSequence from "./snippets/sequences/default";
import OverviewSequence from "./snippets/sequences/overview";
import TextSequence from "./snippets/sequences/text";
import ImageSequence from "./snippets/sequences/image";
import ListSequence from "./snippets/sequences/list";
import SecondListSequence from "./snippets/sequences/list-second";
import ChooseParentSequence from "./snippets/sequences/choose-parent";

interface props {
  dialogSequence: string;
  input: any;
  setInput: Function;
  setDialogSequence: Function;
  setCreateType: Function;
  setNumberOfListelements: Function;
  basicInput: any;
  numberOfListelements: any;
  contentHTML: any;
}

const Dialog = ({
  dialogSequence,
  input,
  setInput,
  setDialogSequence,
  setCreateType,
  setNumberOfListelements,
  basicInput,
  numberOfListelements,
  contentHTML,
}: props) => {
  const [reset, setReset] = useState<boolean>(false);

  const goBack = () => {
    setDialogSequence("overview");
    setInput(basicInput);
    setNumberOfListelements([]);
    setReset(true);
  };

  useEffect(() => {
    if (dialogSequence === "default") {
      setReset(true);
    }
  }, [dialogSequence]);

  return (
    <div>
      {dialogSequence === "default" && (
        <DefaultSequence setDialogSequence={setDialogSequence} />
      )}
      {dialogSequence === "overview" && (
        <OverviewSequence setDialogSequence={setDialogSequence} input={input} />
      )}
      {(dialogSequence === "headline" ||
        dialogSequence === "subheadline" ||
        dialogSequence === "subheadlineAK" ||
        dialogSequence === "text") && (
        <TextSequence
          setDialogSequence={setDialogSequence}
          dialogSequence={dialogSequence}
          setInput={setInput}
          input={input}
          reset={reset}
          setReset={setReset}
          setCreateType={setCreateType}
          goBack={goBack}
        />
      )}
      {dialogSequence === "startImage" ||
        (dialogSequence === "image" && (
          <ImageSequence
            dialogSequence={dialogSequence}
            input={input}
            setCreateType={setCreateType}
            goBack={goBack}
          />
        ))}
      {(dialogSequence === "list-ul" || dialogSequence === "list-ol") && (
        <ListSequence
          dialogSequence={dialogSequence}
          input={input}
          setNumberOfListelements={setNumberOfListelements}
          goBack={goBack}
          setDialogSequence={setDialogSequence}
        />
      )}
      {(dialogSequence === "list-ul-second" ||
        dialogSequence === "list-ol-second") && (
        <SecondListSequence
          dialogSequence={dialogSequence}
          input={input}
          setNumberOfListelements={setNumberOfListelements}
          goBack={goBack}
          numberOfListelements={numberOfListelements}
          setInput={setInput}
          reset={reset}
          setReset={setReset}
          setCreateType={setCreateType}
        />
      )}
      {dialogSequence === "choose-parent" && (
        <ChooseParentSequence
          contentHTML={contentHTML}
          setCreateType={setCreateType}
          goBack={goBack}
        />
      )}
    </div>
  );
};

export default Dialog;
