import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

const WelcomePage = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/quiz");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default WelcomePage;
