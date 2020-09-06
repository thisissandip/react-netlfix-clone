const apiKey = "0b284e589d747768a9d9d72a1dd2b38c";

const allrequest = {
    getRomance: `movie/80/similar?api_key=${apiKey}&language=en-US&page=1`,
    getTrending: `trending/all/day?api_key=${apiKey}`,
    getNTVoriginals: `discover/tv?api_key=${apiKey}&with_networks=213`,
    getMarvel: `movie/1726/similar?api_key=${apiKey}&language=en-US&page=1`,
    getUpcomoing: `movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
}

export default allrequest;