import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlinePlus, AiOutlinePlayCircle} from "react-icons/ai"

import api from "../../services/Api";
import Loading from "../../components/Loading/Loading";
import ProgressBar from "../../components/ProgressBar/ProgressBar";


const Filme = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true); 
  const percentMovie = (movie.vote_average ) 
  
  useEffect(() => { 
    async function loadFilme(){
      await api.get(`/movie/${id} `  ,{
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
        navigate("/Home", {replace:true});
        return;
      })
    }
    loadFilme();
    
  }, [navigate, id])

  function plusFilms(){
    const mineList = localStorage.getItem("@CineFLix");
    let filmsSave =  JSON.parse(mineList) || [];

    const hasFilms = filmsSave.some( (filmsSave) => filmsSave.id === movie.id )

    // se o filme ja estiver salvo, impede que seja salvo novamente
    if(hasFilms){
      alert('Filme ja está na lista');
      return;
    }

    // verifica se o item nao está na lista, e salva
    filmsSave.push(movie);
    localStorage.setItem("@CineFLix", JSON.stringify(filmsSave));
    alert("Filme salvo com sucesso!")
  }

  if (loading) {
    return(
      <Loading />
    )
  }

  return (
    <div className="custom-filmes-div shadow-films">
      {/* banner movie */}
      <img className="custom-img-poster"src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
      <div className="relative flex flex-col ">
      
      {/* <img className=" absolute opacity-20 h-full w-full right-0 "src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} /> */}
        <section className="custom-section-filmes">
          {/* img poster */}
          <img className="custom-img-filme"src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
          {/* status-filme */}
          <div className="w-screen md:w-[50rem] flex flex-col mt-10 mx-2 ">
            <div className="flex flex-wrap items-center gap-2 ">
              <span className="custom-titles-films">{movie.title}</span>
              <span className="custom-date-films"> ({movie.release_date.slice(0,4)}) </span>     
            </div>

            <div className="rounded-xl flex text-neutral-300 text-shadow">
              <div className="flex flex-wrap py-2 items-center gap-2">
                <ProgressBar percent={percentMovie.toFixed(1)}  />
                <span className="custom-average-films">Avaliação dos usuarios</span>
                <span onClick={plusFilms} className="custom-icon-add"><AiOutlinePlus /></span>
                <a target="_blank" 
                rel="noreferrer"
                href={`http://youtube.com/results?search_query=${movie.title} Trailer`}
                className="custom-icon-trailler"><AiOutlinePlayCircle /></a>
                <span className="custom-text-trailler">Assistir Trailer</span>
                <div className=" mx-3 mt-5 text-white text-shadow ">
                  <h3 className="custom-sinopse-h3">Sinopse</h3>
                  <span className="custom-sinopse-span">{movie.overview}</span>    
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="border">
        <span className="custom-titles-films">{movie.person}</span>
        </section> */}
      </div>
    </div>
    
    
  )
}

export default Filme;

