import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // const email = formData.get("email");
    // const password = formData.get("password");

    // create in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result);

        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user.metadata.creationTime,
          lastSignInTime: result.user.metadata.lastSignInTime,
        };
        console.log(email, password, restFormData);

        // using axios
        axios
          .post(`${import.meta.env.VITE_API_URL}/users`, userProfile)
          .then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your SignUp successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        // using fetch
        // save profile in the database --
        // fetch(`${import.meta.env.VITE_API_URL}/users`, {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(userProfile),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.insertedId) {

        //       Swal.fire({
        //         position: "center",
        //         icon: "success",
        //         title: "Your work has been saved",
        //         showConfirmButton: false,
        //         timer: 1500,
        //       });
        //     }
        //   });
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
            className="input w-full"
            placeholder="name"
          />

          <label className="label">address</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="address"
          />

          <label className="label">phone</label>
          <input
            type="text"
            name="phone"
            className="input w-full"
            placeholder="phone"
          />

          <label className="label">photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="photo"
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
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
