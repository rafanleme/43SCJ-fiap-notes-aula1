import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  typeStyle?: string;
}

function Button({ children, handleClick, typeStyle = "normal" }: ButtonProps) {
  return <ButtonStyled typeStyle={typeStyle} onClick={handleClick}>{children}</ButtonStyled>;
}

export default Button;
