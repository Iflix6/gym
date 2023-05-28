export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-key': process.env.REACT_APP_RAPID_API_KEY,
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-key': 'd4cbf0e618msh833b06d25cf813bp19612fjsn41a4963aea95',
    }
}

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};