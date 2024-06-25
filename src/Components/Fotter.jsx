import React from "react";

export default function Fotter() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h5 className="text-xl font-bold mb-4">About Us</h5>
              <p className="text-gray-400">
                We are a leading company in providing the best quality products
                and services to our customers.
              </p>
            </div>
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3">
              <h5 className="text-xl font-bold mb-4">Contact Us</h5>
              <p className="text-gray-400">
                1234 Street Name, City, State, 12345
              </p>
              <p className="text-gray-400">Email: info@example.com</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-500">
              &copy; 2024 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
