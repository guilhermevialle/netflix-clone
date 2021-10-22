import axios from "axios";

const req = async (query) => {
    return await axios
        .get(
            "https://api.themoviedb.org/3/search/movie?api_key=7137c0321a1d4728e09e27b128736215&query=" +
                query
        )
        .then((res) => res.data);
};

export default req;
