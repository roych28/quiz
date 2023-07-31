import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { handleScoreChnage } from "../Redux/quiz/action";

const ScorePage = () => {
  const disptach = useDispatch();
  const history = useHistory();
  const { score } = useSelector((state) => state.userInfo);

  const handleBackToSettings = () => {
    disptach(handleScoreChnage(0));
    history.push("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button fullWidth onClick={handleBackToSettings} variant="contained">
        Start Over
      </Button>
    </Box>
  );
};

export default ScorePage;
