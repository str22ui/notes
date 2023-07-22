import React, { useState } from 'react';
import { useNavigate, Navigate, redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();


  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Login berhasil
      localStorage.setItem('token', data.token);
      navigate('/');
    } else {
      // Login gagal
      setError(data.message);
    }
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
          {error && <p>{error}</p>}
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
            
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
                    value={email} onChange={(e) => setEmail(e.target.value)}
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
                  {/* <PasswordApp /> */}
                  <div className="w-full relative">
                    <div className="w-full">
                      <input
                        type={open === false ? "password" : "text"}
                        name="password"
                        id="password"
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                        className="bg-gray-50 border text-gray-900 border-gray-300 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 outline-none hover:border-solid hover:border-2 hover:border-gray-400"
                        placeholder="Password"
                        required=""
                      />
                    </div>
                    <div className="text-2xl absolute top-2 right-3">
                      {open === false ? (
                        <AiFillEye onClick={toggle} />
                      ) : (
                        <AiFillEyeInvisible onClick={toggle} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <a className="text-sm font-medium text-primary-600  text-gray-300">
                  Forgot password?
                  <label className="text-blue-500 underline hover:text-md">Click here</label>
                </a>
              </div>
              <div className="flex-1 text-right ">
                <button
                  type="submit"
                  
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
          {/* <PasswordApp /> */}
        </div>
      </div>
    </section>
    
  );
};

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Navigate, redirect } from 'react-router-dom';
// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const handleLogin = () => {
//     axios
//       .post("http://localhost:8000/api/login", { email, password })
//       .then((response) => {
//         localStorage.setItem("token", response.data.token);
//         // Panggil fungsi onLogin untuk menandakan login berhasil
//         onLogin();
//         navigate('/');
//         console.log("berhasil"); // Tambahkan console.log('berhasil')
//         // Redirect to the main page or do other necessary actions upon successful login.
//       })
//       .catch((error) => {
//         console.error("Login failed:", error);
//         // Handle login failure (display error message, etc.).
//       });
//   };

//   return (
//     <div>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import Dash from "./components/Dash";
// import Notes from "./components/Notes";
// import Schedule from "./components/Schedule";
// import Journal from "./components/Journal";
// import FNotes from "./components/Micro/FNotes";
// import FSchedule from "./components/Micro/FSchedule";
// import FJournal from "./components/Micro/FJournal";
// import ENotes from "./components/Micro/ENotes";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Fungsi untuk melakukan login, bisa dipanggil dari komponen Login setelah login berhasil.
//   const handleLogin = () => {
//     // Lakukan proses login (misalnya dengan mengirim permintaan ke backend) dan set status login menjadi true.
//     setIsLoggedIn(true);
//   };

//   // Fungsi untuk melakukan logout, bisa dipanggil dari komponen lain setelah logout berhasil.
//   const handleLogout = () => {
//     // Lakukan proses logout (misalnya dengan mengirim permintaan ke backend) dan set status login menjadi false.
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <Router>
//         <Routes>
//           {/* Periksa apakah pengguna sudah login sebelum menampilkan halaman Dash */}
//           <Route
//             path="/"
//             element={isLoggedIn ? <Notes onLogout={handleLogout} /> : <Navigate to="/login" />}
//           />

//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/schedule" element={<Schedule />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/journal" element={<Journal />} />
//           <Route path="/fnotes" element={<FNotes />} />
//           <Route path="/fschedule" element={<FSchedule />} />
//           <Route path="/fjournal" element={<FJournal />} />
//           <Route path="/enotes" element={<ENotes />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
