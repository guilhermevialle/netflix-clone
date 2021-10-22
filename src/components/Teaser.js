import { useState, useEffect } from "react";
import { alert } from "../svgs/index";
import { useContext } from "react";
import { Data } from "../App";
import Watch from "./buttons/Watch";
import gsap, { Power2 } from "gsap";
import getTeaserMovie from "../Tmdb/getTeaserMovie";

const Teaser = (props) => {
    let [movie, setMovie] = useState(null);
    const { children } = props;
    const { setGlobal } = useContext(Data);

    useEffect(() => {
        const load = async () => {
            const res = await getTeaserMovie();
            setMovie(res);
        };

        load();
    }, []);

    if (movie) {
        console.log(movie);
        var st = movie.overview;
        if (st.length > 150) {
            st = st.slice(0, 149) + "...".trim();
        }
    } else {
        console.log("Teaser loading...");
    }

    return movie ? (
        <div
            className="teaser"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
                backgroundSize: "cover",
                marginTop: "68px",
            }}
        >
            {children}
            <div className="sides">
                <div className="lside">
                    <div className="title">
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="desc">{st}</div>
                    <div className="btns">
                        <Watch />
                        <div>
                            <img src={alert} />
                            <span
                                onClick={() => {
                                    var offsets = document
                                        .querySelector(".sides")
                                        .getBoundingClientRect();
                                    var top = offsets.top;
                                    var left = offsets.left;

                                    setGlobal({
                                        type: "change-movieID",
                                        value: movie.id,
                                    });
                                    setGlobal({
                                        type: "change-currentPosition",
                                        value: [left, top],
                                    });

                                    gsap.fromTo(
                                        ".movieDetails",
                                        {
                                            width: "100%",
                                            height: "499px",
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
                                Mais informações
                            </span>
                        </div>
                    </div>
                </div>
                <div className="rside">
                    <div>
                        <span>{movie.vote_average}</span>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        "loading... please wait"
    );
};

export default Teaser;
