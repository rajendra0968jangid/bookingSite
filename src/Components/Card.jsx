import { useEffect, useState } from "react";

export default function Card() {
  let [formData, setFormData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // console.log(formData);
      const response = await fetch("http://localhost:8000/bookingdata");
      const jsonresponse = await response.json();
      // console.log(jsonresponse);
      setFormData(jsonresponse);
    };
    fetchData();
  }, []);
  // console.log(formData);
  return (
    <>
      <div className="">
        <div className="text-center">
          <h1 className="text-3xl">Our hotels</h1>
        </div>
        <div className="m-2 grid md:grid-cols-3 sm:grid-cols-2">
          {formData.map((item, index) => (
            <div className="m-2" key={index}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img
                  className="w-full"
                  src={`http://localhost:8000/image/${item.hotelimage}`}
                  alt="Placeholder Image"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.hotelname}</div>
                  <p className="text-gray-700 text-base">{item.hotelphone}</p>
                  <p className="text-gray-700 text-base">{item.hotelemail}</p>
                  <p className="text-gray-700 text-base">
                    {item.hotellocation}
                  </p>
                  <p className="text-gray-700 text-base">{item.hotelrent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
