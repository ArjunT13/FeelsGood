import React,{useState} from 'react'
import './Register.css';
import PersonalDetails from './Forms/PersonalDetails';
import ExternalDetails from './Forms/ExternalDetails';


const Register = () => {
  const [step,setStep]  = useState(1);
  
  const [formData,setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    education:"",
    city:"",
    age:"",
    hobbies:"",
    des:"",
    profession:""
  })

  const nextStep = () => {
     setStep(step+1);
  }

  const hanelInputData = (input) => e => {
     const {value} = e.target;
     setFormData(prevState => ({
       ...prevState,
       [input]:value
     }) 
     )
  }

  const renderPC = () => {
    const choice = step;
    switch(choice){
      case 1:
        return <PersonalDetails nextStep={nextStep} handleFormData={hanelInputData} value={formData} />;
      
      case 2:
        return <ExternalDetails nextStep={nextStep} handleFormData={hanelInputData} value={formData}  />;
    }
  }


  return(
    <>
    <div className='registerPC'>
    <div className='rBlock'>
      <div className='rLeft'>
       <img src='images/register.svg' />
      </div>
      {renderPC()}
    </div>
    </div>
    </>
  )
};

export default Register;
