var genres = [
    "Action          28Adventure       12Animation       16Comedy          35Crime           80Documentary     99Drama           18Family          10751Fantasy         14History         36Horror          27Music           10402Mystery         9648Romance         10749Science Fiction 878TV Movie        10770Thriller        53War             10752Western         37TV SHOWAction & Adventure  10759Animation           16Comedy              35Crime               80Documentary         99Drama               18Family              10751Kids                10762Mystery             9648News                10763Reality             10764Sci-Fi & Fantasy    10765Soap                10766Talk                10767War & Politics      10768Western             37",
];

const getGenres = () => {
    var split = genres.join(" ");
    split = split.split(" ");
    split = split.filter((w) => w != "");
    const genresID = {};

    split = split.map((string, index) => {
        if (split[index + 1] == undefined) {
            return;
        }

        ns = split[index + 1].match(/[0-9]/g);

        if (ns == null) {
            return;
        }

        string = string.match(/[a-zA-Z]/g).join("");
        var ns = Number(ns.join(""));

        return [string, ns];
    });

    split = split.filter((e) => e != undefined);
    split.forEach((e, index) => {
        genresID[e[1]] = e[0];
    });

    return genresID;
};

export default getGenres();
