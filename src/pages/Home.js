// imports
import "../App.scss";
import SliderMovies from "../components/SliderMovies/SliderMovies";
import Teaser from "../components/Teaser";
import MovieDetails from "../components/MovieDetails";

const Home = () => {
    return (
        <div className="app">
            <Teaser />
            <SliderMovies />
            <MovieDetails />
        </div>
    );
};

export default Home;
