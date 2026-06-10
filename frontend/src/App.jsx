import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");

  const [employees, setEmployees] = useState([]);

  const loadEmployees = async () => {
    const res = await axios.get(
      "http://localhost:5000/employees"
    );

    setEmployees(res.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const addEmployee = async () => {

    await axios.post(
      "http://localhost:5000/employees",
      {
        name,
        email,
        department,
        designation
      }
    );

    alert("Employee Added Successfully");

    loadEmployees();
  };

  const deleteEmployee = async (id) => {

  await axios.delete(
    `http://localhost:5000/employees/${id}`
  );

  loadEmployees();
};

  return (
    <div style={{ padding: "20px" }}>

      <h1>Employee Management System</h1>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Department"
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Designation"
        onChange={(e) => setDesignation(e.target.value)}
      />

      <br /><br />

      <button onClick={addEmployee}>
        Add Employee
      </button>

      <hr />

      <h2>Total Employees: {employees.length}</h2>


      <h2>Employees</h2>

      {employees.map((emp) => (
  <div key={emp._id}>

    <h3>{emp.name}</h3>

    <p>{emp.email}</p>

    <p>{emp.department}</p>

    <p>{emp.designation}</p>

    <button
      onClick={() => deleteEmployee(emp._id)}
    >
      Delete
    </button>

    <hr />

  </div>
))}

    </div>
  );
}

export default App;