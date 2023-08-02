import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllChicken } from "./services/chicken-service";
import ChickenList from "./components/ChickenList/ChickenList";
import ChickenPage from "./components/ChickenPage/ChickenPage";
import { Carousal } from "./components/Carousel/Carousal";
// import { Carousel } from "./components/Carousel/Carousel";
import AddToCart from "./components/AddToCart/AddToCart";

function App() {
  const [chickens, setChickens] = useState([]);

  useEffect(() => {
    getAllChicken()
      .then((chickenData) => setChickens(chickenData))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Carousal/>
      <Routes>
        <Route path="/" element={<ChickenList chickens={chickens} />} />
        {/* <Route path='/movies' element={<LiveMovieList/>} /> */}
        <Route path="/:id" element={<ChickenPage />} />
        <Route path="/cart" element={<AddToCart/>}/>
        {/* <Route path='/movies/new' element={<NewMovieForm/>} />
         */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
