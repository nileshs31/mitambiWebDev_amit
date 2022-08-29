import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase";

import { TextField , FormLabel , RadioGroup , FormControlLabel , Radio} from '@mui/material';



    
    

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password:"",
    category :"",
    date:"",
    gender:"",
    
  });

 
let name, value;
  const postUserData = (e) => {

    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };



  
  const [error, setError] = useState("");
  
  const { signUp } = useUserAuth();
  let navigate = useNavigate();


  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const {  name,email,password,category,date , gender } = userData; 
    setError("");
   
   
  
    if (email && name  && password && category && date && gender ) {
      const res = fetch(
        "https://mitambiintership-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            category,
            password,
            date , 
            gender ,
          }),
        }
      );

      if (res) {

        try {
          await signUp(email, password);
          navigate("/");

        setUserData({
          email :"",
          name:"",
          password:"",
          category:"",
          date :"", 
          gender :"",
        });
        alert("Data Stored");
      }
      catch (err) {
          setError(err.message);
        }

      } else {
        
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  

    
  db.collection("contacts")
    .add({
      Useremail:email,
      Username:name,
      Userpassword:password,
      Usercategory:category,
      DateOfBirth:date,
      gender:gender,
    })
    
    setUserData({
      email:"",
      password:"",
      name:"",
      category:"",
      date :"", 
      gender :"",
    });
   

};

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              name="email"
              value={userData.email}
              onChange={postUserData}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={postUserData}
            />

</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="textfield"
              placeholder="Name"
              name="name"
              value={userData.name}
              onChange={postUserData}
            />

</Form.Group>
    
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



  <FormLabel id="demo-controlled-radio-buttons-group">Category</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="category"
    value={userData.category}
    onChange={postUserData}
  >
    <FormControlLabel value="student" control={<Radio />} label="student" />
    <FormControlLabel value="teacher" control={<Radio />} label="teacher" />
  </RadioGroup>

        

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
