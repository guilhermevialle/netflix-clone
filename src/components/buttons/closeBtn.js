import { close } from "../../svgs/index";
import gsap, { Expo, Power2 } from "gsap";
import { Data } from "../../App";
import { useContext } from "react";

export default () => {
    const { global } = useContext(Data);
    const { currentPos } = global;

    return (
        <div
            className="closeBtn"
            onClick={() => {
                gsap.to(".movieDetails", {
                    width: 244,
                    height: 138,
                    left: currentPos[0],
                    top: currentPos[1] + 25,
                    zIndex: -1,
                    duration: 0.5,
                    ease: Power2.ease,
                });
                gsap.to(".movieDetails", {
                    opacity: 0,
                    delay: 0.3,
                    ease: Power2.ease,
                });
            }}
        >
            <img src={close} />
        </div>
    );
};
