import { IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  FolderOpen,
  MoreVert,
  Storage,
} from "@material-ui/icons";
import React from "react";
import formrecent from "../images/formrecent.png";
import "./Mainbody.css";

function Mainbody(props) {
  return (
    <div className="main_body">
      <div className="mainbody_top">
        <div
          className="mainbody_top_left"
          style={{ fontSize: "14px", fontWeight: "500" }}
        >
          Recent Forms
        </div>
        <div className="mainbody_top_right">
          <div
            className="main_top_center"
            style={{ fontSize: "14", marginRight: "125px" }}
          >
            Owned by Anyone
            <ArrowDropDown />
          </div>
          <IconButton>
            <Storage style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpen style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
        </div>
      </div>
      <div className="mainbody_docs">
        <div className="doc_card">
          <img src={formrecent} className="doc_image" />
          <div className="doc_card_content">
            <h5 className="content_title">Confession của bạn Shin </h5>
            <div
              className="doc_content"
              style={{ fontSize: "12px", color: "grey" }}
            >
              <div className="content_left">
                <Storage
                  style={{
                    color: "white",
                    fontSize: "12px",
                    backgroundColor: "6E5294",
                    padding: "3px",
                    marginRight: "11px",
                    borderRadius: "2px",
                  }}
                />
                Opend 10/05/2023
                <IconButton style={{ marginLeft: "10px" }}>
                  <MoreVert
                    style={{
                      fontSize: "16px",
                      color: "grey",
                    }}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
