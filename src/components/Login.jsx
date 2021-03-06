import React from "react";
import { useRef } from "react";
import { auth } from "../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);


    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <form onSubmit={handelLogin}>
        <h1>Login</h1>
        <label>Email :</label>
        <input type="email" ref={emailRef} />
        <br></br>
        <label>Password:</label>
        <input type="password" ref={passwordRef} />
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
