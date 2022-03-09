import axios from 'axios';
import * as cheerio from 'cheerio';

export const getRandomWallpaper = async () => {
  const corsBypass = 'https://api.allorigins.win/raw?url=';

  const { data } = await axios.get(
    `${corsBypass}https://pokewalls.wordpress.com/?random`
  );

  const $ = cheerio.load(data);

  const randomWallpaper = $('.entry-content h1>a').attr('href');
  return randomWallpaper;
};
