import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://localhost:8000/api/login", { email, password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        onLogin();
        navigate('/');
        console.log("berhasil");
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError("Invalid email or password"); // Set error state if login fails
      });
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <section className="dark:bg-[#5296DE]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border-none md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#3863B6] ">
          <div className="bg-blue-300 w-full items-center text-center h-24 rounded-md">
            <h1 className="text-xl pt-8 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Log in
            </h1>
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">

            <form className="space-y-4 md:space-y-6">

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  E-mail
                </label>
                <div className="flex">
                  <div className="bg-blue-400 w-12">
                    <FaRegUser size={20} color="white" className="mx-auto mt-3" />
                  </div>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email} // Bind the 'email' state to the input value
                    onChange={(e) => setEmail(e.target.value)} // Handle input change
                    className="bg-gray-50 border text-gray-900 border-gray-300 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 outline-none hover:border-solid hover:border-2 hover:border-gray-400"
                    placeholder="E-Mail Address"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <div className="flex">
                  <div className="bg-blue-400 w-12">
                    <GiPadlock size={20} color="white" className="mx-auto mt-3" />
                  </div>

                  <div className="w-full relative">
                    <div className="w-full">
                      <input
                        type={open ? "text" : "password"} // Change the type attribute based on the 'open' state
                        name="password"
                        id="password"
                        value={password} // Bind the 'password' state to the input value
                        onChange={(e) => setPassword(e.target.value)} // Handle input change
                        className="bg-gray-50 border text-gray-900 border-gray-300 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 outline-none hover:border-solid hover:border-2 hover:border-gray-400"
                        placeholder="Password"
                        required=""
                      />
                    </div>
                    <div className="text-2xl absolute top-2 right-3">
                      {open ? (
                        <AiFillEyeInvisible onClick={toggle} />
                      ) : (
                        <AiFillEye onClick={toggle} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <a className="text-sm font-medium text-primary-600  text-gray-300">
                  Forgot password?
                  <Link to="/forgot-password" className="text-blue-500 underline hover:text-md">
                    Click here
                  </Link>
                </a>
              </div>
              {error && <div className="text-red-500">{error}</div>} {/* Display error message if there's an error */}
              <div className="flex-1 text-right ">
                <button
                  type="button" // Change the type to "button" to prevent form submission
                  onClick={handleLogin} // Call the handleLogin function on button click
                  className="w-1/3 text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>
                <p className="text-sm font-light text-gray-300 dark:text-gray-300 mt-2">
                  Don’t have an account yet?
                  <Link to="/signup">
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </Link>
                </p>
              </div>
              <div className="flex justify-end"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
