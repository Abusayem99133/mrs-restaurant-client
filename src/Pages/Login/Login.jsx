import authentication from "../../assets/others/authentication.png";
import authImage from "../../assets/others/authentication2.png";
import "./login.css";
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: `url(${authentication})`,
      }}
    >
      <div className="hero-content flex-col-reverse md:flex-row shadow w-6xl">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={authImage} alt="" />
        </div>
        <div className="card  md:w-1/2 max-w-sm shrink-0 ">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <fieldset className="fieldset mt-5">
              <label className="label text-2xl font-bold text-[#444]">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Type here"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Enter your password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <input
                className="btn btn-primary mt-4"
                type="submit"
                value={"Sign In"}
              />
            </fieldset>
            <p>New here? Create a New Account</p>
            <span>Or sign in with</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
