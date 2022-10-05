import { Box, Button, Text } from 'grommet';
import styled from 'styled-components';

export const TriviaContainer = styled(Box)`
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 3%;
  padding-bottom: 5%;
`;

export const OuterContainer = styled(Box)`
  background: #f8f8f8;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const InnerContainer = styled(Box)`
  background: #ffffff;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 35px;
  padding-bottom: 25px;
`;

export const ScoreContainer = styled(Box)`
  background: #ffffff;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 7%;
  padding-bottom: 7%;
`;

export const AnswerBox = styled(Box)`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15%;
  padding-bottom: 0px;
`;

export const AnswerButton = styled(Button)`
  width: 100%;
  padding: 10px 0 10px 0px;
`;

export const LabelBox = styled(Box)`
  padding: 6px 25px 6px 25px;
`;

export const LabelText = styled(Text)`
  font-size: 20px;
  line-height: 25px;
  font-weight: 700;
`;
