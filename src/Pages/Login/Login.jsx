import { useContext, useEffect, useState } from "react";
import authentication from "../../assets/others/authentication.png";
import authImage from "../../assets/others/authentication2.png";
import "./login.css";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [captchaError, setCaptchaError] = useState(""); // captcha error handle করার জন্য

  useEffect(() => {
    loadCaptchaEnginge(6); // 6 characters এর captcha load হবে
  }, []);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userCaptcha = form.recaptcha.value;
    if (!validateCaptcha(userCaptcha)) {
      setCaptchaError("Captcha did not match, please try again!");
      form.recaptcha.value = ""; // ভুল হলে input clear করে দেব
      return;
    }

    setCaptchaError(""); // ঠিক থাকলে error clear করবে

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully Login.");
        navigate("/");
      })
      .catch((error) => {
        console.error("Login Failed:", error.message);
        toast.error("Invalid email or password");
      });
  };

  return (
    <>
      <Toaster />
      <Helmet>
        <title>MRS Restaurant | Login</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${authentication})`,
        }}
      >
        <div className="hero-content flex-col md:flex-row gap-6 p-6 rounded-2xl shadow w-full max-w-6xl">
          {/* Left Side Image */}
          <div className="flex justify-center md:w-1/2 w-full">
            <img
              src={authImage}
              alt="Authentication"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Right Side Form */}
          <div className="card md:w-1/2 w-full max-w-md ">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-4xl md:text-5xl font-bold text-center">
                Login
              </h1>

              <fieldset className="fieldset mt-5 space-y-3">
                {/* Email */}
                <label className="label text-[#444] text-lg md:text-2xl font-bold">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Type here"
                  required
                />

                {/* Password */}
                <label className="label text-[#444] text-lg md:text-2xl font-bold">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  required
                />

                {/* Captcha */}
                <div className="w-full">
                  <LoadCanvasTemplate />
                </div>
                <input
                  name="recaptcha"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter captcha"
                  required
                />

                {/* Error Message */}
                {captchaError && (
                  <p className="text-red-600 font-semibold text-sm">
                    {captchaError}
                  </p>
                )}

                {/* Submit */}
                <input
                  className="btn bg-[#D1A054B2] mt-4 w-full text-white text-xl"
                  type="submit"
                  value="Sign In"
                />
              </fieldset>

              <p className="text-center mt-4 text-sm md:text-base">
                New here?{" "}
                <a href="/signup" className="link link-primary font-bold">
                  Create a New Account
                </a>
              </p>
              <span className="text-center text-sm md:text-base">
                Or sign in with
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
