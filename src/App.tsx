import LoginPage from "./components/LogInPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import QuestionsPage from "./components/Questions/QuestionsPage";
import React from "react";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="" element={<Home />}></Route>

          <Route path="questions" element={<QuestionsPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
