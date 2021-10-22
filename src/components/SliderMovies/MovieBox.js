import gsap, { Power2, Expo, Circ } from "gsap";

import genreIds from "../../genreIds/index";
import PlayBtn from "../buttons/playBtn";
import PlusBtn from "../buttons/plusBtn";
import LikeBtn from "../buttons/likeBtn";
import DislikeBtn from "../buttons/dislikeBtn";
import { down } from "../../svgs/index";

import { Data } from "../../App";
import { useContext } from "react";

const MovieBox = (props) => {
    const { s, index, sliderIndex } = props;
    const { global, setGlobal } = useContext(Data);

    return (
        <div
            className="movieBox"
            onMouseEnter={(e) => {
                let sb = document.querySelectorAll(".sliderBox");
                let movieBox =
                    sb[sliderIndex].querySelectorAll(".movieBox")[index];
                let infoBox = movieBox.querySelector(".movieInfo");

                if (sliderIndex != sb.length) {
                    gsap.to(sb[sliderIndex + 1], {
                        opacity: 1,
                    });
                }

                gsap.to(sb[sliderIndex + 1], {
                    opacity: 0,
                    ease: Circ.easeOut,
                });
                gsap.to(`[data-index='${index}']`, {
                    zIndex: 20,
                });
                gsap.to(movieBox, {
                    width: 366,
                    height: 206,
                    ease: Expo.easeIn,
                    duration: 0.3,
                });
                gsap.to(infoBox, {
                    display: "flex",
                    opacity: 1,
                    ease: Power2.easeIn,
                    duration: 0.3,
                    zindex: 10,
                });
            }}
            onMouseLeave={(e) => {
                let sb = document.querySelectorAll(".sliderBox");
                let movieBox =
                    sb[sliderIndex].querySelectorAll(".movieBox")[index];
                let infoBox = movieBox.querySelector(".movieInfo");

                if (sliderIndex != sb.length) {
                    gsap.to(sb[sliderIndex + 1], {
                        opacity: 1,
                    });
                }

                gsap.to(`[data-index='${index}']`, {
                    zIndex: 1,
                });
                gsap.to(".react-multi-carousel-list", {
                    zIndex: 1,
                });
                gsap.to(movieBox, {
                    width: 244,
                    height: 138,
                    ease: Expo.easeOut,
                    duration: 0.3,
                });
                gsap.to(infoBox, {
                    opacity: 0,
                    zindex: 5,
                    ease: Power2.easeOut,
                    display: "none",
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
                    <PlayBtn />
                    <PlusBtn />
                    <LikeBtn />
                    <DislikeBtn />
                    <div
                        className="arrowBtn"
                        onClick={() => {
                            let sb = document.querySelectorAll(".sliderBox");
                            let movieBox =
                                sb[sliderIndex].querySelectorAll(".movieBox")[
                                    index
                                ];

                            var offsets = movieBox.getBoundingClientRect();
                            var left = offsets.left;
                            var top = offsets.top;

                            setGlobal({
                                type: "change-movieID",
                                value: props.s.id,
                            });
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

export default MovieBox;
