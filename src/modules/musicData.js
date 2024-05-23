export const getAllData = async() =>{
    const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e5b9911b98msh911243acdf5e21dp1f37e9jsn39f4c8b5f857',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    let result
    try {
        const response = await fetch(url, options);
        result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}



export const sortSongsForPopularity = async() => {
    const data = await getAllData()
    const sortedSongs = data.tracks
    sortedSongs.sort((a, b) => b.popularity - a.popularity)
    console.log(sortedSongs)
    return sortedSongs
}

export const releaseYear = (data) => {
    const releaseDateFull = data.album.release_date
    const year = new Date(releaseDateFull).getFullYear()
    return year
}