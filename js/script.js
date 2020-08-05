const quotes = [
    {
        "quote": '"Don\'t judge each day by the harvest you reap but by the seeds that you plant."',
        "author": 'Robert Louis Stevenson'
    },
    {
        "quote": '"The future belongs to those who believe in the beauty of their dreams."',
        "author": 'Eleanor Roosevelt'
    },
    {
        "quote": '"It is during our darkest moments that we must focus to see the light."',
        "author": 'Aristotle'
    },
    {
        "quote": '"In the end, it\'s not the years in your life that count.It\'s the life in your years."',
        "author": 'Abraham Lincoln'
    },
    {
        "quote": '"Life is a succession of lessons which must be lived to be understood."',
        "author": 'Ralph Waldo Emerson'
    },
    {
        "quote": '"Life is never fair, and perhaps it is a good thing for most of us that it is not."',
        "author": 'Oscar Wilde'
    },
    {
        "quote": ' "Life is what happens when you\'re busy making other plans."',
        "author": 'John Lennon'
    }
]
const generatedQuote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btn = document.querySelector('.btn');

btn.addEventListener('click', generateQuote);

function generateQuote() {

    let random = Math.floor(Math.random() * quotes.length);

    generatedQuote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
}