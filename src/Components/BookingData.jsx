import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import { useNavigate } from "react-router-dom";

export default function BookingData() {
  const navigate = useNavigate();
  let [formData, setFormData] = useState([]);
  let [check, setCheck] = useState(false);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  useEffect(() => {
    const fetchData = async () => {
      // console.log(formData);
      const response = await fetch("http://localhost:8000/bookingdata");
      const jsonresponse = await response.json();
      // console.log(jsonresponse);
      setFormData(jsonresponse);
    };
    fetchData();
  }, [check]);
  const handleDelete = async (id) => {
    // console.log("hello",id)
    const response = await fetch(
      `http://localhost:8000/bookingdatadelete/${id}`,
      {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const jsonresponse = await response.json();
    console.log(jsonresponse);
    setCheck(!check);
    alert(jsonresponse.message);
  };
  const handleRender = async(id)=>{
navigate(`/bookingupdate/${id}`)
  }

  return (
    <>
      <div className="grid grid-rows-[50px]">
        <div>
          <Navbar />
        </div>
        <div className="">
          {userData && (
            <div className="container mx-auto my-8 ">
              <div className="overflow-x-auto">
                <table className="min-w-full table-fixed border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Sr.no
                      </th>
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Name
                      </th>
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Phone
                      </th>
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Email
                      </th>
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Location
                      </th>
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Rent
                      </th>
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Image
                      </th>
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Edit
                      </th>
                      <th className="w-1 py-3 px-6 text-left border-b border-gray-300">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.map((item, index) => (
                      <tr className="hover:bg-gray-100" key={index}>
                        <td className="py-3 px-1 border-b border-gray-200">
                          {index + 1}
                        </td>
                        <td className="py-3 px-1 border-b border-gray-200">
                          {item.hotelname}
                        </td>
                        <td className="py-3 px-1 border-b border-gray-200">
                          {item.hotelphone}
                        </td>
                        <td className="py-3 px-1 border-b border-gray-200">
                          {item.hotelemail}
                        </td>
                        <td className="py-3 px-1 border-b border-gray-200">
                          {item.hotellocation}
                        </td>
                        <td className="py-3 px-1 border-b border-gray-200">
                          {item.hotelrent}
                        </td>
                        <td className="py-3 px-1 border-b border-gray-200">
                          <img
                            src={`http://localhost:8000/image/${item.hotelimage}`}
                            alt=""
                          />
                        </td>
                        <td className="py-3 px-1 border-b border-gray-200">
                          <button className="rounded-md bg-cyan-700 text-white size-12"
                          onClick={()=>handleRender(item._id)}>
                            Edit
                          </button>
                        </td>
                        <td className="py-3 px-1 border-b border-gray-200">
                          <button
                            className="rounded-md bg-red-700 text-white size-12"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <div>
          <Fotter />
        </div>
      </div>
    </>
  );
}
