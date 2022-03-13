import axios from "axios";
import * as cheerio from "cheerio";

const getRandomWallpaper = async () => {
  const corsBypass = "https://api.allorigins.win/raw?url=";

  const id = Math.trunc(Math.random() * 810);

  const { data } = await axios.get(
    `${corsBypass}https://pokewalls.wordpress.com/${id}`
  );

  const $ = cheerio.load(data);

  const randomWallpaper = $(".entry-content h1>a").attr("href");
  return randomWallpaper;
};

export default getRandomWallpaper;
