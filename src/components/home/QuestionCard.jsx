import styled from "styled-components";

export const QuestionCard = () => {
  return (
    <QuestionContainer>
      <QuestionText>h1</QuestionText>
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const QuestionText = styled.p`
  color: white;
  font-size: 2em;
`;
