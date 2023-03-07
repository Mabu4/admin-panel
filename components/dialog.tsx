import { useState, useEffect } from "react";
import { BsPlusCircle } from "react-icons/bs";
import AddLinks from "./addLinks";

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
  const [showLinkDialog, setShowLinkDialog] = useState<boolean>(false);
  const [link, setLink] = useState<any>({ value: "", link: "" });
  const [saveLink, setSaveLink] = useState<boolean>(false);
  const dialogThemes = [
    { name: "Überschrift (top)", key: "headline" },
    { name: "Überschrift", key: "subheadline" },
    { name: "Überschrift (AK)", key: "subheadlineAK" },
    { name: "Textfeld", key: "text" },
    { name: "Bild", key: "image" },
    { name: "Startbild", key: "startImage" },
    { name: "Liste (Punkte)", key: "list-ul" },
    { name: "Liste (Aufzählung)", key: "list-ol" },
  ];

  const handleCounter = (num: number) => {
    setNumberOfListelements([]);
    let arr: any = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    setNumberOfListelements(arr);
  };

  const goBack = () => {
    setDialogSequence("overview");
    setInput(basicInput);
    setNumberOfListelements([]);
    resetLink();
  };

  const resetLink = () => {
    setLink({ value: "", link: "" });
    setSaveLink(false);
    setShowLinkDialog(false);
  };

  useEffect(() => {
    if (dialogSequence === "default") {
      resetLink();
    }
  }, [dialogSequence]);

  return (
    <div>
      {dialogSequence === "default" && (
        <div
          className="default-box"
          onClick={() => setDialogSequence("overview")}
        >
          <BsPlusCircle />
        </div>
      )}
      {dialogSequence === "overview" && (
        <div className="first-dialog">
          {dialogThemes.map((theme) => {
            return (
              <button
                key={theme.key}
                onClick={() => {
                  input.list.type =
                    theme.key === "list-ul"
                      ? "ul"
                      : theme.key === "list-ol"
                      ? "ol"
                      : "";
                  setDialogSequence(theme.key);
                }}
                className="button-18"
              >
                {theme.name}
              </button>
            );
          })}
        </div>
      )}
      {(dialogSequence === "headline" ||
        dialogSequence === "subheadline" ||
        dialogSequence === "subheadlineAK" ||
        dialogSequence === "text") && (
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
                resetLink={resetLink}
                setLink={setLink}
                setInput={setInput}
                link={link}
                input={input}
                saveLink={saveLink}
                setSaveLink={setSaveLink}
                setShowLinkDialog={setShowLinkDialog}
                showLinkDialog={showLinkDialog}
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
      )}
      {dialogSequence === "startImage" && (
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
      )}
      {(dialogSequence === "list-ul" || dialogSequence === "list-ol") && (
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
      )}
      {(dialogSequence === "list-ul-second" ||
        dialogSequence === "list-ol-second") && (
        <div className="dialog">
          <h2>Mache deine Eingaben</h2>
          {numberOfListelements.map((element: any) => {
            return (
              <>
                <h3>{element + 1}. Punkt</h3>
                <textarea
                  onChange={(e) =>
                    (input.list.listelemente[element] = e.target.value)
                  }
                  key={element}
                />
                <AddLinks
                resetLink={resetLink}
                setLink={setLink}
                setInput={setInput}
                link={link}
                input={input}
                saveLink={saveLink}
                setSaveLink={setSaveLink}
                setShowLinkDialog={setShowLinkDialog}
                showLinkDialog={showLinkDialog}
                dialogSequence={dialogSequence}
                position={element}
              />
              </>
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
      )}
      {dialogSequence === "choose-parent" && (
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
      )}
    </div>
  );
};

export default Dialog;
