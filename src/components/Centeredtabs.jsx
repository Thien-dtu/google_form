import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useState } from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: "#5f6368",
    textTransform: "capitalize",
    height: 10,
    fontWeight: "600",
    fontFamily: "Google Sans, Roboto, Arial, sans-serif",
  },
});

function Centeredtabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        centered
        className={classes.tab}
      >
        <Tab label="Questions" className={classes.tab}></Tab>
        <Tab label="Responses" className={classes.tab}></Tab>
      </Tabs>
    </Paper>
  );
}

export default Centeredtabs;
