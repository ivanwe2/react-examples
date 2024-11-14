import React from "react";
import { getRandomUser } from "../Utility/api";

class CyclopediaClasspage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideIntstructor: false,
    };
  }

  componentDidMount = async () => {
    console.log("component did mount");
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
  };

  componentDidUpdate() {
    console.log("Component did update");
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
  };

  handleRemoveAllStudents = () => {
    this.setState(() => {
      return {
        studentCount: 0,
      };
    });
  };

  render() {
    console.log("render component");
    return (
      <div>
        {this.state.instructor && (
          <div className="p-3">
            <span className="h4 text-success">Instructor </span>
            <i className="bi bi-toggle-off btn btn-success btn-sm"></i>
            <br />
            Name: {this.state.instructor.name}
            <br />
            Email: {this.state.instructor.email}
            <br />
            Phone: {this.state.instructor.phone}
            <br />
          </div>
        )}
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
        </div>
      </div>
    );
  }
}

export default CyclopediaClasspage;
