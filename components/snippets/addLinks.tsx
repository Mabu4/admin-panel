import { useEffect, useState } from "react";

const AddLinks = ({
  setInput,
  input,
  dialogSequence,
  position,
  reset,
  setReset,
  numberOfListelements,
}: any) => {
  const [saveLink, setSaveLink] = useState<boolean>(false);
  const [link, setLink] = useState<any>({ value: "", link: "" });
  const [showLinkDialog, setShowLinkDialog] = useState<boolean>(false);

  const handleLinkChange = (e: any, type: string) => {
    if (type === "value") {
      setLink((prev: any) => {
        return { ...prev, value: e.target.value };
      });
    }
    if (type === "link") {
      setLink((prev: any) => {
        return { ...prev, link: e.target.value };
      });
    }
  };

  const resetLink = () => {
    setLink({ value: "", link: "" });
    setShowLinkDialog(false);
    setSaveLink(false);
    setReset(false);
  };

  useEffect(() => {
    if (reset === true) {
      resetLink();
    }
  }, [reset]);

  useEffect(() => {
    if (!!link.value && link.value !== "") {
      setInput((prev: any) => {
        const links = input.links;
        const newLink = `Link-${input.links.length + 1}`;
        if (
          dialogSequence === "list-ul-second" ||
          dialogSequence === "list-ol-second"
        ) {
          let newList = prev.list.listelemente;
          const newListElement = `${prev.list.listelemente[position]}${newLink}`;
          newList[position] = newListElement;
          return {
            ...prev,
            list: {
              type: prev.list.type,
              keyLearning: prev.list.keyLearning,
              listelemente: newList,
              sublists: prev.list.keyLearning,
            },
            links: [
              ...links,
              { id: newLink, link: link.link, value: link.value },
            ],
          };
        } else {
          return {
            ...prev,
            content: `${prev.content}${newLink}`,
            links: [
              ...links,
              { id: newLink, link: link.link, value: link.value },
            ],
          };
        }
      }, resetLink());
    }
  }, [saveLink]);

  return (
    <>
      <button
        className="add-link button-18"
        onClick={() => {
          setShowLinkDialog((prev: any) => {
            return !prev;
          });
        }}
      >
        <span>+</span>Link
      </button>
      {!!showLinkDialog && (
        <>
          <h2>Text</h2>
          <input
            value={link.value}
            onChange={(e) => handleLinkChange(e, "value")}
          />
          <h2>Link</h2>
          <input
            value={link.link}
            onChange={(e) => handleLinkChange(e, "link")}
          />
          <button onClick={() => setSaveLink(true)} className="button-18">
            Speichern
          </button>
        </>
      )}
      {(dialogSequence === "list-ul-second" ||
        dialogSequence === "list-ol-second") &&
        numberOfListelements.length - 1 === position &&
        input.links.length > 0 && (
          <>
            <h2>Gespeicherte Links</h2>
            <ol className="links-container">
              {input.links.map((link: any) => (
                <li className="simple-link" key={link.id}>
                  {link.id}: {link.value} ({link.link})
                </li>
              ))}
            </ol>
          </>
        )}
      {dialogSequence === "text" && (
        <>
          <h2>Gespeicherte Links</h2>
          <ol className="links-container">
            {input.links.map((link: any) => (
              <li className="simple-link" key={link.id}>
                {link.id}: {link.value} ({link.link})
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  );
};

export default AddLinks;
