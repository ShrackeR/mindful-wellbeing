import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navigation";
import Login1 from "../src/components/Login1";
import SignUp from "./components/Signup";
import Api from "./pages/Api";
import Quiz from "./pages/Quiz";
import Profile from "./pages/Profile";
import DepressionRemediesPage from "./remedies/Depression";
import AnxietyRemediesPage from "./remedies/Anxiety";
import StressRemediesPage from "./remedies/Stress";
import OCDRemediesPage from "./remedies/Ocd";
import PhobicAnxietyRemediesPage from "./remedies/Phobic";
import ParanoidIdeationRemediesPage from "./remedies/Paranoid";
import InterpersonalSensitivityRemediesPage from "./remedies/Inter";
import PsychoticismRemediesPage from "./remedies/Psycho";
import Remedies from "./pages/Remedies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div className="pages"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login1 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/api" element={<Api />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/remedies" element={<Remedies />} />
          <Route path="/depression" element={<DepressionRemediesPage />} />
          <Route path="/anxiety" element={<AnxietyRemediesPage />} />
          <Route path="/stress" element={<StressRemediesPage />} />
          <Route path="/ocd" element={<OCDRemediesPage />} />
          <Route path="/phobic" element={<PhobicAnxietyRemediesPage />} />
          <Route path="/paranoid" element={<ParanoidIdeationRemediesPage />} />
          <Route
            path="/inter"
            element={<InterpersonalSensitivityRemediesPage />}
          />
          <Route path="/psycho" element={<PsychoticismRemediesPage />} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
