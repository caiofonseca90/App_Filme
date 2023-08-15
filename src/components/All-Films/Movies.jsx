import { useState, useEffect } from "react";
import api from "../../services/Api"

const Movies = () => {
    const [moviesCine, setMoviesCine] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadFilms() {
        const response = await api.get("movie/now_playing", {
            params:{
            api_key:"735b806197882cc17916e308599461e7",
            language:"pt-BR",
            page:1 
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
        }, 5500);
      }, []);
  return (
    <div>

    </div>
  )
}

export default Movies