import gsap, { Power2, Expo } from "gsap";
import { plus, like, dislike, down, playdiv } from "../svgs/index";
import genreIds from "../genreIds/index";
import { Data } from "../App";
import { useContext } from "react";

const MovieBoxSearch = (props) => {
    const { s, index } = props;
    const { setGlobal } = useContext(Data);

    return (
        <div
            className={"movieBoxSearch " + "mbs-" + index}
            onMouseEnter={() => {
                let movieBox = document.querySelector(".mbs-" + index);
                let infoBox = movieBox.getElementsByClassName("movieInfo");

                gsap.to(movieBox, {
                    zIndex: 10,
                    transform: "scale(1.35,1.35)",
                    ease: Expo.easeIn,
                    duration: 0.3,
                });
                gsap.to(infoBox, {
                    display: "flex",
                    bottom: 0,
                    opacity: 1,
                    ease: Expo.easeIn,
                    duration: 0.3,
                });
            }}
            onMouseLeave={() => {
                let movieBox = document.querySelector(".mbs-" + index);
                let infoBox = movieBox.getElementsByClassName("movieInfo");

                gsap.to(movieBox, {
                    transform: "scale(1,1)",
                    zIndex: 1,
                    ease: Expo.easeOut,
                    duration: 0.3,
                });
                gsap.to(infoBox, {
                    opacity: 0,
                    display: "none",
                    ease: Power2.easeOut,
                    duration: 0.3,
                });
            }}
        >
            <div className="thumb">
                <img
                    src={`https://image.tmdb.org/t/p/w500${s.backdrop_path}`}
                />
            </div>
            <div className="movieInfo">
                <div className="btns">
                    <div>
                        <img src={playdiv} />
                    </div>
                    <div>
                        <img src={plus} />
                    </div>
                    <div>
                        <img src={like} />
                    </div>
                    <div>
                        <img src={dislike} />
                    </div>
                    <div
                        onClick={() => {
                            setGlobal({
                                type: "change-movieID",
                                value: s.id,
                            });

                            let movieBox = document.querySelector(
                                ".mbs-" + index
                            );

                            var offsets = movieBox.getBoundingClientRect();
                            var top = offsets.top;
                            var left = offsets.left;

                            setGlobal({
                                type: "change-currentPosition",
                                value: [left, top],
                            });

                            gsap.fromTo(
                                ".movieDetails",
                                {
                                    width: "244px",
                                    height: "138px",
                                    opacity: 0,
                                    left: left,
                                    top: top,
                                },
                                {
                                    zIndex: 20,
                                    left: 0,
                                    top: 0,
                                    opacity: 1,
                                    width: "100%",
                                    height: "100%",
                                    ease: Power2.ease,
                                    duration: 1,
                                    delay: 1,
                                }
                            );
                        }}
                    >
                        <img src={down} />
                    </div>
                </div>
                <div className="movieName">
                    {s.name ? s.name : s.original_title}
                </div>
                <div className="infos">
                    <span>{s.vote_average * 10 + "% Relevância"}</span>
                    <span>
                        {s.first_air_date
                            ? s.first_air_date.slice(
                                  0,
                                  s.first_air_date.indexOf("-")
                              )
                            : ""}
                    </span>
                    <span>{s.vote_average}</span>
                    <span>HD</span>
                </div>
                <div className="genres">
                    {s.genre_ids.map((id) => {
                        let t = genreIds[id];
                        return (
                            <div>
                                <span>•</span>
                                <span>{t}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MovieBoxSearch;
