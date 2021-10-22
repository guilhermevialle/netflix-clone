import { useEffect, useState, useContext } from "react";
import SMReq from "../Tmdb/searchMovieReq";
import MovieBox from "./MovieBoxSearch";
import { Data } from "../App";

const ShowResults = () => {
    const [res, setRes] = useState(null);
    const { global } = useContext(Data);
    const { inpval } = global;

    useEffect(() => {
        const getResults = async () => {
            const result = await SMReq(inpval);
            setRes(result.results);
        };
        getResults();
    }, [inpval]);

    return res ? (
        <div className="showResults">
            {res.map((movie, index) => {
                if (movie.backdrop_path && movie.backdrop_path != "") {
                    return <MovieBox s={movie} index={index} />;
                }
            })}
        </div>
    ) : (
        "loading..."
    );
};

export default ShowResults;
