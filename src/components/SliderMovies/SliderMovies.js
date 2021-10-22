import database from "../../Tmdb/database";
import { useState, useEffect } from "react";
import SliderBox from "./SliderBox";

const SliderMovies = () => {
    const [movies, setMovies] = useState(null);
    console.log("SliderMovies");

    useEffect(() => {
        const load = async () => {
            var list = await database.getList();
            setMovies(list);
        };

        load();
    }, []);

    return movies
        ? movies.map((m, si) => {
              return <SliderBox movie={m} sliderIndex={si} />;
          })
        : "loading...";
};

export default SliderMovies;
