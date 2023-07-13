import { CounterButton } from "component/Button";
import { useAppDispatch, useAppSelector } from "store/Hooks";
import { counterActions } from "store/ducks/counterSlice";
import { styled } from "styled-components";

type Props = {
  className?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  onClick?: () => void;
};

const Container = styled.div`
  width: 90vw;
  min-height: 450px;
  margin: auto;
  font-size: 32px;

  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const Counter: React.FC<Props> = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleClickIncrease = () => {
    dispatch(counterActions.increase(1));
  };

  const handleClickDecrease = () => {
    dispatch(counterActions.decrease(1));
  };

  return (
    <Container>
      <CounterButton onClick={handleClickDecrease}>-</CounterButton>
      {count}
      <CounterButton onClick={handleClickIncrease}>+</CounterButton>
    </Container>
  );
};
