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

// export const getTopManga = async () => {
//     return await getAnimeResponse('top/manga', 'limit=8');
// }

export const getAnimeRekomendasi = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}