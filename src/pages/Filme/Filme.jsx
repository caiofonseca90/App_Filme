import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import Loading from "../../components/Loading/Loading";
import ProgressBar from "../../components/ProgressBar/ProgressBar";


const Filme = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true); 
 
  const percentMovie = (movie.vote_count / movie.popularity) * 100
  
  
  useEffect(() => { 
    async function loadFilme(){
      await api.get(`/movie/${id}` ,{
        params:{
          api_key:"735b806197882cc17916e308599461e7",
          language: "pt-BR"
        }
      })
      .then((response) =>{
        setMovie(response.data)
        setLoading(false);
      })
      .catch(()=>{
        console.log('FILME ERRADO')
      })
    } 

    loadFilme();
     
    
    // return () =>{
    //   console.log('COMPONENTE DESMONTADO')
    // }

  }, [])

  if (loading) {
    return(
      <Loading />
    )
  }

  return (
    
    <div className="custom-movie-page">
      {/* banner movie */}
      <img className="rounded-xl  "src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
      
      <div className=" mx-1 flex flex-col gap-3 mt-5 mx-2">
        {/* title movie */}
        <div className="flex flex-wrap justify-center text-center gap-2">
          <span className="custom-movie-name">{movie.title}</span>
          <span className="custom-movie-date"> ({movie.release_date.slice(0,4)}) </span>     
        </div>
        
        {/* qtd vote */}
        <div className="flex flex-row justify-between mt-5 mx-3 ">
          <div className="flex flex-col gap-3 pt-5">
            <span>Popular:{movie.popularity}</span>  
            <span>Votos:{movie.vote_count}</span>  
            <span>Aprovação: {movie.vote_average.toFixed(1)}</span>  
          </div>
          <div className="relative  rounded-xl">
            <ProgressBar percent ={percentMovie.toFixed(1)}/>
          </div>
          
        </div>
        
        {/* sinopse */}
        <div>
          <h3 className="text-[1.2rem] font-extrabold mt-5 mb-5">Sinopse</h3>
          <span className="custom-atributes-movie">{movie.overview}</span>    
        </div>
        
      </div>
      
      
    </div>
    
  )
}

export default Filme;

