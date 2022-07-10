import React,{useEffect,useState} from 'react'
import Navbar from '../Home/SubComponents/Navbar'
import { Link } from 'react-router-dom';
import "./Feature.css";
import axios from 'axios';

const Feature = () => {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/record")
    .then((res)=>{
        setUsers(res.data);
    });
  })
  const handleText = (id) =>{
    console.log(id);
    
  }
  return (
    <>
    <Navbar />
    <div className='ccontainer'>
    {users.map((val,key) => {
      return(
        <div className="post">
          <img className="postImg" src='images/anx.jpg' alt=""/>
          <div className="postInfo">  
            <span className="postTitle">{val.firstname+" "+val.lastname}</span>
          <hr />
          </div>
          <p className="postDesc">{val.des}</p>
          <div className='postbutton'>
            <button onClick={() => {handleText(val._id)}}>Text Chat</button>
            <button>Video Chat</button>
          </div>
        </div>
    
      )
    })}
    </div>
    </>
  );
}

export default Feature