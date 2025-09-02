import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)

    // firebase sign in send
    signInUser(email, password)
      .then((result) => {
        console.log(result.user)
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500,
        })
        // const signInInfo = {
        //   email,
        //   lastSignInTime: result.user?.metadata?.lastSignInTime,
        // };

        // axios
        //   .patch(`${import.meta.env.VITE_API_URL}/users`, signInInfo)
        //   .then((data) => {
        //     console.log(data.data);
        //     if (data.data.insertedId) {
        //       Swal.fire({
        //         position: "center",
        //         icon: "success",
        //         title: "Your SignIn successfully",
        //         showConfirmButton: false,
        //         timer: 1500,
        //       });
        //     }
        //     navigate(location?.state || "/");
        //   });

        // update last sign in to the database
        // fetch(`${import.meta.env.VITE_API_URL}/users`, {
        //   method: "PATCH",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(signInInfo),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("after update data", data);
        //   });
      
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user)
        navigate(location.state || '/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="card bg-base-100  max-w-md mx-auto shrink-0  mt-20">
      <div className="card-body ">
        <h1 className="text-4xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
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
          <button className="btn btn-neutral mt-4">Sign in</button>
        </form>
        {/* Google */}
        <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
