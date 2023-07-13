import { ReactNode } from "react";
import { styled } from "styled-components";

interface IButton {
  backgroundColor: string | undefined;
  color: string | undefined;
  children: ReactNode;
}

type Props = {
  className?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  children?: ReactNode;
  onClick?: () => void;
};

export const StyledRoundedButton = styled.button<IButton>`
  border-radius: 3px;
  border: none;

  ${({ backgroundColor, color }) =>
    `
    background: ${backgroundColor || "none"};
    color: ${color || "black"};
    `}
`;

export const CounterButton: React.FC<Props> = (props) => {
  return (
    <StyledRoundedButton
      as={props.as}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </StyledRoundedButton>
  );
};
