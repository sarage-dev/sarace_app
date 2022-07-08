import { CssBaseline, Grid } from "@mui/material";
import Content from "./Content";
import Shop from "./Shop";
import Contact from "./Contact";
import Footer from "./Footer";
import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import slipper_1 from "../files/images/sarace_001.jpeg";

const Homepage: React.FC = () => {
  return (
    <div className="App">
      <Grid container xs={12} justifyContent="center" paddingBottom={10}>
        <Grid
          item
          xs={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            className="slide-text"
          >
            {"Yere şık ve sağlam basanların tercihi"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src={slipper_1}
            className="slipper-animate"
            width={"100% !important"}
            alt={"slipper"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
