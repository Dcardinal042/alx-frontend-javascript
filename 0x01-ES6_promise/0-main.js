// 0-main.js
import getResponseFromAPI from './0-promise';

const responsePromise = getResponseFromAPI();

responsePromise
  .then((response) => {
    console.log('Promise resolved:', response);
  })
  .catch((error) => {
    console.error('Promise rejected:', error);
  });

