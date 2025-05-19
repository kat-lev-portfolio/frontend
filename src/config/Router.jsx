import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Portfolio from "../pages//Portfolio/Portfolio.jsx";
import AboutMe from "../pages/AboutMe/AboutMe.jsx";
import Form from "../pages/Form/Form.jsx";

function Router (){
return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/form" element={<Form />}/>
        </Routes>        
    </BrowserRouter>
  )
}

export default Router;