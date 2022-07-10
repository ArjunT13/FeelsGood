import React,{useState} from 'react'
import "./Home.css";
import HomeSection from "./SubComponents/HomeSection";
import Navbar from "./SubComponents/Navbar"
import Footer from "./SubComponents/Footer"
import Cards from "./SubComponents/Card";
import MidSection from './SubComponents/MidSection';

const Home = () => {
  
  const [user,setUser] = useState({});
  return (
    <>
    <Navbar user={user} />
    <HomeSection />
    <Cards />
    <MidSection />
    <Footer />
    </>
    
  )
}

export default Home