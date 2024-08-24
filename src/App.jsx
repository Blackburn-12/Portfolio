import { Route, Routes } from "react-router-dom";
import { About, Contact, HackathonProject, Home, Projects } from "./componenets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hackathon-project" element={<HackathonProject />} />
      </Routes>
    </>
  );
}

export default App;
