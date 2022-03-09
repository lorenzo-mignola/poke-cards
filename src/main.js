import axios from 'axios';
import * as cheerio from 'cheerio';
import { createApp } from 'vue';
import App from './App.vue';

const corsBypass = 'https://api.allorigins.win/raw?url=';

const { data } = await axios.get(
  `${corsBypass}https://pokewalls.wordpress.com/?random`
);

const $ = cheerio.load(data);

const randomWallpaper = $('.entry-content h1>a').attr('href');

console.log('clg -> randomWallpaper', randomWallpaper);
createApp(App).mount('#app');
