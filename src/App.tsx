import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />}/>
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
