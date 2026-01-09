import Header from "./components/Header";
import Home from "./project/Home";
import About from "./project/About";
import Explore from "./project/Explore";
import MovieDetail from "./project/DetailMovies";
import Scroll from "./components/scroll";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-800 dark:bg-white">
      <Scroll />
      <Header /> {/* Header outside Routes, always visible */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/MovieDetail/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
