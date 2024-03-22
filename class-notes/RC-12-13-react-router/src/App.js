import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyNavbar from "./components/MyNavbar";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";
// import Contact from "./pages/ContactForm";
// import Teacher from "./pages/Teacher";
// import CourseCard from "./pages/CourseCard";
// import CardDetails from "./pages/CardDetails";
// import Login from "./pages/Login";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import TeacherDetails from "./pages/TeacherDetails";
// import NotFound from "./pages/NotFound";
import AppRouter from "./router/AppRouter";
const App = () => {
  return (
    <div>
      <AppRouter />
      {/* <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:id" element={<TeacherDetails />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/courses/:name" element={<CardDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </div>
  );
};

export default App;
