import RankText from "../RankText";
import Carousel from "../SliderMovies/Carousel";

const SliderBox = ({ movie, sliderIndex }) => {
    const sliderBoxClass = "sliderbox-" + sliderIndex;
    console.log("SliderBox", movie);

    return (
        <div className={"sliderBox " + sliderBoxClass}>
            <RankText text={movie.title} />
            <Carousel sliderIndex={sliderIndex} m={movie} />
        </div>
    );
};

export default SliderBox;
