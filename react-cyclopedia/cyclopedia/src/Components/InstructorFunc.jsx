import React, { useEffect } from "react";

const InstructorFunc = (props) => {
  // constructor(props) {
  //     super(props);

  // }

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      <br />
      Name: {props.instructor.name}
      <br />
      Email: {props.instructor.email}
      <br />
      Phone: {props.instructor.phone}
      <br />
    </div>
  );
};

export default InstructorFunc;
