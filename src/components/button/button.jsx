import "./button.css";

const Button = ({ label, onClick }) => {
  return (
    <button className="brown-button" onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {}, 
};

export default Button;