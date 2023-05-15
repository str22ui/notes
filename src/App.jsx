import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Notes />
            }
          />

          <Route
            path="/schedule"
            element={
              <Schedule />
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp />
            }
          />
          <Route
            path="/journal"
            element={
              <Journal />
            }
          />
          <Route
            path="/fnotes"
            element={
              <FNotes />
            }
          />
          <Route
            path="/fschedule"
            element={
              <FSchedule />
            }
          />
          <Route
            path="/fjournal"
            element={
              <FJournal />
            }
          />
        </Routes>
      </Router>

      {/* <Dash />
      <Notes /> */}
    </div>
  );
}

export default App;
