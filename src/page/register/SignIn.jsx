

const SignIn = () => {
 
  return (
    <div className="card bg-base-100  max-w-md mx-auto shrink-0  mt-20">
      <div className="card-body ">
        <h1 className="text-4xl font-bold">Sign up now!</h1>
        <form onSubmit={''} className="fieldset">
          
         
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
          <button className="btn btn-neutral mt-4">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn