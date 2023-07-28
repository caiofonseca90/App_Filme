// import { useEffect, useState } from "react";

import TopFilms from "../../components/Top-Films/TopFilms";

// url da api = https://api.themoviedb.org/3/movie/now_playing?api_key=735b806197882cc17916e308599461e7

const Home = () => {
  return (
    
    <div>
      <div className="custom-home">
        <header className="custom-header-banner">
          <div className="custom-header-banner-text">
            <h1 className="text-[1.3rem] sm:text-[2rem] lg:text-[2.5rem] text-blue-100 ">Bem-Vindo</h1>
            <span className="text-[1.3rem] sm:text-[2rem] lg:text-[2.5rem] ">Series, Filmes e muito mais</span>
          </div>
          <img className="custom-header-banner-img" src="/src/assets/img/bg-edit.png" alt="img-banner" />
          <div className="custom-header-banner-container-input"> 
            <input className="custom-header-banner-input" type="text" placeholder="Busque seu filme aqui" />
          </div>
        </header>

      <TopFilms />
      
      </div>
    </div>
  
  )
}

export default Home;
