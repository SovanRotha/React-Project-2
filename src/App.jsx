import Header from "./components/Header";
import Home from "./project/Home";
import About from "./project/About";
import {Routes, Route} from "react-router-dom";
import Explore from "./project/Explore";
import MovieDetail from "./project/DetailMovies";
import Scroll from "./components/scroll";

function App()
{
  return(
    <>
      <div className="bg-gray-800 dark:bg-white">
        <Scroll/>
         
         <Routes>
          <Header/>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Explore" element={<Explore/>}></Route>
            <Route path="/MovieDetail/:id" element={<MovieDetail/>}></Route>
         </Routes>
      </div>
    </>
   
  );
}
export default App;