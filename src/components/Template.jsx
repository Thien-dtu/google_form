import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import blankimage from "../images/blankimage.png";
import contactimage from "../images/contactimage.png";
import eventimage from "../images/eventimage.png";
import partyimage from "../images/partyimage.png";
import registertshirt from "../images/registertshirt.png";
import "./Template.css";

function Template() {
  const navigate = useNavigate();
  const createForm = () => {
    const id = uuidv4();
    navigate(`/form/${id}`);
  };

  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "15px", color: "#202124" }}>
            Start a New Form
          </span>
        </div>
        <div className="template_right">
          <div className="gallery_button">
            Template gallery
            <UnfoldMoreIcon fontSize="small" />
          </div>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
          <img src={blankimage} alt="no image" className="card_image" />
          <p className="card_title">Blank</p>
        </div>
        <div className="card">
          <img src={contactimage} alt="no image" className="card_image" />
          <p className="card_title">Contact Information</p>
        </div>
        <div className="card">
          <img src={eventimage} alt="no image" className="card_image" />
          <p className="card_title">Event</p>
        </div>
        <div className="card">
          <img src={partyimage} alt="no image" className="card_image" />
          <p className="card_title">Party invite</p>
        </div>
        <div className="card">
          <img src={registertshirt} alt="no image" className="card_image" />
          <p className="card_title">Register T-shirt</p>
        </div>
      </div>
    </div>
  );
}

export default Template;
