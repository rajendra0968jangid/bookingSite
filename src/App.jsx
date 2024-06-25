import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Slidebar from "./Components/Slidebar";
import BookingForm from "./Components/BookingForm";
import BookingData from "./Components/BookingData";
import BookingUpdate from "./Components/BookingUpdate";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/Bookingupdate/:id" element={<BookingUpdate />} />
          <Route path="/Bookingdata" element={<BookingData />} />
          <Route path="/card" element={<Card />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/slidebar" element={<Slidebar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
