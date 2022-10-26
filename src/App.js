import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import GuideSignup from "./pages/GuideSignup";
import GuideCards from "./pages/GuideCards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/guide-signup" element={<GuideSignup />} />
          <Route path="/guides" element={<GuideCards />} />
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
