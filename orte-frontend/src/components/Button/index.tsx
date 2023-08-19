import "../../assets/css/button.css";
interface IButton {
  text: string;
  onClick: () => void;
}

const Button = (props: IButton) => {
  const { text, onClick } = props;
  return (
    <>
      <button onClick={() => onClick()} className="button-wrapper">
        {" "}
        {text}
      </button>
    </>
  );
};

export default Button;
