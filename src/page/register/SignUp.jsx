import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    // create in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100  max-w-md mx-auto shrink-0  mt-20">
      <div className="card-body ">
        <h1 className="text-4xl font-bold">Sign up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          
          <label className="label">Name</label>
          <input 
            type="text" 
            name="name" 
            className="input" 
            placeholder="name" 
          />

          <label className="label">address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="address"
          />

          <label className="label">phone</label>
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="phone"
          />

          <label className="label">photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="photo"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
