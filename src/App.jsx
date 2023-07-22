import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dash from "./components/Dash";
import Notes from "./components/Notes";
import Schedule from "./components/Schedule";
import Journal from "./components/Journal";
import FNotes from "./components/Micro/FNotes";
import FSchedule from "./components/Micro/FSchedule";
import FJournal from "./components/Micro/FJournal";
import ENotes from "./components/Micro/ENotes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fungsi untuk melakukan login, bisa dipanggil dari komponen Login setelah login berhasil.
  const handleLogin = () => {
    // Lakukan proses login (misalnya dengan mengirim permintaan ke backend) dan set status login menjadi true.
    setIsLoggedIn(true);
  };

  // Fungsi untuk melakukan logout, bisa dipanggil dari komponen lain setelah logout berhasil.
  const handleLogout = () => {
    // Lakukan proses logout (misalnya dengan mengirim permintaan ke backend) dan set status login menjadi false.
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Router>
        <Routes>
          {/* Periksa apakah pengguna sudah login sebelum menampilkan halaman Dash */}
          <Route
            path="/"
            element={isLoggedIn ? <Dash onLogout={handleLogout} /> : <Navigate to="/login" />}
          />

          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/fnotes" element={<FNotes />} />
          <Route path="/fschedule" element={<FSchedule />} />
          <Route path="/fjournal" element={<FJournal />} />
          <Route path="/enotes" element={<ENotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
