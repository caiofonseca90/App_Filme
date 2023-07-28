import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home"
import Filme from "./pages/Filme/Filme"
import Header from "./components/Header/Header";
import Erro from "./components/Error/Erro";



function RouteApp(){
    return(
        <BrowserRouter>
            <Header />
            
                <Routes>
                    <Route path="/Home" element = {<Home />}/>
                    <Route path="/filme/:id" element = {<Filme />}/>

                    <Route path="*" element = {<Erro />} />
                </Routes>
                
        </BrowserRouter>
    )
}

export default RouteApp;