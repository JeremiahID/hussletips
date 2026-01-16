import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './css/bootstrap.css'
import './css/App.css'
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage";
import Navbar from "./components/Navbar/Navbar";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        {/* <Route path="/category/:slug" element={<CategoryPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;