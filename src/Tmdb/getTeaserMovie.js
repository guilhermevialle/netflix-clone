import generateRandomInteger from "../components/tools/getRandomValues";
import axios from "axios";

const req = () => {
    let page = generateRandomInteger(500);

    return axios
        .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=7137c0321a1d4728e09e27b128736215&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=" +
                page
        )
        .then((res) => {
            return res.data.results[
                generateRandomInteger(res.data.results.length)
            ];
        });
};

export default req;
