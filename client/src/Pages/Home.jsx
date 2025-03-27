import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/create");
  };
  const handleEdit = () => {
    navigate("/edit");
  };

  const [students, setStudents] = useState([]);

  const fetchStudent = async () => {
    try {
      const res = await axios.get("http://localhost:5000/student");
      setStudents(res.data); // ✅ this is the correct way
    } catch (error) {
      console.error("Failed to fetch", error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      alert("Student Deleted Sucessfully!");
      fetchStudent();
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  };

  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-pink-200">
      <div className="bg-blue-400 p-5">
        <button
          onClick={handleAdd}
          className="bg-green-500 px-4 py-2 text-white rounded-3xl mb-5 cursor-pointer"
        >
          Add new
        </button>
        <table className="w-full bg-white">
          <thead>
            <tr>
              <th className="thCss">ID</th>
              <th className="thCss">FIRSTNAME</th>
              <th className="thCss">LASTNAME</th>
              <th className="thCss">COURSE</th>
              <th className="thCss">CONTACT NUMBER</th>
              <th className="thCss">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student.id}>
                  <td className="thCss">{student.id}</td>
                  <td className="thCss">{student.firstname}</td>
                  <td className="thCss">{student.lastname}</td>
                  <td className="thCss">{student.course}</td>
                  <td className="thCss">{student.email}</td>
                  <td className="thCss">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(student)}
                        className="bg-yellow-300 thCss cursor-pointer"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="bg-red-300 thCss cursor-pointer"
                      >
                        DELETE
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="thCss text-center" colSpan="6">
                  There is no student.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
