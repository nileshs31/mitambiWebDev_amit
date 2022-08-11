import React, { useState } from "react";
import "../app.css";
import { db } from "../firebase";

import { TextField , FormLabel , RadioGroup , FormControlLabel , Radio} from '@mui/material';

const Contact = () => {
  

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
    date:"",
    gender:"",
    
  });

 
let name, value;
  const postUserData = (e) => {

    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

    
    const submitData = async (event) => {
      event.preventDefault();
      const { name, email,  message , date , gender } = userData;
  
      if (name &&  email  && message && date && gender ) {
        const res = fetch(
          "https://mitambiintership-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name, 
              email,  
              message , 
              date , 
              gender ,
            }),
          }
        );
  
        if (res) {
          setUserData({
            name:"", 
            email:"", 
            message :"", 
            date :"", 
            gender :"",
          });
          alert("Data Stored");
        } else {
          alert("plz fill the data");
        }
      } else {
        alert("plz fill the data");
      }
    

      
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        DateOfBirth:date,
        gender:gender,
      })
      
      setUserData({
        name:"", 
        email:"", 
        message :"", 
        date :"", 
        gender :"",
      });
     
  };


  return (
    <form className="form" method="POST">
      <h1>Fill your details</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        name="name"
        value={userData.name}
        onChange={postUserData}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        name="email"
        value={userData.email}
        onChange={postUserData}
      />



     
     <label>Choose your birthdate</label>
    <TextField
        id="date"
        label="Choose your birthdate"
        type="date"
        name="date"
        defaultValue="2017-05-24"
        value={userData.date}
        onChange={postUserData}
        InputLabelProps={{
          shrink: true,
        }}
      />


<br />


  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="gender"
    value={userData.gender}
    onChange={postUserData}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>


      <label>Message</label>
      <textarea
        placeholder="Message"
        name="message"
        value={userData.message}
        onChange={postUserData}
      ></textarea>

    <button
        type="submit"               
        onClick={submitData}>
        Submit
    </button>
    </form>
  );
};

export default Contact;
