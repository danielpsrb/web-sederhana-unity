export const getAnimeResponse = async (resources, query) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_REACT_API_URL}/${resources}?${query}`);
        const anime = await response.json();
        return anime;
    } catch (error) {
        console.error('error fetchig data:', error);
        throw new Error('Error fetching data anime');
    }
}

export const getTopManga = async () => {
    return await getAnimeResponse('top/manga', 'limit=8');
}