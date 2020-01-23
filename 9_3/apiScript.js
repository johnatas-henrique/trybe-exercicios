const API_URL = 'https://icanhazdadjoke.com/search';

const header = {
    headers: { Accept: 'application/json' }
};

const fetchJoke = () => {
    fetch(API_URL, header)
    .then(response => {
        response.json()
        .then(response => {
            const random = Math.floor(Math.random()*20)
            document.getElementById('jokeContainer').innerHTML 
            = `${random} - ${response.results[random].joke}`;
        })
    })
} 
fetchJoke()
