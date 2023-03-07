import { useEffect } from "react";

const AddLinks = ({
  resetLink,
  setLink,
  setInput,
  link,
  input,
  saveLink,
  setSaveLink,
  setShowLinkDialog,
  showLinkDialog,
  dialogSequence,
  position,
}: any) => {
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

  useEffect(() => {
    if (!!link.value && link.value !== "") {
      console.log("rein da");
      setInput((prev: any) => {
        const links = input.links;
        const newLink = `Link-${input.links.length + 1}`;
        if (
          dialogSequence === "list-ul-second" ||
          dialogSequence === "list-ol-second"
        ) {
          const newListElement = `${prev.list.listelemente[position]}${newLink}}`;
          prev.list.listelemente[position] = newListElement;
          return {
            ...prev,
            list: {
              type: prev.list.type,
              keyLearning: prev.list.keyLearning,
              listelemente: prev.list.listelemente,
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
          <button
            onClick={() => {
              setSaveLink(true), console.log("klick", saveLink);
            }}
            className="button-18"
          >
            Speichern
          </button>
        </>
      )}
      <h2>Gespeicherte Links</h2>
      <ol className="links-container">
        {input.links.map((link: any) => (
          <li className="simple-link" key={link.id}>
            {link.id}: {link.value} ({link.link})
          </li>
        ))}
      </ol>
    </>
  );
};

export default AddLinks;
