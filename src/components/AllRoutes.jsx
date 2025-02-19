import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import Courses from "../pages/Courses";
import Fees from "../pages/Fees";
import Learn from "../pages/Learn";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/:user_id" element={<UserDetails />} />
    </Routes>
  );
}
