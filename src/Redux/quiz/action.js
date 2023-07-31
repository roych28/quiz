import {
  GET_QUESTIONS,
  CHANGE_SCORE,
} from "./actionTypes";

import { questionsData } from "../../data/questions"; //dummy questions

// actions should be called after server calls

export const handleGetQuestions = (payload) => ({
  type: GET_QUESTIONS,
  payload : questionsData,
});

export const handleScoreChnage = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
