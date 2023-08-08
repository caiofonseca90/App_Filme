import { useState, useEffect  } from "react"
import {Link} from "react-router-dom";
import NotFound from "../../components/FilmeNotFound/NotFound";
import Loading from "../../components/Loading/Loading";


const Favorites = () => {
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        const mineList = localStorage.getItem("@CineFLix");
        setMovie(JSON.parse(mineList) || [])
        
    },[])

    function removeMovie(id){
        let filterMovies = movie.filter((item) =>{
            return (item.id !== id)
        })
        setMovie(filterMovies);
        localStorage.setItem("@CineFLix", JSON.stringify(filterMovies))
    }

    return (
        <div className="text-white lg:mt-[8rem] mt-20 mx-5 lg:m-auto lg:max-w-[40vw] text-shadow">

            {movie.length === 0 && <NotFound />  || <h1 className="font-extrabold text-neutral-300 text-[1.4rem] lg:text-[2rem] shadow-sm ">Lista de Filmes Favoritos</h1>}
            
            <ul className="mt-10 flex w-[80%] justify-around flex-col ">
               {movie.map((item) =>{
                return(
                    <li key={item.id} 
                        className="flex justify-between items-center p-1 ">
                        <div className="flex items-center gap-3 text-shadow">
                            <img className="h-[6rem] lg:h-[10rem] rounded-lg shadow-md opacity-80 hover:opacity-100"src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={movie.title} />
                            <div className="flex flex-col gap-2 ">
                                <span className=" text-neutral-400 text-[.8rem] lg:text-[1.2rem]">{item.title}</span>
                                <Link className="text-blue-200 text-[.8rem] lg:text-[1.2rem] hover:text-blue-400 duration-100" to={`/filme/${item.id}`}>Ver Detalhes</Link>
                                <button onClick={() => removeMovie(item.id)} className="text-shadow border-none text-[.9rem] lg:text-[1.2rem] rounded-md w-[5rem] font-bold lg:w-[6rem] py-1 bg-slate-500 shadow-sm hover:bg-slate-700 duration-100">Excluir</button>
                            </div>
                        </div>
                    </li>
                )
                })} 
            </ul>

        </div>
    )
}

export default Favorites