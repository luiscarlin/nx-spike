import styled from 'styled-components';

export interface ButtonProps {
  text: string;
}

const StyledButton = styled.button`
  background: red;
`;

export const Button = ({ text }: ButtonProps) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
