import { IconButton, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemtext from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Fragment, useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import docimage from "../images/doc.png";
import formimage from "../images/form.png";
import sheetsimage from "../images/sheet.png";
import slidesimage from "../images/slides.png";
import driveimage from "../images/drive.png";
import "./Drawer.css";

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginLeft: "20px",
    fontSize: "14px",
    fontWeight: "500",
    color: "grey",
  },
  slideImages: {
    height: "20px",
    width: "20px",
  },
}));

function TemporaryDrawer() {
  const classes = useStyles();

  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider />
      <List>
        <ListItem>
          <ListItemtext style={{ fontSize: "48px", marginLeft: "5px" }}>
            <span
              style={{
                color: "blue",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "'Product Sans', Arial, sans-serif",
              }}
            >
              G
            </span>
            <span
              style={{
                color: "red",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans', Arial, sans-serif",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "yellow",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans', Arial, sans-serif",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "blue",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans', Arial, sans-serif",
              }}
            >
              g
            </span>
            <span
              style={{
                color: "green",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans', Arial, sans-serif",
              }}
            >
              l
            </span>
            <span
              style={{
                color: "red",
                fontWeight: "500",
                fontSize: "22px",
                marginRight: "10px",
                fontFamily: "'Product Sans', Arial, sans-serif",
              }}
            >
              e
            </span>
            <span
              style={{
                color: "#5f6368",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans', Arial, sans-serif",
              }}
            >
              Docs
            </span>
          </ListItemtext>
        </ListItem>
      </List>
      <Divider />

      <List
        style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <img src={docimage} className={classes.slideImages} />
          <div className={classes.listItem}>Docs</div>
        </ListItem>
        <ListItem className="list_item">
          <img src={sheetsimage} className={classes.slideImages} />
          <div className={classes.listItem}>Sheets</div>
        </ListItem>
        <ListItem className="list_item">
          <img src={slidesimage} className={classes.slideImages} />
          <div className={classes.listItem}>Slides</div>
        </ListItem>
        <ListItem className="list_item">
          <img src={formimage} className={classes.slideImages} />
          <div className={classes.listItem}>Form</div>
        </ListItem>
        <ListItem className="list_item">
          <img src={docimage} className={classes.slideImages} />
          <div className={classes.listItem}>Docs</div>
        </ListItem>
      </List>
      <Divider />
      <List style={{marginLeft:"8px", marginRight:"8px", marginTop:"15px"}}>
        <ListItem className="list_item">
          <FiSettings />
          <div style={{marginLeft:"20px", fontSize:"14px"}}> Settings</div>
        </ListItem>
        <ListItem className="list_item">
          <BsQuestionCircle />
          <div style={{marginLeft:"20px", fontSize:"14px", fontWeight:"500", color:"grey"}}> Helps & Feedback</div>
        </ListItem>
      </List>
      <Divider />
      <List style={{marginLeft:"8px", marginRight:"8px", marginTop:"15px"}}>
      <ListItem className="list_item">
          <img src={driveimage} className={classes.slideImages} />
          <div style={{marginLeft: "20px", fontSize: "14px",}}>Drive</div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </Fragment>
    </div>
  );
}

export default TemporaryDrawer;
