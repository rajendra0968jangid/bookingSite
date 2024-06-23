function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="text-white text-lg font-bold">
              Booking
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="http://localhost:5173/signup" className="text-white">
              Signup
            </a>
            <a href="http://localhost:5173/signin" className="text-white">
              Signin
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
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
      </nav>
    </>
  );
}

export default Navbar;
