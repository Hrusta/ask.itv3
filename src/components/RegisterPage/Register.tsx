import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, SubmitHandler } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import * as yup from 'yup';
import {useDispatch, useSelector} from "react-redux";

function Register() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToLogIn = () => {
    navigate("/login");
  };

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).max(20).required(),
    email: yup.string().email().required(),
    fullName: yup.string().required(),
    age: yup.string().required(),
  })
 
    interface IFormInputs{
      username:string;
      password:string;
      email:string;
      fullName:string;
      age:number;
    }

    const {
      register,
      handleSubmit,
      watch,
      formState:{errors}}
       = useForm<IFormInputs>({
        resolver: yupResolver(schema),
       });

      const dispatch = useDispatch();

    

    const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
      
      dispatch({
        type:"REGISTER",
        payload: {
          user:data
        }
      })
      
      setTimeout(function(){
        goToLogIn();
   },1000); 
     

    }
    const isLoggedIn = useSelector((state:any) => state.isLoggedIn);
    console.log(isLoggedIn);
    const users = useSelector((state:any) => state.users);
    
    
  

  return (
    <div className="top">
      <h1 className="title">Ask.it</h1>
      <div className="cover">
        <div className="coverChild">
          <h3 className="underTitle">Register</h3>
        </div>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
       

      
<div className="coverForInput">
<label className="form-label">Username</label>
<div className="input-group mb-3">

  <input type="text"  className="form-control" aria-label="Username" aria-describedby="basic-addon1" {...register('username')}/> 
</div>
{errors.username && errors.username?.message && <span className="errorMessage">*{errors.username.message}</span>}
</div>


<div className="coverForInput">
<label className="form-label">Password</label>
<div className="input-group mb-3">
  
<input type="password" className="form-control"  aria-label="Password" aria-describedby="basic-addon1" {...register('password')}/> 
</div>
{errors.password && errors.password?.message && <span className="errorMessage">*{errors.password.message}</span>}
</div>


<div className="coverForInput">
<label className="form-label">Email</label>
<div className="input-group mb-3">
  
<input type="text" className="form-control"  aria-label="Email" aria-describedby="basic-addon1" {...register('email' )}/> 
</div>
{errors.email && errors.email?.message && <span className="errorMessage">*{errors.email.message}</span>}
</div>


<div className="coverForInput">
<label className="form-label">Full Name</label>
<div className="input-group mb-3">
  
<input type="text" className="form-control"  aria-label="Full Name" aria-describedby="basic-addon1" {...register('fullName' )}/> 
</div>
{errors.fullName && errors.fullName?.message && <span className="errorMessage">*{errors.fullName.message}</span>}
</div>

<div className="coverForInput">
<label className="form-label">Age</label>
<div className="input-group mb-3">
  
<input type="text" className="form-control"  aria-label="Age" aria-describedby="basic-addon1" {...register('age' )}/> 
</div>
{errors.age && errors.age?.message && <span className="errorMessage">*{errors.age.message}</span>}
</div>
       <div className="divFlexRight">
      <Button type="submit" className="buttonDefault">Submit</Button>
      </div>
      <div className="coverForLinks">
      <a onClick={() => navigate("/")}  className="backToHome">Back to homepage</a>
      <a onClick={() => navigate("/login")}   className="inHere" >Log in here</a>
      </div>
        
      </form>
       
      </div>
    </div>
  );
  }



export default Register;
function username(username: any, string: typeof yup.string): any {
  throw new Error("Function not implemented.");
}

