import React, {
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import {
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import axios from "axios"
const SignUp =

  () => {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [validation,setValidation] = useState("");
    const navigate = useNavigate();

   const signUpHandler = async (e) =>{
    e.preventDefault(); 

    const formData = new FormData();

    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    await axios.post('http://127.0.0.1:8000/api/register', formData)
    .then(() =>{
      navigate('/login');
    }).catch((error) => {
      console.log(error.response.data);
    })
   }
    const [
      open,
      setOpen,
    ] =
      useState(
        false
      );

    //handle toggle
    const toggle =
      () => {
        setOpen(
          !open
        );
      };

    return (
      <section className="dark:bg-[#5296DE]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow border-none md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#3863B6] ">
            <div className="bg-blue-300 w-full items-center text-center h-24 rounded-md">
              <h1 className="text-xl pt-8 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign
                Up
              </h1>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={signUpHandler}
              >
                 <meta name="csrf-token" content="{{ csrf_token() }}"/>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <div className="flex">
                    <div className="bg-blue-400 w-12">
                      <FaRegUser
                        size={
                          20
                        }
                        color="white"
                        className="mx-auto mt-3"
                      />
                    </div>

                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                      className="bg-gray-50 border text-gray-900 border-gray-300  sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:placeholder-gray-400 outline-none hover:border-solid hover:border-2 hover:border-gray-400 "
                      placeholder="Username"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <div className="flex">
                    <div className="bg-blue-400 w-12">
                      <FaRegUser
                        size={
                          20
                        }
                        color="white"
                        className="mx-auto mt-3"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="bg-gray-50 border text-gray-900 border-gray-300  sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:placeholder-gray-400 outline-none hover:border-solid hover:border-2 hover:border-gray-400 "
                      placeholder="E-Mail Address"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <div className="bg-blue-400 w-12">
                      <GiPadlock
                        size={
                          20
                        }
                        color="white"
                        className="mx-auto mt-3"
                      />
                    </div>
                    {/* <PasswordApp /> */}
                    <div className="w-full  relative">
                      <div className="w-full">
                        <input
                          type={
                            open ===
                            false
                              ? "password"
                              : "text"
                          }
                          name="password"
                          id="password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          className="bg-gray-50 border text-gray-900 border-gray-300  sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white  dark:placeholder-gray-400 outline-none hover:border-solid hover:border-2 hover:border-gray-400"
                          placeholder="Password"
                          required=""
                        />
                      </div>
                      <div className="text-2xl absolute top-2 right-3">
                        {open ===
                        false ? (
                          <AiFillEye
                            onClick={
                              toggle
                            }
                          />
                        ) : (
                          <AiFillEyeInvisible
                            onClick={
                              toggle
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                

                <div className="flex items-center justify-between">
                  <Link to="/login">
                    <a className="text-sm font-medium text-primary-600 hover:underline text-gray-300">
                      Already
                      have
                      an
                      account?
                      <label className="text-blue-500 underline">
                        Login
                      </label>
                    </a>
                  </Link>
                </div>
                <div className="flex-1 text-right ">
                  <button
                    type="submit"
                    onClick={signUpHandler}
                    className="w-1/3 text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign
                    Up
                  </button>
                </div>
                <div className="flex justify-end"></div>
              </form>
            </div>
            {/* <PasswordApp /> */}
          </div>
        </div>
      </section>
    );
  };

export default SignUp;
