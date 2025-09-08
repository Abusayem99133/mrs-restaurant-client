import authentication from "../../assets/others/authentication.png";
import authImage from "../../assets/others/authentication2.png";
import "../Login/login.css";

import { AuthContext } from "../../Providers/AuthProvider";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data?.email, data?.password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Successfully Sign Up");
        console.log("User created :", loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign Up Failed:", error.message);
        toast.error(error.message);
      });
    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>MRS Restaurant | Sign Up</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${authentication})`,
        }}
      >
        <div className="hero-content flex-col md:flex-row-reverse gap-6 p-6 rounded-2xl shadow w-full max-w-6xl">
          {/* Left Side Image */}
          <div className="flex justify-center md:w-1/2 w-full">
            <img
              src={authImage}
              alt="Authentication"
              className="w-full max-w-md object-contain"
            />
          </div>

          <Toaster />
          {/* Right Side Form */}
          <div className="card md:w-1/2 w-full max-w-md ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-4xl md:text-5xl font-bold text-center">
                Sign Up
              </h1>

              <fieldset className="fieldset mt-5 space-y-3">
                {/* Name */}
                <label className="label text-[#444] text-lg md:text-2xl font-bold">
                  Name
                </label>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Type here"
                />
                {errors?.name && (
                  <span className="text-red-600">Name field is required</span>
                )}
                {/* Email */}
                <label className="label text-[#444] text-lg md:text-2xl font-bold">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Type here"
                />

                {errors?.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}

                {/* Age */}
                <label className="label text-[#444] text-lg md:text-2xl font-bold">
                  Age
                </label>
                <input
                  {...register("age", { required: true, min: 16, max: 70 })}
                  name="age"
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Type here"
                />
                {errors?.age?.type === "required" && (
                  <span className="text-red-600">Age field is required</span>
                )}
                {errors?.age?.type === "min" && (
                  <span className="text-red-600">
                    People under 16 years of age are not allowed.
                  </span>
                )}
                {errors?.age?.type === "max" && (
                  <span className="text-red-600">
                    People aged 70 years or below are allowed.
                  </span>
                )}

                {/* Password */}
                <label className="label text-[#444] text-lg md:text-2xl font-bold">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                  })}
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                />

                {errors?.password?.type === "required" && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors?.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less than 15 characters
                  </span>
                )}
                {errors?.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have one uppercase and on lower case, one
                    number and one special characters
                  </span>
                )}
                {/* Submit */}
                <input
                  className="btn bg-[#D1A054B2] mt-4 w-full text-white text-xl"
                  type="submit"
                  value="Sign Up"
                />
              </fieldset>

              <p className="text-center mt-4 text-sm md:text-base">
                Already registered?{" "}
                <a href="/login" className="link link-primary font-bold">
                  Go to login
                </a>
              </p>
              <span className="text-center text-sm md:text-base">
                Or signUp with
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
