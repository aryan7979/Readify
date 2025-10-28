import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successful");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="w-[600px] relative">
        {/* ✅ Make this container relative so ✕ button stays inside it */}
        <div className="modal-box relative bg-white dark:bg-slate-800 dark:text-white shadow-lg rounded-lg p-6">
          {/* ✅ Close Button (Now positioned correctly) */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
          >
            ✕
          </Link>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <h3 className="font-bold text-2xl mb-4 text-center text-gray-800 dark:text-gray-100">
              Signup
            </h3>

            {/* Fullname */}
            <div className="mt-3 space-y-1">
              <label className="text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-pink-500"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mt-3 space-y-1">
              <label className="text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-pink-500"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mt-3 space-y-1">
              <label className="text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-pink-500"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-200">
                Signup
              </button>
              <p className="text-sm dark:text-gray-300">
                Already have an account?{" "}
                <span
                  className="underline text-blue-500 cursor-pointer hover:text-blue-600"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Login Modal */}
      <Login />
    </div>
  );
}

export default Signup;
