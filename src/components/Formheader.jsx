import { Avatar, Button, IconButton } from "@material-ui/core";
import { ColorLens, MoreVert } from "@material-ui/icons";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiSettings, FiStar } from "react-icons/fi";
import { IoMdFolderOpen } from "react-icons/io";
import avatarimage from "../images/avatar.png";
import formimage from "../images/form.png";
import "./Formheader.css";

function Formheader() {
  return (
    <div className="form_header">
      <div className="form_header_left">
        <img src={formimage} style={{ height: "45px", width: "40px" }} />
        <input type="text" placeholder="Untiled form" className="form_name" />
        <IoMdFolderOpen
          className="form_header_icon"
          style={{ marginRight: "10px" }}
        ></IoMdFolderOpen>
        <FiStar className="form_header_icon" style={{ marginRight: "10px" }} />
        <span style={{ fontSize: "12px", fontWeight: "600" }}>
          All change saved in drive
        </span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <ColorLens size="small" className="form_header_icon" />
        </IconButton>
        <IconButton>
          <AiOutlineEye className="form_header_icon" />
        </IconButton>
        <IconButton>
          <FiSettings className="form_header_icon" />
        </IconButton>

        <Button variant="contained" color="primary" href="#contained-buttons">
          Sends
        </Button>
        <IconButton>
          <MoreVert className="form_header_icon" />
        </IconButton>
        <IconButton>
          <Avatar style={{ height: "30px", width: "30px" }} src={avatarimage} />
        </IconButton>
      </div>
    </div>
  );
}

export default Formheader;
