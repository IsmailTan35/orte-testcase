import "@/assets/css/button.css";
interface IButton {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Button = (props: IButton) => {
  const { text, onClick, isActive } = props;
  return (
    <>
      <button
        onClick={() => onClick()}
        className={`button-wrapper${isActive ? " active" : ""}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
