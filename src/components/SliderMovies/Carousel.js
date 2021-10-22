import MovieBox from "./MovieBox";
import {
    left,
    right,
} from "C:/Users/Nmelh/OneDrive/Área de Trabalho/netflix-clone/src/svgs/index";
import "react-multi-carousel/lib/styles.css";
import Car from "react-multi-carousel";

const Carousel = (props) => {
    const { m, sliderIndex } = props;
    const results = m.dados.results;
    const currentElems = "slider-" + sliderIndex;
    const currentPrev = "prev-" + sliderIndex;
    const currentNext = "next-" + sliderIndex;

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Car itemClass={currentElems} responsive={responsive}>
            {results.map((s, index) => {
                return (
                    <MovieBox s={s} sliderIndex={sliderIndex} index={index} />
                );
            })}
        </Car>
    );
};

export default Carousel;
