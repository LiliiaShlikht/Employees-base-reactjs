const { default: Person } = require("./Person");

function ArrayOfPerson({ arr }) {
  return (
    <div>
      {arr.map((employee, index) => {
        if (employee.length === 0) {
          employee = "---";
        }
        return (
          <Person
            lastName={employee.lastName}
            firstName={employee.firstName}
            id={employee.id}
            key={index}
          ></Person>
        );
      })}
    </div>
  );
}

export default ArrayOfPerson;
