import ShowResults from "../components/ShowResults";
import MovieDetails from "../components/MovieDetails";

const SearchPage = (props) => {
    return (
        <div className="searchPage">
            <ShowResults />
            <MovieDetails />
        </div>
    );
};

export default SearchPage;
