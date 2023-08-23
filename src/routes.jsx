import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home"
import Filme from "./pages/Filme/Filme"
import Favorites from "./pages/Favorites/Favorites"
import Header from "./components/Header/Header";
import Erro from "./components/Error/Erro";
import Allmovies from "./pages/Allmovies/Allmovies";


function RouteApp(){
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element = {<Home />}/>
                    <Route path="/Filme/:id" element = {<Filme />}/>
                    <Route path="/Favoritos" element = {<Favorites />}/>
                    <Route path="/Allmovies" element = {<Allmovies/>} />
                    
                    <Route path="/" element = {<Erro />} />
                </Routes>
        </BrowserRouter>
    )
}

export default RouteApp;