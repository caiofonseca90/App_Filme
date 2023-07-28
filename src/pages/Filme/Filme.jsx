import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

const Filme = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const [loading, setLoading] = useState(true); 

  useEffect (()=>{
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
      <div className="border bg-black text-white mt-28">
        <h1 className="text-white">CARREGANDO DETALHE</h1>
      </div>
    )
  }

  return (
    
    <div className="custom-movie-page">
      {/* banner movie */}
      <img className=""src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
      <div className=" mx-1 flex flex-col gap-3 mt-3">
        {/* title movie */}
        <span className=" text-[1.4rem] text-yellow-200">{movie.title}</span>
        {/* qtd vote */}
        <div className="flex justify-between mb-3">
          <span className="  text-sm text-[1.2rem]  text-yellow-300">{Math.floor(movie.vote_count)}</span>     
          <span className="  text-sm text-[1.2rem]  text-yellow-300">{Math.floor(movie.vote_average)}/10</span>    
        </div>
        <span className="  text-sm text-[1.2rem]  text-yellow-300">Data de estréia: {movie.release_date}</span>     
        <div className="  text-sm text-[1.2rem]  text-yellow-300">Data de estréia: {movie.video}</div>     
        
        {/* sinopse */}
        <span className="font-sans text-yellow-50">{movie.overview}</span>    
      </div>
      
      
    </div>
    
  )
}

export default Filme;
