import React from "react";
import ArrayOfPerson from "./ArrayOfPerson";

function MainDisplay(props) {
  const alphEng = props.alphEng;
  let groups = props.groups;

  return (
    <div className="mainDisp">
      <h1>Employees</h1>
      <div className="letter">
        {alphEng.map((letter, index) => {
          return (
            <p key={index}>
              <strong>{letter}</strong>
            </p>
          );
        })}
      </div>
      <div className="list">
        {groups.map((element, index) => {
          return <ArrayOfPerson arr={element} key={index}></ArrayOfPerson>;
        })}
      </div>
    </div>
  );
}

export default MainDisplay;
