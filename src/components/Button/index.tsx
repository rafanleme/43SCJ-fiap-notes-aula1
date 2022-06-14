import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  type?: string;
}

// !!! implementar props styled-components

function Button({ children, handleClick, type = "normal" }: ButtonProps) {
  return <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>;
}

export default Button;
