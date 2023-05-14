import React, { useRef, useState } from "react";

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
  DragIndicator,
  FilterNone,
  MoreVert,
  OndemandVideo,
  ShortText,
  TextFields,
} from "@material-ui/icons";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CloseIcon from "@material-ui/icons/Close";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import ShortlextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import { BsFileText, BsTrash } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc";
import { v4 as uuidv4 } from "uuid";
import "./Questionform.css";

function Questionform() {
  const [questions, setQuestions] = useState([
    {
      idQues: uuidv4(),
      questionText: "Bạn có ổn không",
      questionType: "radio",
      options: [{ id: Date.now(), optionText: "!Có" }],
      answer: false,
      answerKey: "",
      points: 0,
      open: true,
      required: false,
    },
  ]);

  const [selectedQuestionType, setSelectedQuestionType] = useState("");

  function changeQuestion(text, i) {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
  }

  function changeOptionValue(text, i, j) {
    var optionQuestion = [...questions];
    optionQuestion[i].options[j].optionText = text;
    setQuestions(optionQuestion);
  }

  function addQuestionType(i, type) {
    let qs = [...questions];
    qs[i].questionType = type;
    setQuestions(qs);
  }

  function removeOption(idQues, idOption) {
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((question) => {
        if (question.idQues === idQues) {
          if (question.options.length > 1) {
            const updatedOptions = question.options.filter(
              (option) => option.id !== idOption
            );
            return { ...question, options: updatedOptions };
          }
        }
        return question;
      });
      return updatedQuestions;
    });
  }

  function addOption(i) {
    var optionOfQuestion = [...questions];
    if (optionOfQuestion[i].options.length < 5) {
      optionOfQuestion[i].options.push({
        id: Date.now(),
        optionText: "Option " + (optionOfQuestion[i].options.length + 1),
      });
    }
    setQuestions(optionOfQuestion);
  }

  function copyQuestion(i) {
    expandCloseAll();
    const newQuestions = [...questions];
    const newQuestion = { ...newQuestions[i], idQues: uuidv4() };
    newQuestions.splice(i + 1, 0, newQuestion);
    setQuestions(newQuestions);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;
    setQuestions(reqQuestion);
  }

  function addMoreQuestionField() {
    expandCloseAll();
    setQuestions([
      ...questions,
      {
        idQues: uuidv4(),
        questionText: "Bạn có khát không ?",
        questionType: "radio",
        options: [{ id: Date.now(), optionText: "Không" }],
        open: true,
        required: false,
      },
    ]);
  }

  {
    /** Các hàm dùng để kéo thả form */
  }
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    let allQuestion = [...questions];
    const draggedItemContent = allQuestion.splice(dragItem.current, 1)[0];
    allQuestion.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setQuestions(allQuestion);
  };
  {
    /** End các hàm dùng để kéo thả form */
  }

  function expandCloseAll() {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  }

  function handleExpand(i) {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;
      } else {
        qs[j].open = false;
      }
      setQuestions(qs);
    }
  }

  function setOptionAnswer(ans, qno) {
    var newQues = [...questions];
    newQues[qno].answerKey = ans;
    setQuestions(newQues);
  }

  function setOptionPoint(points, qno) {
    var newQues = [...questions];
    newQues[qno].points = parseInt(points);
    console.log(points + "__" + qno);
    setQuestions(newQues);
  }

  function doneAnswer(i) {
    var answerOfQuestion = [...questions];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setQuestions(answerOfQuestion);
  }

  function addAnswer(i) {
    var answerOfQuestion = [...questions];
    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;
    setQuestions(answerOfQuestion);
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <div
        key={uuidv4()}
        draggable
        onDragStart={(e) => (dragItem.current = i)}
        onDragEnter={(e) => (dragOverItem.current = i)}
        onDragEnd={handleSort}
        onDragOver={(e) => e.preventDefault}
        style={{ cursor: "move" }}
      >
        <div style={{ marginBottom: "0px" }}>
          <div style={{ width: "100%", marginBottom: "0px" }}>
            <DragIndicator
              style={{
                transform: "rotate(-90deg)",
                color: "#DAE0E2",
                position: "relative",
              }}
              fontSize="small"
            />
          </div>

          <div>
            <Accordion
              expanded={questions[i].open}
              onChange={() => {
                handleExpand(i);
              }}
              className={questions[i].open ? "add_border" : ""}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                elevation={1}
                style={{ width: "100%" }}
              >
                {!questions[i].open ? (
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
                            style={{
                              fontSize: "15px",
                              fontWeight: "400",
                              letterSpacing: ".1px",
                              lineHeight: "24px",
                              paddingBottom: "8px",
                              marginLeft: "5px",
                              marginBottom: "5px",
                            }}
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
                  <div></div>
                )}
              </AccordionSummary>
              <div className="question_boxes">
                {!questions[i].answer ? (
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

                      {/*icon*/}
                      <CropOriginalIcon style={{ color: "#5f6368" }} />

                      {/*chỉnh sửa loại câu hỏi*/}
                      <Select
                        className="select"
                        style={{
                          color: "#5f6368",
                          fontSize: "13px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        value={selectedQuestionType}
                        onChange={(event) =>
                          setSelectedQuestionType(event.target.value)
                        }
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
                            style={{
                              marginRight: "10px",
                              color: "#70757a",
                            }}
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
                            style={{
                              marginRight: "10px",
                              color: "#70757a",
                            }}
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

                        {/** Ô chỉnh sửa nội dung câu trả lời */}
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

                        {/** Icon ảnh nè */}
                        <CropOriginalIcon style={{ color: "#5f6368" }} />

                        {/** Icon Xoá câu trả lời nè */}
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            removeOption(ques.idQues, ques.options[j].id);
                          }}
                        >
                          <CloseIcon
                          // onClick={() => {
                          //   removeOption(ques.idQues, ques.options[j].id);
                          // }}
                          />
                        </IconButton>
                      </div>
                    ))}

                    {ques.options.length < 5 ? (
                      <div
                        className="add_question_body"
                        style={{ marginLeft: "7px" }}
                      >
                        <FormControlLabel
                          disabled
                          control={
                            ques.questionType !== "text" ? (
                              <input
                                type={ques.questionType}
                                color="primary"
                                // inputProps={{
                                //   "aria-label": "secondary checkbox",
                                // }}
                                style={{
                                  marginLeft: "10px",
                                  marginRight: "10px",
                                }}
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
                                size="small"
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
                          onClick={() => {
                            addAnswer(i);
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
                        <Switch
                          name="checkedA"
                          color="primary"
                          onClick={() => {
                            requiredQuestion(i);
                          }}
                          checked={ques.required}
                        />
                        {/* </IconButton> */}
                        <IconButton>
                          <MoreVert />
                        </IconButton>
                      </div>
                    </div>
                  </AccordionDetails>
                ) : (
                  <AccordionDetails className="add_question">
                    <div className="top_header">Choose Correct Answer</div>
                    <div className="add_question_top">
                      <input
                        type="text"
                        className="question"
                        placeholder="Questions"
                        value={ques.questionText}
                        disabled
                      />
                      <input
                        type="number"
                        className="point"
                        min="0"
                        max="10"
                        step="1"
                        placeholder="0"
                        value={ques.points}
                        onChange={(e) => {
                          setOptionPoint(e.target.value, i);
                        }}
                      />
                    </div>
                    {ques.options.map((op, j) => (
                      <div
                        className="add_question_body"
                        key={j}
                        style={{
                          marginLeft: "8px",
                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                      >
                        <div key={j}>
                          <div style={{ display: "flex" }}>
                            <div className="form-check">
                              <label
                                style={{ fontSize: "13px" }}
                                onClick={() => {
                                  setOptionAnswer(
                                    ques.options[j].optionText,
                                    i
                                  );
                                }}
                              >
                                {ques.questionType != "text" ? (
                                  <input
                                    type={ques.questionType}
                                    name={ques.questionText}
                                    value="option3"
                                    className="form-check-input"
                                    required={ques.required}
                                    style={{
                                      marginRight: "10px",
                                      marginBottom: "10px",
                                      marginTop: "5px",
                                    }}
                                    placeholder="thien day"
                                  />
                                ) : (
                                  <ShortText style={{ marginRight: "10px" }} />
                                )}
                                {ques.options[j].optionText}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="add_question_body">
                      <Button
                        size="small"
                        style={{
                          textTransform: "none",
                          color: "#4285f4",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        <BsFileText
                          style={{ fontSize: "20px", marginRight: "8px" }}
                        />{" "}
                        Add Answer Feedback{" "}
                      </Button>
                    </div>
                    <div
                      className="add_question_bottom"
                      style={{ marginTop: "10px" }}
                    >
                      <Button
                        variant="outlined"
                        color="danger"
                        style={{
                          textTransform: "none",
                          color: "#4285f4",
                          fontSize: "12px",
                          fontWeight: "600",
                          marginRight: "20px",
                        }}
                        onClick={() => {
                          doneAnswer(i);
                        }}
                      >
                        Back
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        style={{
                          textTransform: "none",
                          color: "#4285f4",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                        onClick={() => {
                          doneAnswer(i);
                        }}
                      >
                        Done
                      </Button>
                    </div>
                  </AccordionDetails>
                )}
                {!ques.answer ? (
                  <div className="question_edit">
                    <AddCircleOutline
                      onClick={addMoreQuestionField}
                      className="edit"
                    />
                    <OndemandVideo className="edit" />
                    <CropOriginalIcon className="edit" />
                    <TextFields className="edit" />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    ));
  }

  console.log(questions);

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
