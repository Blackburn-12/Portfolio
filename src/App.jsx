import { Route, Routes } from "react-router-dom"
import { About, Contact, Home, Projects } from "./componenets"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
 
    </>
  )
}

export default App
