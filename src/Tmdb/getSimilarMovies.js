import axios from "axios";

const req = async (query) => {
    console.log("Similiar movies with query: " + query);
    return await axios
        .get(
            `https://api.themoviedb.org/3/movie/${query}/similar?api_key=7137c0321a1d4728e09e27b128736215&language=en-US&page=1`
        )
        .then((res) => res.data);
};

export default req;
