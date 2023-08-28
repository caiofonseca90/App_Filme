import { useState, useEffect } from "react";
import {BiFirstPage,BiLastPage} from "react-icons/bi"
import { Link } from "react-router-dom";
import api from "../../services/Api";

const Allmovies = () => {
    const [moviesCine, setMoviesCine] = useState([]);
    const [pageAtual, setPageAtual] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(["now_playing"]); // Inicialmente, a categoria 'now_playing'

    async function loadFilms(page,category) {
      category = selectedCategory
      page = pageAtual
      const response = await api.get(`movie/${category}`, {
          params:{
          api_key:"735b806197882cc17916e308599461e7",
          language:"pt-BR",
          page:page,
        },
      });
      setMoviesCine(response.data.results.slice(0,20));
      setTotalPages(response.data.total_pages);
    }
      // carrega a pagina de acordo com o set de filmes
    useEffect(() => {
      loadFilms(pageAtual, selectedCategory);
      setTotalPages()
    }, [pageAtual, selectedCategory]);
    
    // função de add página
    const goToPreviousPage = () => {
      if (pageAtual > 1) {
        setPageAtual(pageAtual - 1);
      }
    };
  // função de rmv página
    const goToNextPage = () => {
      if (pageAtual < totalPages) {
        setPageAtual(pageAtual + 1);
      }
    };
    // seleciona a categoria
    const changeCategory = (newCategory) => {

      setSelectedCategory(newCategory);
      setPageAtual(1); // Reset para a primeira página quando a categoria muda
    };
    
  return (
    <div className="custom-all-movies-section ">
       <div className="flex flex-wrap sm:flex-row justify-center gap-5 sm:gap-10 mx-4 text-yellow-700 sm:text-[1.5rem] font-extrabold mb-[5rem]">
          {/* Seleção de categoria */}
          <span className={`custom-all-movies-menu ${selectedCategory === 'now_playing' ? 'text-yellow-400' : ''}`} onClick={() => changeCategory('now_playing')}>+ Assistidos</span>
          <span className={`custom-all-movies-menu ${selectedCategory === 'popular' ? 'text-yellow-400' : ''}`}     onClick={() => changeCategory('popular')}>+ Populares</span>
          <span className={`custom-all-movies-menu ${selectedCategory === 'top_rated' ? 'text-yellow-400' : ''}`}   onClick={() => changeCategory('top_rated')}>+ Votados</span>
          <span className={`custom-all-movies-menu ${selectedCategory === 'upcoming' ? 'text-yellow-400' : ''}`}    onClick={() => changeCategory('upcoming')}>Em breve</span>
        </div>
        <section className="pb-2 m-3 ">
        {/* Conteúdo da section */}
        <div className="custom-all-movies-grid ">
          {moviesCine.map((movie) =>{
            return(
              <article key={movie.id} className="flex flex-col shadow-2xl  ">
                <Link className=" m-auto  h-[330px]"to={`/filme/${movie.id}`}>
                    <img className="custom-img-movie"src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />  
                </Link>
                <Link className="text-center text-[1rem] text-yellow-600 font-bold mt-6" to={`/filme/${movie.id}`}>{movie.title}</Link>
                <span className="text-center text-[.8rem] text-yellow-400 font-bold ">{`(${movie.release_date.slice(0,4)})`}</span>     
              </article>
            )
        })}
        
       </div>
       <div className="flex flex-row justify-evenly mx-2 text-yellow-600 font-extrabold mt-[4rem] ">
          <BiFirstPage 
          onClick={goToPreviousPage} 
          className="cursor-pointer hover:text-yellow-400 text-[1.5rem] sm:text-[2rem]"/>
          {/* <span >Voltar</span> */}
          <span> {pageAtual} de {totalPages}</span> 
          <BiLastPage 
          onClick={goToNextPage} 
          className="cursor-pointer hover:text-yellow-400 text-[1.5rem] sm:text-[2rem]"/>
        </div>
      </section>
    </div>
    
  )
}

export default Allmovies

