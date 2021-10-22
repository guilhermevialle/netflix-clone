import axios from "axios";

const req = async (query) => {
    console.log("Cast of movie: " + query);
    return await axios
        .get(
            `https://api.themoviedb.org/3/movie/${query}/credits?api_key=7137c0321a1d4728e09e27b128736215&language=en-US`
        )
        .then((res) => res.data);
};

export default req;
