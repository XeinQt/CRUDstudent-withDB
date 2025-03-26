import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");

  const handleCancel = () => {
    navigate("/");
  };

  const handleAdd = async () => {
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      course.trim() === "" ||
      email.trim() === ""
    ) {
      alert("Please input a filed");
      return;
    } else if (/\d/.test(firstname) || /\d/.test(lastname)) {
      alert("Please input a valid firstname or lastname");
      return;
    } else if (!email.endsWith("gmail.com")) {
      alert("Please a email with @gmail.com");
      return;
    } else {
      try {
        await axios.post("http://localhost:5000/add", {
          firstname: firstname,
          lastname: lastname,
          course: course,
          email: email,
        });
        alert("Added successfully!");
        setFirstname("");
        setLastname("");
        setCourse("");
        setEmail("");
        navigate("/");
      } catch (error) {
        console.error("Error in adding", error);
      }
    }
  };
  return (
    <div className="bg-pink-200 h-[100vh] w-full flex items-center justify-center">
      <div className="flex flex-col bg-blue-400 p-5 w-2xl">
        <h1 className="mb-5 text-2xl font-bold">Create new Student</h1>
        <input
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="inputCss focus: outline-none "
          type="text"
          placeholder="Enter firstname"
        />
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="inputCss focus: outline-none"
          type="text"
          placeholder="Enter lastname"
        />
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="inputCss focus: outline-none"
          type="text"
          placeholder="Enter Course"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputCss focus: outline-none"
          type="email"
          placeholder="Enter Email"
        />
        <button
          onClick={handleAdd}
          className=" bg-green-400  px-4 py-2 mb-5 text-white cursor-pointer"
        >
          Add
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-600  px-4 py-2 mb-5 text-white cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Create;
