import {
  GET_QUESTIONS,
  CHANGE_SCORE,
} from "./actionTypes";

const initialState = {
  questionsData : { questions: null },
  userInfo: { score: 0 }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questionsData: action.payload,
      };    
    case CHANGE_SCORE:
      return {
        ...state,
        userInfo: {...state.userInfo, score: action.payload},
      };
    default:
      return state;
  }
};

export default reducer;
