import authentication from "../../assets/others/authentication.png";
import authImage from "../../assets/others/authentication2.png";
import "../Login/login.css";

import { AuthContext } from "../../Providers/AuthProvider";

import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //   const handleSignup = (event) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;

  //     createUser(name, email, password).then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     });

  //     console.log("SignUp Successful:", name, email, password);
  //   };

  return (
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
                required
              />
              {errors?.name && (
                <span className="text-red-600">This field is required</span>
              )}
              {/* Email */}
              <label className="label text-[#444] text-lg md:text-2xl font-bold">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Type here"
                required
              />
              {errors?.email && (
                <span className="text-red-600">This field is required</span>
              )}
              {/* Age */}
              <label className="label text-[#444] text-lg md:text-2xl font-bold">
                Age
              </label>
              <input
                {...register("age", { required: true }, { min: 16, max: 70 })}
                name="age"
                type="number"
                className="input input-bordered w-full"
                placeholder="Type here"
                required
              />
              {errors?.age && (
                <span className="text-red-600">This field is required</span>
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
                })}
                name="password"
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                required
              />
              {errors?.password && (
                <span className="text-red-600">
                  Type to the 6 digit password
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
              <a href="/signup" className="link link-primary font-bold">
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
  );
};

export default SignUp;
