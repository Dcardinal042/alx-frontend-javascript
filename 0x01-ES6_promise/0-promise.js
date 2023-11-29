// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Your asynchronous code here
    resolve("Successfully resolved!");
  });
}

export default getResponseFromAPI;

