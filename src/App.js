import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import GuideSignup from "./pages/GuideSignup";
import Coimbatore from "./pages/Coimbatore";
import CitySelect from "./pages/CitySelect";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/guide-signup" element={<GuideSignup />} />
          <Route path="/coimbatore" element={<Coimbatore />} />
          <Route path="/city-select" element={<CitySelect />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
