import axios from "axios";
// API KEY = api_key=735b806197882cc17916e308599461e7

// base_url: https://api.themoviedb.org/3/
// url da api = https://api.themoviedb.org/3/movie/now_playing?api_key=735b806197882cc17916e308599461e7
// url da api = movie/now_playing?api_key=735b806197882cc17916e308599461e7

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;