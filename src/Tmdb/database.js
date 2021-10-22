import axios from "axios";

const key = "7137c0321a1d4728e09e27b128736215";
const base = "https://api.themoviedb.org/3";

const fetchApi = async (url) => {
    return await axios
        .get(`${base}${url}`)
        .then((res) => res.data)
        .catch((err) => console.log("error: " + err));
};

export default {
    getList: async () => {
        return [
            {
                slug: "Comedy",
                title: "Comédia",
                dados: await fetchApi(
                    `/discover/movie?api_key=${key}&with_genres=35`
                ),
            },
            {
                slug: "Action",
                title: "Ação",
                dados: await fetchApi(
                    `/discover/movie?api_key=${key}&with_genres=28`
                ),
            },
            {
                slug: "Top rated",
                title: "Em alta",
                dados: await fetchApi(`/movie/top_rated?&api_key=${key}`),
            },
            {
                slug: "Thriller",
                title: "Suspense",
                dados: await fetchApi(
                    `/discover/movie?api_key=${key}&with_genres=53`
                ),
            },
            {
                slug: "Romance",
                title: "Romance",
                dados: await fetchApi(
                    `/discover/movie?api_key=${key}&with_genres=10749`
                ),
            },
            {
                slug: "Sci-Fi",
                title: "Ficção científica",
                dados: await fetchApi(
                    `/discover/movie?api_key=${key}&with_genres=878`
                ),
            },
            {
                slug: "Kids",
                title: "Para a família",
                dados: await fetchApi(
                    `/discover/movie?api_key=${key}&with_genres=10751`
                ),
            },
        ];
    },
};
