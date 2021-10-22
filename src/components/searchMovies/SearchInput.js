import { useState, useContext, useEffect } from "react";
import SMReq from "../../Tmdb/searchMovieReq";
import { Data } from "../../App";

const SearchInput = () => {
    const { setGlobal } = useContext(Data);

    const inpStyles = {
        color: "#e4e4e4",
        backgroundColor: "transparent",
        fontSize: "14px",
        width: "80%",
        height: "100%",
        outline: "transparent",
        border: "none",
        display: "none",
        fontWeight: 300,
    };

    return (
        <input
            autocomplete="off"
            style={inpStyles}
            type="text"
            name="inp"
            id="inp"
            className="inp"
            placeholder="Título, gente e gênero"
            onKeyUp={(e) => {
                var val = e.target.value;

                if (e.keyCode == 13) {
                    setGlobal({
                        type: "change-inp",
                        value: val,
                    });
                }
            }}
        />
    );
};

export default SearchInput;
