import React, { useState } from "react";

import {
  Button,
  FormControlLabel,
  IconButton,
  MenuItem,
  Switch,
  Typography,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import {
  AddCircleOutline,
  FilterNone,
  MoreVert,
  OndemandVideo,
  TextFields,
} from "@material-ui/icons";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CloseIcon from "@material-ui/icons/Close";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import ShortlextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import { BsTrash } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc";
import "./Questionform.css";

function Questionform() {
  const [questions, setQuestions] = useState([
    {
      questionText: "Question",
      questionType: "radio",
      options: [
        { optionText: "Option 1" },
        { optionText: "Option 2" },
        { optionText: "Option 3" },
        { optionText: "Option 4" },
      ],
      open: true,
      required: false,
    },
  ]);

  const [temp, setTemp] = useState(questions);

  function changeQuestion(text, i) {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion);
  }

  function changeOptionValue(text, i, j) {
    var optionQuestion = [...questions];
    optionQuestion[i].options[j].optionText = text;
    setQuestions(optionQuestion);
    console.log(optionQuestion);
  }

  function addQuestionType(i, type) {
    let qs = [...questions];
    console.log(type);
    qs[i].questionType = type;
    setQuestions(qs);
  }

  function removeOpion(i, j) {
    var RemoveOptionQuestion = [...questions];
    if (RemoveOptionQuestion[i].options.length > 1) {
      RemoveOptionQuestion[i].options.splice(j, 1);
      setQuestions(RemoveOptionQuestion);
      console.log(i + "__" + j);
    }
  }

  function addOption(i) {
    var optionOfQuestion = [...questions];
    if (optionOfQuestion[i].options.length < 5) {
      optionOfQuestion[i].options.push({
        optionText: "Option" + (optionOfQuestion[i].options.length + 1),
      });
    } else {
      console.log("Max 5 options");
    }
    setQuestions(optionOfQuestion);
  }

  function copyQuestion(i) {
    // expandCloseAll();
    let qs = [...questions];
    var newQuestion = qs[i];
    setQuestions(...questions, newQuestion);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          expanded={questions[i].open}
          className={questions[i].open ? "add_border" : ""}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}
          >
            {questions[i].open ? (
              <div className="saved_questions">
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}
                >
                  {i + 1}. {questions[i].questionText}
                </Typography>
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto, Arial, sans-serif",
                              fontSize: "13px",
                              fontWeight: "400",
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "#202124",
                            }}
                          >
                            {ques.options[j].optionText}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </AccordionSummary>
          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="question"
                  placeholder="Question"
                  value={ques.questionText}
                  onChange={(e) => {
                    changeQuestion(e.target.value, i);
                  }}
                />
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{
                    color: "#5f6368",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MenuItem
                    className="menuitem"
                    id="text"
                    value="Text"
                    onClick={() => {
                      addQuestionType(i, "text");
                    }}
                  >
                    <SubjectIcon style={{ marginRight: "10px" }} />
                    <span>Paragraph</span>
                  </MenuItem>
                  <MenuItem
                    className="menuitem"
                    id="checkbox"
                    value="Checkbox"
                    onClick={() => {
                      addQuestionType(i, "checkbox");
                    }}
                  >
                    <CheckBoxIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />
                    Checked Boxes
                  </MenuItem>
                  <MenuItem
                    className="menuitem"
                    id="radio"
                    value="Radio"
                    onClick={() => {
                      addQuestionType(i, "radio");
                    }}
                  >
                    <Radio
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />
                    <span>Multiple Choice</span>
                  </MenuItem>
                </Select>
              </div>
              {ques.options.map((op, j) => (
                <div className="add_question_body" key="j">
                  {ques.questionType === "radio" ? (
                    <input
                      type={ques.questionType}
                      style={{ marginRight: "10px" }}
                    />
                  ) : (
                    <ShortlextIcon style={{ marginRight: "10px" }} />
                  )}
                  <div>
                    <input
                      type="text"
                      className="text_input"
                      placeholder="option"
                      value={ques.options[j].optionText}
                      onChange={(e) => {
                        changeOptionValue(e.target.value, i, j);
                      }}
                    />
                  </div>
                  <CropOriginalIcon style={{ color: "#5f6368" }} />
                  <IconButton aria-label="delete">
                    <CloseIcon
                      onClick={() => {
                        removeOpion(i, j);
                      }}
                    />
                  </IconButton>
                </div>
              ))}

              {ques.options.length < 5 ? (
                <div className="add_question_body">
                  <FormControlLabel
                    disabled
                    control={
                      ques.questionType !== "text" ? (
                        <input
                          type={ques.questionType}
                          color="primary"
                          inputProps={{ "aria-label": "secondary checkbox" }}
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          disabled
                        />
                      ) : (
                        <ShortlextIcon style={{ marginRight: "10px" }} />
                      )
                    }
                    label={
                      <div>
                        <input
                          type="text"
                          className="text_input"
                          style={{ fontSize: "13px", width: "60px" }}
                          placeholder="Add other"
                        />
                        <Button
                          size="smaill"
                          style={{
                            textTransform: "none",
                            color: "#4285f4",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                          onClick={() => {
                            addOption(i);
                          }}
                        >
                          Add Option
                        </Button>
                      </div>
                    }
                  />
                </div>
              ) : (
                ""
              )}

              <div className="add_footer">
                <div className="add_question_bottom_left">
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    <FcRightUp
                      style={{
                        border: "2px solid #4285f4",
                        padding: "2px",
                        marginRight: "8px",
                      }}
                    />
                    Answer key
                  </Button>
                </div>
                <div className="add_question_bottom">
                  <IconButton
                    aria-label="Copy"
                    onClick={() => {
                      copyQuestion(i);
                    }}
                  >
                    <FilterNone />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteQuestion(i);
                    }}
                  >
                    <BsTrash />
                  </IconButton>
                  {/* <IconButton> */}
                  <span style={{ color: "#5f6368", fontSize: "13px" }}>
                    Required
                  </span>
                  <Switch name="checkedA" color="primary" />
                  {/* </IconButton> */}
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </div>
              </div>
            </AccordionDetails>
            <div className="question_edit">
              <AddCircleOutline className="edit" />
              <OndemandVideo className="edit" />
              <CropOriginalIcon className="edit" />
              <TextFields className="edit" />
            </div>
          </div>
        </Accordion>
      </div>
    ));
  }

  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
              />
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Form description"
              />
            </div>
          </div>
          {questionsUI()}
        </div>
      </div>
    </div>
  );
}

export default Questionform;
