import { Link } from "react-router-dom";

export interface ButtonProps {
  onClick?: () => void;
  label?: string | React.ReactNode;
  className?: string;
  to?: string;
  changeColor?: boolean
}

const Button = ({ label, className = "", to, onClick, changeColor }: ButtonProps) => {
  const baseStyle = changeColor
    ? `bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition`
    : `text-indigo-600 bg-indigo-100 px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition`;


  const buttonElement = (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyle} ${className}`}
    >
      {label}
    </button>
  );

  if (to) {
    return <Link to={to}>{buttonElement}</Link>;
  }

  return buttonElement;
};

export default Button;