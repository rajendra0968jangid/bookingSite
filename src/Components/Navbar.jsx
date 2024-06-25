import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.clear();
    setUserData(JSON.parse(localStorage.getItem("user")));
  };
  const handleNavigate = async (url) => {
    navigate(`/${url}`);
  };
  console.log(userData);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const userData = false; // Replace this with actual user data check

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <a href="/" className="text-white text-lg font-bold">
              Booking
            </a>
          </div>
          {userData ? (
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => handleNavigate("bookingform")}
                className="text-white"
              >
                Booking Form
              </button>
              <button
                onClick={() => handleNavigate("bookingdata")}
                className="text-white"
              >
                Booking Data
              </button>
              <button onClick={() => handleLogout()} className="text-white">
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <Link to="http://localhost:5173/signup" className="text-white">
                Signup
              </Link>
              <Link to="http://localhost:5173/signin" className="text-white">
                Signin
              </Link>
            </div>
          )}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-2 bg-gray-700 p-4 rounded-lg">
            {userData ? (
              <>
                <button
                  onClick={() => handleNavigate("bookingform")}
                  className="text-white"
                >
                  Booking Form
                </button>
                <button
                  onClick={() => handleNavigate("bookingdata")}
                  className="text-white"
                >
                  Booking Data
                </button>
                <button onClick={() => handleLogout()} className="text-white">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="http://localhost:5173/signup" className="text-white">
                  Signup
                </a>
                <a href="http://localhost:5173/signin" className="text-white">
                  Signin
                </a>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
