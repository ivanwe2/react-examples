import React from "react";
import { getRandomUser } from "../Utility/api";
import Instructor from "./Instructor";

class CyclopediaClasspage extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cyclopediaState")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }

  componentDidMount = async () => {
    console.log("component did mount");

    if (JSON.parse(localStorage.getItem("cyclopediaState"))) {
      //this.setState(JSON.parse(localStorage.getItem("cyclopediaState")));
    } else {
      const response = await getRandomUser();
      console.log(response);

      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  }

  componentDidUpdate = async (prevProps, previousState) => {
    console.log("Component did update");
    localStorage.setItem("cyclopediaState", JSON.stringify(this.state));

    if (previousState.studentCount < this.state.studentCount) {
      const response = await getRandomUser();
      this.setState((prevState) => {
        return {
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    }
    else if(previousState.studentCount > this.state.studentCount) {
      this.setState(() => {
        return {
          studentList: [],
        };
      });
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1,
      };
    });
  }

  handleRemoveAllStudents = () => {
    this.setState(() => {
      return {
        studentCount: 0,
      };
    });
  }

  handleToggleInstructor = () => {
    this.setState((prevState) => {
      return {
        hideInstructor: !prevState.hideInstructor,
      };
    });

    console.log(this.state.hideInstructor);
  }

  render() {
    console.log("render index");
    return (
      <div>
        <div className="p-3">
          <span className="h4 text-success">Instructor </span>
          <i
            className={
              !this.state.hideInstructor
                ? "bi bi-toggle-on btn-success btn btn-sm"
                : "bi bi-toggle-off btn-danger btn btn-sm"
            }
            onClick={this.handleToggleInstructor}
          ></i>
          {!this.state.hideInstructor && this.state.instructor ? (
            <Instructor instructor={this.state.instructor}></Instructor>
          ) : null}
        </div>
        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            placeholder="Name.."
            value={this.state.inputName}
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
          ></input>{" "}
          Value: {this.state.inputName}
          <br />
          <textarea
            placeholder="Feedback..."
            value={this.state.inputFeedback}
            onChange={(e) => {
              this.setState({ inputFeedback: e.target.value });
            }}
          ></textarea>{" "}
          Value: {this.state.inputFeedback}
        </div>
        <div>
          <span className="h4 text-success">Students</span>
          <br />
          <div>Student Count: {this.state.studentCount}</div>
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudents}
          >
            Remove All Students
          </button>
          {this.state.studentList.map((student, index) => {
            return (
              <div className="text-white" key={index}>
                - {student.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CyclopediaClasspage;
