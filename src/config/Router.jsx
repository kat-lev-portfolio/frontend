import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home.jsx";
import About from "./../pages/About.jsx";
import Portfolio from "../pages/Portfolio.jsx";

function Router (){
return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>        
    </BrowserRouter>
  )
}

export default Router;