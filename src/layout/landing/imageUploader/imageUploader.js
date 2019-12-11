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
  },
  predict: {
    // width: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "40px"
  }
});

class UploadButtons extends Component {
  state = {
    image: null,
    file: null,
    imgError: "",

    predictions: []
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

      console.log("api hit");

      axios
        .post("https://attention-ocr.herokuapp.com/upload", formData)
        .then(res => {
          console.log("res from API::", res.data);
          this.setState({
            predictions: res.data.text.predictions
          });
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
    const { predictions } = this.state;

    console.log("this.state", this.state);

    return (
      <div className={classes.root}>
        <div className={classes.predict}>
          <img
            src={file !== null ? file : "https://via.placeholder.com/250"}
            height="250px"
            width="250px"
            alt="selector"
          ></img>
          {predictions && predictions[0] ? (
            <div>
              <Typography variant="h6">
                Prediction: {predictions[0].confidence}{" "}
              </Typography>
              <Typography variant="h6"> OCR: {predictions[0].ocr} </Typography>
            </div>
          ) : null}
        </div>
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
