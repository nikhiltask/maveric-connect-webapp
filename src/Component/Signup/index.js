import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/EndPoints";

const SignupPage = () => {
  const [responseMessage, setResponseMessaage] = useState({
    message: "",
    cssClass: "",
  });

  const [errorMessage, setErrorMessaage] = useState({
    userName:'',
    emailError:''
  })

  function validate(){
    if(user.name==''){
      return false
    }
    return true
  }

  const [user, setUser] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    if(ValidityState()){
    axios
      .post(Endpoints.SIGNUP_URL, user)
      .then(
        (response) => {
          console.log(response.data);
          setResponseMessaage({
            message: response.data.message,
            cssClass: 'alert-success'
          });
        },
        (error) => {
          setResponseMessaage({
            message: error.response.data.message,
            cssClass: 'alert-danger'
          });
        }
      )
      .catch((error) => console.log(error));
    }
  }

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>Signup</h2>
          <hr />

         {responseMessage.message && (
              <div class="alert alert-success" role="alert">
              { responseMessage.message }
            </div>
         )}

          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                name="firstName"
                value={user.userName}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                name="password"
                value={user.confirmpassword}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="signup"
              className="btn btn-primary btn-block"
            />
            <br />
            <p>
              <a href="#">Already a member ? Login</a>
            </p>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default SignupPage;
