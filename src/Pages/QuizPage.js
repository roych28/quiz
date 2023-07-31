import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { handleScoreChnage, handleGetQuestions } from "../Redux/quiz/action";


const QuizPage = () => {
  const { questions } = useSelector((state) =>  state.questionsData );
  const { score } = useSelector((state) => state.userInfo );

  const history = useHistory();
  const dispatch = useDispatch();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
      dispatch(handleGetQuestions());
  }, []);

  useEffect(() => {
    if(questions) {
      setQuestion(questions[questionIndex]);
    }
    
  }, [questions, questionIndex]);

  const handleClickAnswer = (event) => {    
    if (event.target.textContent === question.correctAnswer) {
      dispatch(handleScoreChnage(score + 1));
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push("/score");
    }
  };

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {question ? question.question : ""}
      </Typography>
      {question && question.options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button fullWidth onClick={handleClickAnswer} variant="contained">
            {data}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score}
      </Box>
    </Box>
  );
};

export default QuizPage;
