import React from 'react'
import '../Register.css';
import Swal from 'sweetalert2';
import validator from 'validator';
import axios from 'axios';

const ExternalDetails = ({nextStep,handleFormData,value}) => {
  const postData = () => {
    axios.post("http://localhost:8080/register",value)
    .then((res) => {
      Swal.fire({
        title: res.data.title,
        text: res.data.text,
        icon: res.data.icon,
        confirmButtonText: res.data.confirmButtonText
       });
    })
  }
  const submitForm = (e) => {
     e.preventDefault();
     console.log(value);

     postData();
  }
  return (
    <div className='rCRight'>
    <div className='rCTittle'>
      <h1>College Details</h1>
    </div>
    <div className='rCForm'>
      <form onSubmit={submitForm}>
        <input type="text" placeholder='Enter Your Education' onChange={handleFormData("education")} />
        <input type="text" placeholder='Enter Your Current City' onChange={handleFormData("city")}/>
        <input type="text" placeholder='Enter Your Profession' onChange={handleFormData("profession")}/>
        <input type="number" placeholder='Enter Your Age' onChange={handleFormData("age")}/>
        <input type='text'  placeholder='Enter Your Hobbies' onChange={handleFormData("hobbies")}/>
        <input type='text' placeholder='Enter Your Self Description'  onChange={handleFormData("des")}/>
        <button type='submit'><i class="fa-solid fa-arrow-right-long"></i> Next Step</button>
      </form>
    </div>
    </div>
  )
}

export default ExternalDetails