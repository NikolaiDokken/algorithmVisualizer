import AppBar from "@material-ui/core/AppBar";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Hidden,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import DropDownButton from "./DropDownButton";
const bodyScrollLock = require("body-scroll-lock");
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
const disableBodyScroll = bodyScrollLock.disableBodyScroll;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function Navbar(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClose() {
    setOpen(false);
    const targetElement = document.querySelector("#root");
    disableBodyScroll(targetElement);
  }
  function handleClickOpen() {
    const targetElement = document.querySelector("#root");
    enableBodyScroll(targetElement);
    setOpen(true);
  }

  const handleRun = () => {
    if (currentIndex === 0) {
      return null;
    } else if (currentIndex === 1) {
      props.visualizeFunction(true);
    } else if (currentIndex === 2) {
      props.visualizeFunction(false);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#313131" }} elevation={0}>
        <Toolbar>
          <Grid container direction="row">
            <Grid item xs>
              <Hidden smDown>
                <Typography color="inherit">
                  Shortest path Algorithm Visualizer
                </Typography>
              </Hidden>
            </Grid>
            <Grid item xs style={{ zIndex: "5000" }}>
              <DropDownButton
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </Grid>
            <Grid item xs>
              {window.innerWidth >= 680 ? (
                <Button
                  variant="contained"
                  endIcon={<PlayArrowIcon />}
                  style={{ background: "limegreen" }}
                  onClick={handleRun}
                  elevation={0}
                  disableElevation
                >
                  Run
                </Button>
              ) : (
                <IconButton
                  onClick={handleRun}
                  style={{
                    color: "limegreen",
                    borderRadius: "100%",
                    padding: "4px",
                    margin: "0 10px 0 10px"
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              )}
            </Grid>
            <Grid item xs>
              {window.innerWidth >= 680 ? (
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<DeleteIcon />}
                  onClick={() => props.clearGrid(false)}
                  disableElevation
                  elevation={0}
                  style={{ paddingLeft: "2px", paddingRight: "2px" }}
                >
                  Clear Board
                </Button>
              ) : (
                <IconButton
                  onClick={() => props.clearGrid(false)}
                  color="secondary"
                  style={{
                    borderRadius: "100%",
                    padding: "4px",
                    margin: "0 10px 0 10px"
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Grid>
            <Grid item xs>
              <div id="dialogwindow">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClickOpen}
                >
                  Help
                </Button>
                <Dialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                  >
                    Instructions
                  </DialogTitle>
                  <DialogContent dividers>
                    <Typography gutterBottom>
                      1. Pick an algorithm{" "}
                      <font color="#fff" style={{ background: "black" }}>
                        (White button)
                      </font>
                      <br /> 2. (Optional) Draw walls by dragging/clicking
                      squares.
                      <br /> 3. (Optional) Move start/end node by dragging them
                      to another square.
                      <br /> 4. Run the algorithm{" "}
                      <font color="limegreen">(Green button)</font>
                      <br /> 5. Clear the board to go again.
                      <font color="red">(Red button).</font> Start/end node will
                      remain at same place.
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
