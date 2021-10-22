import "@fortawesome/fontawesome-free";
import gsap, { Expo } from "gsap";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const SearchMovie = () => {
    return (
        <div className="searchMovie">
            <Link to="/search">
                <i
                    class="fas fa-search"
                    onClick={(e) => {
                        gsap.to(".inp", {
                            display: "inline-block",
                        });
                        gsap.to(".fa-times", {
                            display: "block",
                        });
                        gsap.to(".rside", {
                            width: 554,
                        });
                        gsap.to(".searchMovie", {
                            width: 269,
                            height: 32,
                            border: "1px solid #fff",
                            justifyContent: "space-evenly",
                            backgroundColor: "#070707",
                        });
                    }}
                ></i>
            </Link>
            <SearchInput />
            <Link to="/">
                <i
                    style={{ display: "none" }}
                    class="fas fa-times"
                    onClick={(e) => {
                        gsap.to(".searchMovie", {
                            width: 14,
                            height: 32,
                            border: "none",
                            backgroundColor: "transparent",
                        });
                        gsap.to(".fa-times", {
                            display: "none",
                            duration: 0,
                        });
                        gsap.to(".inp", {
                            display: "none",
                        });
                        gsap.to(".rside", {
                            width: 215,
                        });
                    }}
                ></i>
            </Link>
        </div>
    );
};

export default SearchMovie;
