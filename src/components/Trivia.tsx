import { Box, Button, Heading, Text } from 'grommet';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import {
  AnswerBox,
  AnswerButton,
  InnerContainer,
  LabelBox,
  LabelText,
  OuterContainer,
  ScoreContainer,
  TriviaContainer
} from './Trivia.styles';

export const Trivia = () => {
  const { questionsList, setReset, user } = useContext(AppContext);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  let navigate = useNavigate();

  const handleAnswer = (answer: any) => {
    if (questionsList[currentQuestion].answer === answer) {
      setScore(score + 1);
      if (currentQuestion !== questionsList.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsComplete(true);
      }
    } else {
      if (currentQuestion !== questionsList.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsComplete(true);
      }
    }
  };

  const handleReset = () => {
    setReset(true);
    setIsComplete(false);
    setCurrentQuestion(0);
    navigate('/');
  };

  return (
    <TriviaContainer fill gap="large">
      <Box alignSelf="center">
        <Heading size="small">Trivia MCU</Heading>
      </Box>
      <OuterContainer elevation="medium" fill>
        {isComplete ? (
          <Text>Trivia Completed</Text>
        ) : (
          <Text>
            {currentQuestion + 1} / {questionsList.length}
          </Text>
        )}

        {isComplete ? (
          <ScoreContainer
            fill
            alignContent="center"
            elevation="small"
            gap="small"
          >
            <Heading size="small" alignSelf="center">
              {user}
            </Heading>
            <Heading size="small" alignSelf="center">
              Congratulations!!!
            </Heading>

            <Text size="large" alignSelf="center">
              <strong>Your Score is:</strong>
            </Text>
            <Heading size="small" alignSelf="center">
              {score} of {questionsList.length}
            </Heading>

            <AnswerButton
              hoverIndicator={{
                color: 'success'
                // opacity: 'weak'
              }}
              primary
              onClick={() => handleReset()}
            >
              <LabelBox alignSelf="center">
                <LabelText alignSelf="center">Reset</LabelText>
              </LabelBox>
            </AnswerButton>
          </ScoreContainer>
        ) : (
          <InnerContainer fill alignSelf="center" elevation="small" gap="small">
            <Text size="large">
              <strong>
                {currentQuestion + 1}.-{' '}
                {questionsList[currentQuestion].question}
              </strong>
            </Text>
            <AnswerBox gap="small">
              {questionsList[currentQuestion].options.map(
                (item: any, idx: any) => (
                  <AnswerButton
                    key={idx}
                    hoverIndicator={{
                      color: 'success'
                      // opacity: 'weak'
                    }}
                    primary
                    onClick={() => handleAnswer(item)}
                  >
                    <LabelBox alignSelf="center">
                      <LabelText alignSelf="center">{item}</LabelText>
                    </LabelBox>
                  </AnswerButton>
                )
              )}
            </AnswerBox>
          </InnerContainer>
        )}
      </OuterContainer>
    </TriviaContainer>
  );
};
