import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = { email: data.email, password: data.password };
    await axios.post("http://localhost:4001/user/login", userInfo)
      .then(res => {
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3")?.close();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setTimeout(() => window.location.reload(), 1000);
        }
      })
      .catch(err => {
        if (err.response) toast.error("Error: " + err.response.data.message);
      });
  };

  return (
    <dialog id="my_modal_3" className="modal backdrop:bg-black/50 backdrop:backdrop-blur-sm">
      <div className="modal-box bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl p-6 shadow-lg w-full max-w-md relative">
        {/* Cross button */}
        <span
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer text-xl font-bold transition"
          onClick={() => document.getElementById("my_modal_3")?.close()}
        >
          ✕
        </span>

        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-900 dark:text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 transition"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-4 py-2 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 transition"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 dark:hover:bg-pink-600 transition"
            >
              Login
            </button>
            <p className="text-sm text-gray-900 dark:text-white text-center sm:text-left">
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
