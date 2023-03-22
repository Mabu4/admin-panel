interface props {
  setDialogSequence: Function;
  input: any;
}

const OverviewSequence = ({ setDialogSequence, input }: props) => {
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

  return (
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
  );
};

export default OverviewSequence;
