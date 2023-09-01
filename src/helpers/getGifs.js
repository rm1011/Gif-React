import { PropTypes } from "prop-types";

export const getGifs = async (category) => {
  const ApiKey = "0JSnKz7ob2PibYjKqW44lWDexBTSwPyp";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${category}&limit=10`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
};

getGifs.propTypes = { category: PropTypes.string };
