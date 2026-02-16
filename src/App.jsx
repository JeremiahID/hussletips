import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './css/bootstrap.css'
import './css/App.css'
import Home from "./Pages/Home";
import EntreprenuerPage from "./Pages/entreprenuer/EntreprenuerPage";
import EntrepreneurPagePost from "./data/entreprenuerpagepost";
import DigitalPostPage from "./Pages/PostPages/DigitalPostPage";
import EntreprenuerPostPage from "./Pages/PostPages/EntreprenuerPostPage";
import DigitalMarketingPage from "./Pages/DigitalMarketing/DigitalMarketingPage";
// import DigitalMarkertingPagePost from "./data/digitalmakertingposts"
import DM from "./data/digitalmakertingpageposts"
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
        <Route path="/digitalmakerting-post/:id" element={<DigitalPostPage />} /> 
        <Route path="/entreprenuer-post/:id" element={<EntreprenuerPostPage />} />
        <Route path="/entreprenuer" element={<EntreprenuerPage posts={EntrepreneurPagePost} header = {'Entreprenuer'} />} />
        <Route path="/digitalmarketing" element={<DigitalMarketingPage posts={DM} />} />
      </Routes>
    </Router>
  );
}

export default App;