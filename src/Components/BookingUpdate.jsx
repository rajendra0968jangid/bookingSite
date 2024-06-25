import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookingUpdate(req) {
  const [formDataGet,setFormDataGet] = useState({})
  const [formData,setFormData] = useState({});
  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch("http://localhost:8000/bookingdatabyid/667948b1ac05f9579c129902")
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setFormDataGet(jsonResponse)
    }
    fetchData();
  },[])
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: name === "hotelimage" ? files[0] : value,
    }));
  }
  const handleSubmit = async()=>{
    e.preventDefault();
    console.log(formData);
    //api
    const formD = new FormData();
    formD.append("hotelname", formData.hotelname);
    formD.append("hotelphone", formData.hotelphone);
    formD.append("hotelemail", formData.hotelemail);
    formD.append("hotellocation", formData.hotellocation);
    formD.append("hotelrent", formData.hotelrent);
    formD.append("hotelimage", formData.hotelimage);
    const response = await fetch(`http://localhost:8000/bookingdataedit/667948b1ac05f9579c129902`,{
      method:'PUT',
      body:formD
    })
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  }

  return (
    <>
      {userData && (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Hotel Form
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST"
            onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hotel Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="hotelname"
                    type="text"
                    autoComplete="name"
                    required=""
                    value={formDataGet.hotelname}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hotel phone
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="hotelphone"
                    type="number"
                    autoComplete="phone"
                    required=""
                    value={formDataGet.hotelphone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hotel Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="hotelemail"
                    type="email"
                    autoComplete="email"
                    required=""
                    value={formDataGet.hotelemail}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hotel Location
                </label>
                <div className="mt-2">
                  <input
                    name="hotellocation"
                    type="text"
                    required=""
                    value={formDataGet.hotellocation}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hotel Rent
                </label>
                <div className="mt-2">
                  <input
                    name="hotelrent"
                    type="number"
                    required=""
                    value={formDataGet.hotelrent}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hotel Image upload
                </label>
                <div className="mt-2">
                  <input
                    name="hotelimage"
                    type="file"
                    required=""
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
