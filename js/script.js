let btn = document.getElementById('new-quote');
let text = document.getElementById('quote-text');
let author = document.getElementById('quote-author');
btn.addEventListener('click', async () => {
    const url = 'https://inspirational-quote-generator.p.rapidapi.com/quoteGenerator';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'eed217920bmshec82c990419ab77p1afdedjsn40bb4327643f',
            'x-rapidapi-host': 'inspirational-quote-generator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        text.innerHTML = result.quote;
        author.innerHTML = result.author;
    } catch (error) {
        console.error(error);
    }
})