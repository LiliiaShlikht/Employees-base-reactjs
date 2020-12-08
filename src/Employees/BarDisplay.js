const { default: BDPerson } = require("./BDPerson");

function BarDisplay(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getFiltered(index) {
    return props.employees.filter(
      (employee) =>
        employee.checked && index === new Date(employee.dob).getMonth()
    );
  }

  return (
    <div className="barDisp">
      <h1>Employees birthdays</h1>
      <div className="barInnDiv">
        {months.map((month, index) => {
          if (getFiltered(index).length) {
            return (
              <div className="listOfBD">
                <h3 key={index}>{month}</h3>
                <BDPerson
                  employees={props.employees}
                  monthInd={index}
                ></BDPerson>
              </div>
            );
          } 
        })}
      </div>
    </div>
  );
}

export default BarDisplay;
