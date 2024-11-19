import React, { useEffect, useRef, useState } from "react";
import { getRandomUser } from "../Utility/api";
import Instructor from "./Instructor";
import InstructorFunc from "./InstructorFunc";

const CyclopediaFuncPage = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  //const [totalRender, setTotalRender] = useState(() => 0);
  const totalRender = useRef(0);
  const prevStudentCount = useRef(0);
  const feedbackInputRef = useRef(null);

  const [inputName, setInputName] = useState(() => "");
  const [inputFeedback, setInputFeedback] = useState(() => "");

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  useEffect(() => {
    //setTotalRender((prevState) => prevState + 1);
    totalRender.current += 1; 
    console.log("render" + totalRender.current);
  })

  useEffect(() => {
    //setTotalRender((prevState) => prevState + 1);
    feedbackInputRef.current.focus();
  }, [])

  useEffect(() => {
    const getInstructor = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (!state.hideInstructor) {
      getInstructor();
    }
  }, [state.hideInstructor]);

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    };
    if (prevStudentCount.current<state.studentCount) {
      getUser();
    }
    else if (prevStudentCount.current>state.studentCount){
      setState((prevState) => {
        return {...prevState, studentList:[]}
      })
    }
  }, [state.studentCount]);

  useEffect(() => {
    //setTotalRender((prevState) => prevState + 1);
    prevStudentCount.current = state.studentCount; 
  }, [state.studentCount])

  const handleRemoveAllStudents = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };

  const handleToggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });

    console.log(state.hideInstructor);
  };
  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor </span>
        <i
          className={
            !state.hideInstructor
              ? "bi bi-toggle-on btn-success btn btn-sm"
              : "bi bi-toggle-off btn-danger btn btn-sm"
          }
          onClick={handleToggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <InstructorFunc instructor={state.instructor}></InstructorFunc>
        ) : null}
      </div>
      <div className="p-3">
        Total render: {totalRender.current}
      </div>
      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          placeholder="Name.."
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        ></input>{" "}
        Value: {inputName}
        <br />
        <textarea
          placeholder="Feedback..."
          ref={feedbackInputRef}
          value={inputFeedback}
          onChange={(e) => {
            setInputFeedback(e.target.value);
          }}
        ></textarea>{" "}
        Value: {inputFeedback}
      </div>
      <div>
        <span className="h4 text-success">Students</span>
        <br />
        <div>Student Count: {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudents}
        >
          Remove All Students
        </button>
        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              - {student.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CyclopediaFuncPage;
