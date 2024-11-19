import React from "react";

class Instructor extends React.Component {
  // constructor(props) {
  //     super(props);

  // }

  componentDidMount() {
    console.log("Mounted-instructor");
  }
  componentDidUpdate() {
    console.log("Updated-instructor");
  }
  componentWillUnmount() {
    console.log("Unmount-instructor");
  }
  render() {
    return (
      <div>
        <br />
        Name: {this.props.instructor.name}
        <br />
        Email: {this.props.instructor.email}
        <br />
        Phone: {this.props.instructor.phone}
        <br />
      </div>
    );
  }
}

export default Instructor;
