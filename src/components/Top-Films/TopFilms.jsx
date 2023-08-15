import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import api from "../../services/Api";
import Loading from "../../components/Loading/Loading";

const TopFilms = () => {
    const [moviesCine, setMoviesCine] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        async function loadFilms() {
        const response = await api.get("movie/now_playing", {
            params:{
            api_key:"735b806197882cc17916e308599461e7",
            language:"pt-BR",
            page: 1
            }
        })
        setMoviesCine(response.data.results.slice(0,40));
        setMoviesCine(response.data.results);
        console.log(response.data.results.slice(0,20))
        console.log(response.data.total_pages)
        
        }

        loadFilms();
        setLoading(false);

    }, []);
   
    useEffect(() => {
        // Simulando um tempo de carregamento
        setTimeout(() => {
          setLoading(false);
        }, 5500);
      }, []);


    
      
  return (
    <div className="rounded-2xl lg:shadow-r-home ">
    <h1 className="custom-title-home">Top Filmes nos Cinemas</h1>
    <div className="overflow-y-hidden">
      {loading ? (
        <Loading />
      ) : (
        // section-top10
      <section className="pb-2 m-3 w-full">
        {/* Conteúdo da section */}
        <div className="flex gap-3">
          {moviesCine.map((movie) =>{
            return(
              <article key={movie.id} className="flex flex-col mx-1">
                <Link className="custom-link-picture"to={`/filme/${movie.id}`}>
                  <img className="custom-img-movie"src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />  
                </Link>
                <Link className="custom-link-movies" to={`/filme/${movie.id}`}>{movie.title}</Link>
                <span className="custom-data-movie">{`(${movie.release_date.slice(0,4)})`}</span>     
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
