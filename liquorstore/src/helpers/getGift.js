export const getGift = async ( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CfyPCmTeQu1aNSGXXLnmvfcEoadjGnse&q=${encodeURI( category )}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json(); //Como devuelve un obj se pone entre { }
    
    const giftsInfo = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url 
        };
    })

    return giftsInfo;
}