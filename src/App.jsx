import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animation from "./pages/animation";
import Feature from "./pages/feature";
import Courses from "./pages/courses";
import Testimonial from "./components/TestimonialComp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/animation" element={<Animation />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </Router>
  );
}

export default App;
