import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './css/bootstrap.css'
import './css/App.css'
import Home from "./Pages/Home";
import EntreprenuerPage from "./Pages/entreprenuer/EntreprenuerPage";
import DigitalPostPage from "./Pages/PostPages/DigitalPostPage";
import EntreprenuerPostPage from "./Pages/PostPages/EntreprenuerPostPage";
import EntrepreneurPagePost from "./data/entreprenuerpagepost";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/digital-post/:id" element={<DigitalPostPage />} /> 
        <Route path="/entreprenuer-post/:id" element={<EntreprenuerPostPage />} />
        <Route path="/entreprenuer" element={<EntreprenuerPage posts={EntrepreneurPagePost} header = {'Entreprenuer'} />} />
      </Routes>
    </Router>
  );
}

export default App;