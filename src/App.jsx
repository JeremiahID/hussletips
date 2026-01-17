import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './css/bootstrap.css'
import './css/App.css'
import Home from "./Pages/Home";
import EntreprenuerPage from "./Pages/entreprenuer/EntreprenuerPage";
import PostPage from "./Pages/PostPage";
import EntrepreneurPagePost from "./data/entreprenuerpagepost";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/entreprenuer" element={<EntreprenuerPage posts={EntrepreneurPagePost} />} />
      </Routes>
    </Router>
  );
}

export default App;