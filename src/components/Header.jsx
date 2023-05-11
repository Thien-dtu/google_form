import { IconButton } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import avatarimage from "../images/avatar.png";
import formimage from "../images/form.png";
import "./Header.css";
import TemporaryDrawer from "./TemporaryDrawer";

function Header(props) {
  return (
    <div className="header">
      <div className="header_info">
        <TemporaryDrawer />
        <img
          src={formimage}
          style={{ height: "40px", width: "40px" }}
          className="form image"
          alt="no image"
        />
        <div className="info">Forms</div>
      </div>
      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" name="search" placeholder="search" />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar src={avatarimage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
