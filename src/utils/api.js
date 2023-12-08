import axios from "axios";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "9280778fc5e92f83f6a82dcf6bcf90e8";

const fetchDataFromApi = axios.create({
    baseURL: TMDB_BASE_URL,
});

fetchDataFromApi.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params["api_key"] = TMDB_API_KEY;
    return config;
});

export default fetchDataFromApi;
