import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Individual_donation from "./pages/Individual_donation";
import Family_donation from "./pages/Family_donation";
import Cow_adoption from "./pages/Cow_adoption";
import Calf_adoption from "./pages/Calf_adoption";
import Custom_amount from "./pages/custom_amount";
import Gau_daan from "./pages/Gau_daan";
import Feed_fodder from "./pages/Feed_fodder";
import Individual_donation_form from "./forms/Individual_donation_form";
import Login from "./pages/Login";
import Help from "./pages/Help";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";









function App() {
  return (
    <main main className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/individual_donation" element={<Individual_donation/>} />
          <Route path="/family_donation" element={<Family_donation/>} />
          <Route path="/cow_adoption" element={<Cow_adoption/>} />
          <Route path="/calf_adoption" element={<Calf_adoption/>} />
          <Route path="/custom_amount" element={<Custom_amount/>} />
          <Route path="/gau_daan" element={<Gau_daan/>} />
          <Route path="/feed_fodder" element={<Feed_fodder/>} />
          <Route path="/individual_donation_form" element={<Individual_donation_form/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/help" element={<Help/>} />

        
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
export default App;


