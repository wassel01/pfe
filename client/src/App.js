import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBare } from "./components/NavBare";
import { ChifreDaifaireGlobal } from "./components/ChifreDafaireGlobal";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SingUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/user/:id"
            element={
              <>
                <NavBare />
                <Profile />
              </>
            }
          />
          <Route
            path="/chiffre d'affaire globale"
            element={
              <>
                <NavBare />
                <ChifreDaifaireGlobal />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
