import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import api from "../../services/api";

import Loading from "../../components/Loading/Loading";

const TopFilms = () => {
    const [moviesCine, setMoviesCine] = useState([]);
  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilms() {
        const response = await api.get("movie/popular", {
            params:{
            api_key:"735b806197882cc17916e308599461e7",
            language:"pt-BR",
            page: 1,
            }
        })
        setMoviesCine(response.data.results.slice(0,20));
        
        }

        loadFilms();
        setLoading(false);

    }, [])

    useEffect(() => {
        // Simulando um tempo de carregamento
        setTimeout(() => {
          setLoading(false);
        }, 3500);
      }, []);
      
  return (
    <div className=" rounded-2xl px-2 py-2 ">
    <h1 className="custom-title-home">Top Filmes nos Cinemas</h1>
    {/* conteudo-section-tendencias */}
    <div className="mb-20 overflow-y-hidden mx-[1rem]">
      {loading ? (
        <Loading />
      ) : (
        // section-top10
      <section className="pb-16 w-[120vw]">
        {/* Conteúdo da section */}
        <div className="flex gap-3">
          {moviesCine.map((movie) =>{
            return(
              <article key={movie.id} className="flex flex-col">
                <Link className="custom-link-picture"to={`/filme/${movie.id}`}>
                  <img className="custom-img-movie"src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />  
                </Link>
                <Link className="custom-link-movies" to={`/filme/${movie.id}`}>{movie.title}</Link>
                <span className="custom-data-movie">{movie.release_date}</span>     
              </article>
            )
          })}
       </div>
      </section>
      )}
    </div>
  </div>
  )
}

export default TopFilms;