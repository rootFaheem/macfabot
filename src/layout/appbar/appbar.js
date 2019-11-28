import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "#008272"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#fff"
  },
  appbar: {
    background: "#008272"
  },
  toolbar: {
    padding: "10px 10px"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              MacfaBot
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
