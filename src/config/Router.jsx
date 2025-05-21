import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, Navigate, useEffect } from "react";

import Home from "../pages/Home/Home.jsx";
import Portfolio from "../pages//Portfolio/Portfolio.jsx";
import AboutMe from "../pages/AboutMe/AboutMe.jsx";
import Login from "../pages/Login/Login.jsx";
import Create from "../pages/Create/Create.jsx";

function Router (){
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/login" element={
            <Login onLoginSuccess={handleLoginSuccess} />
            }/>
          <Route path="/create" element={
            isAuthenticated ? <Create /> : <Navigate to="/home" />
            }/>
        </Routes>        
    </BrowserRouter>
  )
}

export default Router;