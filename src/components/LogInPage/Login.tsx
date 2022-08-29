import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useMediaQuery } from "react-responsive";
import * as yup from 'yup';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  const goToQuestions= () => {
    navigate("/questions");
  };

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  })
 
    interface IFormInputs{
      username:string;
      password:string;
    }

    const {
      register,
      handleSubmit,
      watch,
      formState:{errors}}
       = useForm<IFormInputs>({
        resolver: yupResolver(schema),
       });

    const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
      
      verifyUser(data, users);

    }

    const dispatch = useDispatch();

    

    function verifyUser(data:any, users:any){
      if(users.find((x: any) => x.user.username===data.username) && users.find((x: any) => x.user.password===data.password) ){
        if(users.findIndex((x: any) => x.user.username===data.username) === users.findIndex((x: any) => x.user.password===data.password)){
          
          dispatch({
            type:"LOGIN",
            payload: {
              isLoggedIn:true,
              loggedInUser: [data.username, data.password]
            }
          })
          goToQuestions();
        }
     } else{
      alert("User not found!");
     }
    }

    const isLoggedIn = useSelector((state:any) => state.isLoggedIn);
    const loggedInUser = useSelector((state:any) => state.loggedInUser);
    const users = useSelector((state:any) => state.users);
 
    //console.log(users[2].user.username);
    


  return (
    <div className="top">
      <h1 className="title">Ask.it</h1>
      <div className="cover">
        <div className="coverChild">
          <h3 className="underTitle">Log in</h3>
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


       <div className="divFlexRight">
      <Button type="submit" className="buttonDefault">Submit</Button>
      </div>
      <div className="coverForLinks">
      <a onClick={goToHome} className="backToHome">
              Back to homepage
            </a>
            <a onClick={goToRegister} className="inHere">
              Register here
            </a>
      </div>
        
      </form>
       
      </div>
    </div>
  );
}

export default Login;
function dispatch(arg0: { type: string; payload: { user: any; }; }) {
  throw new Error("Function not implemented.");
}

