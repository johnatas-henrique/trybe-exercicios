const BASE = 'https://www.reddit.com';

const getPostsBySubReddit = sub => (
  fetch(`${BASE}/r/${sub}.json`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPostsBySubReddit;
