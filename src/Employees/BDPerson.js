function BDPerson({ employees, monthInd }) {
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

  function getFullDate(dob) {
    let bdDate = new Date(dob);
    let stringDate =
      bdDate.getDate() +
      " " +
      months[bdDate.getMonth()] +
      ", " +
      bdDate.getFullYear() +
      " year";
    return stringDate;
  }

  return (
    <div>
      {employees
        .filter((employee) => {
          return (
            employee.checked && monthInd === new Date(employee.dob).getMonth()
          );
        })
        .map((dbPerson) => {
          return (
            <ul>
              <li key={dbPerson.id}>
                {dbPerson.lastName} {dbPerson.firstName} -{" "}
                {getFullDate(dbPerson.dob)}
              </li>
            </ul>
          );
        })}
    </div>
  );
}

export default BDPerson;
