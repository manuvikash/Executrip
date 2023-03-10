import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import GuideSignup from "./pages/GuideSignup";
import Coimbatore from "./pages/Coimbatore";
import Chennai from "./pages/Chennai";
import Madurai from "./pages/Madurai";
import Kanyakumari from "./pages/Kanyakumari";
import CitySelect from "./pages/CitySelect";
import WhyUs from "./pages/WhyUs";
import ShortlistedGuides from "./pages/ShortlistedGuides";
import Discover from "./pages/Discover";
import BookingPage from "./pages/BookingPage";
import BookingHistory from "./pages/BookingHistory";
import Settings from "./pages/Settings";
// import BookConf from "./pages/BookConf";
function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/guide-signup" element={<GuideSignup />} />
          <Route path="/coimbatore" element={<Coimbatore />} />
          <Route path="/chennai" element={<Chennai />} />
          <Route path="/madurai" element={<Madurai />} />
          <Route path="/kanyakumari" element={<Kanyakumari />} />
          <Route path="/city-select" element={<CitySelect />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/shortlistedguides" element={<ShortlistedGuides />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/bookinghistory" element={<BookingHistory />} />
          <Route path="/settings" element={<Settings />} />

          {/* <Route path="/book-conf" element={<BookConf />} /> */}
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
