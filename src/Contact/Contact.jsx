import axios from 'axios';
import React,{useState} from 'react';
import "./Contact.css"

const Contact = () => {
 const [contactDetails,setContactDetails] = useState({
    name:"",
    email:"",
    message:""
 });

 const handleChange = (e) => {
    const {name,value} = e.target;
    setContactDetails({
        ...contactDetails,
        [name]:value
    });
 }

 const handlebutton = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/contact",contactDetails)
    .then((res) => {
        console.log(res.data);
    })

 }
  return (
    <div className='main-body'>
      <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">MIG-1-100 St. Patrick Road, </div>
          <div class="text-two">Kothrud, Pune - 495450</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 9998887771</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">support@binarytreenodes.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any queries, please list down here</p>
      <form action="#">
        <div class="input-box">
          <input type="text" name='name' placeholder="Enter your name" onChange={handleChange} />
        </div>
        <div class="input-box">
          <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} />
        </div>
        <div class="input-box message-box">
          <textarea name="message" placeholder="Enter your message" onChange={handleChange}></textarea>
        </div>
        <div class="button">
          <input type="button" onClick={handlebutton} value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Contact