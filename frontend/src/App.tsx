import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./component/HeroSection";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Prices from "./pages/Prices";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout principal */}
        <Route path="/" element={<HeroSection />}>
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/prix" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
