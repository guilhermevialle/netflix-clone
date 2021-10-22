import { useEffect, useState, useContext } from "react";
import getMovieDetails from "../Tmdb/getMovieDetails";
import getMovieCast from "../Tmdb/getMovieCast";
import getSimilarMovies from "../Tmdb/getSimilarMovies";

import { Data } from "../App";

import Watch from "./buttons/Watch";
import Plus from "./buttons/plusBtn";
import Like from "./buttons/likeBtn";
import Dislike from "./buttons/dislikeBtn";
import Close from "./buttons/closeBtn";
import Down from "./buttons/arrowBtn";

import RankText from "./RankText";

import formatter from "./tools/FormatMinutes";

const MovieDetails = () => {
    const [res, setRes] = useState(null);
    const [cast, setCast] = useState(null);
    const [similar, setSimilar] = useState(null);
    const { global } = useContext(Data);
    const { movieID } = global;

    useEffect(() => {
        const load = async () => {
            const details = await getMovieDetails(movieID);
            const casts = await getMovieCast(movieID);
            const similars = await getSimilarMovies(movieID);
            setRes(details);
            setCast(casts);
            setSimilar(similars);
        };
        load();

        console.log("Global: ");
        console.log(global);
        console.log("End global");
    }, [movieID]);

    if (res) {
        console.log({ res, cast, similar });
    }

    return similar ? (
        <div className="movieDetails">
            <div className="interface">
                <div
                    className="fBox"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${res.backdrop_path})`,
                        backgroundSize: "cover",
                    }}
                >
                    <div className="lside">
                        <div className="name">
                            <h1>{res.title}</h1>
                        </div>
                        <div className="btns">
                            <Watch />
                            <Plus />
                            <Like />
                            <Dislike />
                        </div>
                    </div>
                    <div className="rside">
                        <Close />
                    </div>
                </div>

                <div className="sBox">
                    <div className="f">
                        <div className="details">
                            <span>{res.vote_average * 10}% relevant</span>
                            <span>
                                {res.release_date.slice(
                                    0,
                                    res.release_date.indexOf("-")
                                )}
                            </span>
                            <span>{formatter(res.runtime)}</span>
                            <span>HD</span>
                        </div>
                        <div className="desc">
                            <span>{res.overview}</span>
                        </div>
                    </div>
                    <div className="s">
                        <div className="cast">
                            <div>
                                <p>
                                    Cast:{" "}
                                    {cast.cast.map((p, index) => {
                                        if (index > 2) {
                                            return;
                                        }
                                        return <span>{p.name}, </span>;
                                    })}
                                    <span style={{ fontStyle: "italic" }}>
                                        mais
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="genres">
                            <div>
                                <p>
                                    Genres:{" "}
                                    {res.genres.map((g, index) => {
                                        if (index == res.genres.length - 1) {
                                            return <span>{g.name}</span>;
                                        }
                                        return <span>{g.name}, </span>;
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tBox">
                    <RankText text="Similar works" />
                    <div className="items">
                        {similar.results.map((w) => {
                            if (w.backdrop_path) {
                                return (
                                    <div className="work">
                                        <div
                                            className="thumb"
                                            style={{
                                                backgroundImage:
                                                    "url(https://image.tmdb.org/t/p/w1280" +
                                                    w.backdrop_path +
                                                    ")",
                                                backgroundSize: "cover",
                                                backgroundBlendMode: "darken",
                                            }}
                                        >
                                            <span>
                                                {w.vote_average.toFixed(1)}
                                            </span>
                                            <div>
                                                <h2>{w.original_title}</h2>
                                            </div>
                                        </div>

                                        <div className="rest">
                                            <div className="btns">
                                                <div class="f">
                                                    <span>
                                                        {w.vote_average.toFixed(
                                                            1
                                                        ) * 10}
                                                        % relevant
                                                    </span>
                                                </div>
                                                <div class="s">
                                                    <span>
                                                        {w.release_date.slice(
                                                            0,
                                                            w.release_date.indexOf(
                                                                "-"
                                                            )
                                                        )}
                                                    </span>
                                                </div>
                                                <div class="t">
                                                    <Plus />
                                                </div>
                                            </div>

                                            <div className="desc">
                                                {/* <p>{w.overview}</p> */}
                                                {w.overview}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <Down />
                </div>

                <div className="fourBox">
                    <h2 style={{ fontWeight: 300 }}>
                        Sobre{" "}
                        <span style={{ fontWeight: 500 }}>{res.title}</span>
                    </h2>

                    <div className="lastInfos">
                        <div>
                            <p>
                                Cast:{" "}
                                {cast.cast.map((p, index) => {
                                    if (index > 10) {
                                        return;
                                    }
                                    return <span>{p.name}, </span>;
                                })}
                                <span style={{ fontStyle: "italic" }}>
                                    mais
                                </span>
                            </p>
                        </div>

                        <div>
                            <p>
                                Production companies:{" "}
                                {res.production_companies.map((p, index) => {
                                    return <span>{p.name}, </span>;
                                })}
                                <span style={{ fontStyle: "italic" }}>
                                    mais
                                </span>
                            </p>
                        </div>

                        <div>
                            <p>
                                Genres:{" "}
                                {res.genres.map((p, index) => {
                                    return <span>{p.name}, </span>;
                                })}
                                <span style={{ fontStyle: "italic" }}>
                                    mais
                                </span>
                            </p>
                        </div>

                        <div>
                            <p>
                                Homepage: <span>{res.homepage}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        "loading..."
    );
};

export default MovieDetails;
