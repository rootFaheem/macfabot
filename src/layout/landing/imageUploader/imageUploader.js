import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {},
  input: {
    // display: "none"
  },
  err: {
    color: "red"
  }
});

class UploadButtons extends Component {
  state = {
    image: null,
    file: null,
    imgError: ""
  };

  imgChangedHandler = event => {
    if (event.target.files[0] === null) {
      return this.setState({
        imgError: "image is required!"
      });
    } else {
      this.setState({
        file: URL.createObjectURL(event.target.files[0]),
        image: event.target.files[0],
        imgError: ""
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { file, image, imgError } = this.state;

    if (imgError === "" && file !== null) {
      let formData = new FormData(); // Currently empty
      formData.append("image", image);
      formData.append("name", "abdul");

      console.log("api hit");

      axios
        .post("https://attention-ocr-api.herokuapp.com/api/", formData)
        .then(res => {
          console.log("res", res);
        });
    } else {
      return this.setState({
        imgError: "image is required!"
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { file } = this.state;

    console.log("this.state", this.state);

    return (
      <div className={classes.root}>
        <img
          src={file !== null ? file : "https://via.placeholder.com/250"}
          height="250px"
          width="250px"
          alt="selector"
        ></img>{" "}
        <br></br>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          type="file"
          onChange={this.imgChangedHandler}
        />
        <label htmlFor="contained-button-file">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            component="span"
            onClick={this.handleSubmit}
          >
            Upload
          </Button>{" "}
          <br />
        </label>
        {this.state.imgError ? (
          <Typography className={classes.err}>{this.state.imgError}</Typography>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(UploadButtons);
