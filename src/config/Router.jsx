import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Portfolio from "../pages//Portfolio/Portfolio.jsx";
import AboutMe from "../pages/AboutMe/AboutMe.jsx";

function Router (){
return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>        
    </BrowserRouter>
  )
}

export default Router;