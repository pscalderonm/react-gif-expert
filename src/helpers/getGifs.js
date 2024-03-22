
export const getGifs = async (category) =>{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=w84QXp4z6Bi3olCpeBSSg94RZqEOTO3h&q=${category}&limit=8`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img)=>({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  
  console.log(gifs);
  return gifs;
};
