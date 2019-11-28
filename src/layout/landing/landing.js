import React, { Fragment } from "react";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import ImageUploader from "./imageUploader/imageUploader";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
    margin: "4% 25%",
    background: "#008272",
    color: "#fff"
  },
  root0: {
    padding: theme.spacing(2, 3),
    margin: "4% 0",
    background: "#008272",
    color: "#fff",
    textAlign: "center"
  },
  selector: {
    height: "300px"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Fragment>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              I can understand the content of any photograph and I’ll try to
              describe it as well as any human. I'll analyze your photo, but I
              won't store or share it.
            </Typography>
          </Paper>
        </Fragment>
        <Fragment>
          <Paper className={classes.root0}>
            <div className={classes.selector}>
              <ImageUploader></ImageUploader>
            </div>
          </Paper>
        </Fragment>
      </Container>
    </div>
  );
}
