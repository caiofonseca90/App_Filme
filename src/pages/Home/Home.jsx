import TopFilms from "../../components/Top-Films/TopFilms";
import {CiSearch} from "react-icons/ci"
import topology from "vanta/src/vanta.topology"
import { useEffect } from "react";

// url da api = https://api.themoviedb.org/3/movie/now_playing?api_key=735b806197882cc17916e308599461e7

const Home = () => {
  // const imgUrl = 'https://github.com/caiofonseca90/App_Filme/blob/main/src/assets/img/bg-edit.png?raw=true'
  useEffect(()=>{
    topology({
      el:".vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600.00,
      minWidth: 600.00,
      scale: 2.00,
      scaleMobile: 1.00,
      color: 0xfaae0d,
      backgroundColor: 0x151616
    })
  },[])
  
  return (
    <div>
      <div className="custom-home">
        <header className=" vanta flex flex-col justify-evenly p-3 sm:p-8 mb-5 overflow-hidden input-shadow h-[35vh] ">
          <div className="">
            <h1 className="text-neutral-100 text-shadow text-[1.5rem] lg:text-[3rem] font-extrabold">Bem-Vindo(a)</h1>
            <span className="text-neutral-300 text-shadow text-[1.3rem] lg:text-[2rem] font-bold">Explore séries e filmes.</span>
          </div>
          <div className="relative"> 
            <input className="custom-header-banner-input" type="text" placeholder="Busque seu filme aqui." />
            <button className="custom-header-banner-btn-search"><CiSearch /></button>
          </div>
        </header>
        <TopFilms className = "z-10" />
      </div>
    </div>
  )
}

export default Home;
