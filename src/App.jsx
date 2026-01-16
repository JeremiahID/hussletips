import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import './css/bootstrap.css'
import './css/App.css'
import Home from "./Pages/Home";
// import Hero from "./components/Hero/Hero";
import PostPage from "./Pages/PostPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        {/* <Route path="/category/:slug" element={<CategoryPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;