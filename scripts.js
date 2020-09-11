
// Lifted and adapted from https://github.com/romeojeremiah/quote-generator/blob/master/quotes.js

//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Donald Trump, November 6, 2012',
     'quote': 'The electoral college is a disaster for a democracy.'
    {'author': '2',
     'quote': '2'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput-1').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput-1').textContent = `--${arrayOfQuotes[random].author}`;

}