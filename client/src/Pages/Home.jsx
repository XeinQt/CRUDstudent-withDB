import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/create");
  };
  const handleEdit = () => {
    navigate("/edit");
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
            <tr>
              <td className="thCss">1</td>
              <th className="thCss">Rico</th>
              <th className="thCss">Alentijo</th>
              <th className="thCss">BSIT</th>
              <th className="thCss">09095549524</th>
              <th className="thCss">
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={handleEdit}
                    className=" bg-yellow-300 thCss cursor-pointer"
                  >
                    EDIT
                  </button>
                  <button className="bg-red-300 thCss cursor-pointer">
                    DELETE
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
