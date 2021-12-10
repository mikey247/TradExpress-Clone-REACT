import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-bg">
          <h1>Welcome Back!</h1>
          <form action="" className="login">
            <div className="login-input">
              <input type="text" placeholder="Username" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
           <div className="remember-me">
           <label>
              {" "}
              <input type="checkbox" name="remember-password" /> Remember
              password
            </label>{" "}
            <a href="/">Forgot Password?</a>
           </div>
            
            <button type="submit">Login</button> <br />
            <div className>
              <p>New user? <Link to="/getstarted">Click here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
