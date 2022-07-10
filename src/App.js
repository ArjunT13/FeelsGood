import React from "react";
import "./App.css"
import {Routes,Route} from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Contact from "./Contact/Contact";
import ConnectPeople from "./ConnectPeople/ConnetPeople";
import Home from "./Home/Home";
import UserCard from "./UserCards/UserCard";
import Feature from "./Features/Feature";
import Chat from "./ChatApplication/Chat";

function App() {
  return (
    <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/feature" element={<Feature />}/>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/contact" element={<Contact />}/>
    <Route path="/connect" element={<UserCard />} />
    <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
