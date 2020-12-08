import React, { useEffect, useState } from "react";
import "./App.css";
import MainDisplay from "./Employees/MainDisplay";
import BarDisplay from "./Employees/BarDisplay";
import Context from "./Context";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((response) => response.json())
      .then((employees) => {
        setEmployees(employees);
      });
  }, []);

  let groups = [];
  const alphEng = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  alphEng.forEach((letter) => {
    let arr = employees.filter((employee) => {
      return employee.lastName[0] === letter;
    });
    if (arr.length === 0) {
      arr[0] = "---";
    }
    groups.push(arr);
  });

  function check(id) {
    setEmployees(
      employees.map((employee) => {
        if (employee.id === id) {
          employee.checked = !employee.checked;
        }
        return employee;
      })
    );
  }

  return (
    <Context.Provider value={{ check }}>
      <div className="theWindow">
        <MainDisplay groups={groups} alphEng={alphEng}></MainDisplay>
        <BarDisplay employees={employees}></BarDisplay>
      </div>
    </Context.Provider>
  );
}

export default App;
