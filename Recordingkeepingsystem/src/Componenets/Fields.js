import React from "react";
import { useState } from "react";
const Fields = () => {
  const [id, setid] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setdept] = useState("");
  const [contact, setcontact] = useState("");
  const idinputHandler = (e) => {
    setid(e.target.value);
  };
  const nameinputHandler = (e) => {
    setName(e.target.value);
  };
  const emailinputHandler = (e) => {
    setEmail(e.target.value);
  };
  const deptinputHandler = (e) => {
    setdept(e.target.value);
  };
  const contactinputHandler = (e) => {
    setcontact(e.target.value);
  };
  const addData = () => {
    setData([
      ...data,
      { id: id, name: name, email: email, dept: dept, contact: contact },
    ]);
    setid("");
    setName("");
    setEmail("");
    setdept("");
    setcontact("");
  };
  const editData = (f) => {
    let updatedArr = data.filter((item, ind) => ind !== f);
    setData(updatedArr);
  };

  const delData = (f) => {
    let updatedArr = data.filter((item, ind) => ind !== f);
    setData(updatedArr);
  };

  return (
    <>
      <div className="form">
        <input
          type="int"
          placeholder="Enter Student ID"
          style={{ width: "500px", height: "30px" }}
          onChange={idinputHandler}
          value={id}
        />
        <input
          type="text"
          placeholder="Enter Name"
          style={{ width: "500px", height: "30px" }}
          onChange={nameinputHandler}
          value={name}
        />
        <input
          type="email"
          placeholder="Enter Email"
          style={{ width: "500px", height: "30px" }}
          onChange={emailinputHandler}
          value={email}
        />
        <input
          type="text"
          placeholder="Enter Department"
          style={{ width: "500px", height: "30px" }}
          onChange={deptinputHandler}
          value={dept}
        />
        <input
          type="phone-no"
          placeholder="Enter ContactNumber"
          style={{ width: "500px", height: "30px" }}
          onChange={contactinputHandler}
          value={contact}
        />
        <button
          type="button"
          className="adddatabtn"
          onClick={addData}
          style={{ width: "50px", height: "36px" }}
        >
          +
        </button>
      </div>
      <div className="allrecord">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">StudentID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">Phone-No</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, ind) => (
              <tr className="rows">
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.dept}</td>
                <td>{x.contact}</td>
                <td>
                  <button className="deldatabtn" onClick={() => editData(ind)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="deldatabtn" onClick={() => delData(ind)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fields;
