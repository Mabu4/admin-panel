import { BsPlusCircle } from "react-icons/bs";

interface prop {
  setDialogSequence: Function;
}

const DefaultSequence = ({ setDialogSequence }: prop) => {
  return (
    <div className="default-box" onClick={() => setDialogSequence("overview")}>
      <BsPlusCircle />
    </div>
  );
};

export default DefaultSequence;
