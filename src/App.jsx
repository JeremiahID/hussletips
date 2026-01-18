import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './css/bootstrap.css'
import './css/App.css'
import Home from "./Pages/Home";
import EntreprenuerPage from "./Pages/entreprenuer/EntreprenuerPage";
import DigitalPostPage from "./Pages/PostPages/DigitalPostPage";
import EntrepreneurPagePost from "./data/entreprenuerpagepost";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-post/:id" element={<DigitalPostPage />} />
        <Route path="/entreprenuer" element={<EntreprenuerPage posts={EntrepreneurPagePost} />} />
      </Routes>
    </Router>
  );
}

export default App;