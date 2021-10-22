import { logo } from "../svgs/index";
import gsap, { Power2 } from "gsap";
import SearchMovie from "./searchMovies/SearchMovie";
import { Link } from "react-router-dom";

const TopBar = () => {
    window.onscroll = (e) => {
        if (window.scrollY == 0) {
            gsap.to(".topbar", {
                backgroundImage:
                    "linear-gradient(to bottom,#00000000,#00000000,#00000000,#00000000,#00000000,)",
                ease: Power2.easeIn,
                duration: 0.25,
            });
        } else {
            gsap.to(".topbar", {
                backgroundImage:
                    "linear-gradient(to bottom, #070607, #070707, #070708, #080808, #080808, #090909, #0a0a0b, #0b0b0c, #0c0d0e, #0e1010, #101111, #121312)",
                ease: Power2.easeOut,
                duration: 0.25,
            });
        }
    };

    return (
        <div className="topbar">
            <Link to="/" className="logo">
                <img src={logo} />
            </Link>
            <ul className="menu">
                <Link to="/">Home</Link>
                <Link to="/series">Series</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/trending">Trending</Link>
                <Link to="/my-list">My list</Link>
            </ul>

            <div className="rside">
                <div className="i">
                    <SearchMovie />
                </div>
                <div className="i">
                    <a href="/">Infantil</a>
                </div>
                <div className="i">
                    <i class="fas fa-bell"></i>
                </div>
                <div className="iprofile">
                    <div className="profileIcon"></div>
                    <div className="arrow">
                        <i class="fas fa-sort-down"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
