import React from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="bg-pink-200 h-[100vh] w-full flex items-center justify-center">
      <div className="flex flex-col bg-blue-400 p-5 w-2xl">
        <h1 className="mb-5 text-2xl font-bold">Create new Student</h1>
        <input
          className="inputCss focus: outline-none"
          type="text"
          placeholder="Enter firstname"
        />
        <input
          className="inputCss focus: outline-none"
          type="text"
          placeholder="Enter lastname"
        />
        <input
          className="inputCss focus: outline-none"
          type="text"
          placeholder="Enter Course"
        />
        <input
          className="inputCss focus: outline-none"
          type="email"
          placeholder="Enter Email"
        />
        <button className=" bg-green-400  px-4 py-2 mb-5 text-white cursor-pointer">
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
