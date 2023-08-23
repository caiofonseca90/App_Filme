import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";



const Allmovies = () => {
    const [moviesCine, setMoviesCine] = useState([]);
    let pages = 0
    async function loadFilms() {
        const response = await api.get("movie/now_playing", {
              params:{
              api_key:"735b806197882cc17916e308599461e7",
              language:"pt-BR",
              page: pages +1
            }
        })
        setMoviesCine(response.data.results.slice(0,20));
        setMoviesCine(response.data.results);
        }
        loadFilms();

  return (
    <div className="  md:max-w-[50rem] lg:max-w-[80rem] mt-[9rem] m-auto p-4 flex items-center">
        <section className="pb-2 m-3 ">
        {/* Conteúdo da section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
          {moviesCine.map((movie) =>{
            return(
                <article key={movie.id} className="flex flex-col shadow-md w-full">
                    <Link className="h-[350px] w-full"to={`/filme/${movie.id}`}>
                        <img className="custom-img-movie"src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />  
                    </Link>
                    <Link className="text-center text-[1rem] text-yellow-600 font-bold mt-6" to={`/filme/${movie.id}`}>{movie.title}</Link>
                    <span className="text-center text-[.8rem] text-yellow-400 font-bold ">{`(${movie.release_date.slice(0,4)})`}</span>     
                </article>
            )
        })}
        
       </div>
       <div className="flex flex-row justify-between mx-2 text-white font-extrabold mt-[4rem] ">
            <span className=" cursor-pointer hover:text-slate-400">Voltar</span>
            <span>{pages++}</span>
            <span className=" cursor-pointer hover:text-slate-400">Next page</span>
        </div>
      </section>
    </div>
    
  )
}

export default Allmovies