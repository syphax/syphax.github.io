
// Lifted and adapted from https://github.com/romeojeremiah/quote-generator/blob/master/quotes.js

//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Donald Trump, November 6, 2012',
     'quote': 'The electoral college is a disaster for a democracy.'},
    {'author': 'Donald Trump, March 19, 2020',
     'quote': 'I wanted to always play it down. I still like playing it down. Yes, because I don’t want to create a panic.'},
    {'author': 'Donald Trump, Feb. 28, 2020',
     'quote': 'It’s going to disappear. One day, it’s like a miracle, it will disappear.'},
    {'author': '4',
     'quote': '4'},
];

function generateQuote(){

    len_quotes = arrayOfQuotes.length
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length);

    quote_index = random

    range = range(0, len_quotes - 1)
    random_sequence = shuffle(range)

    for (i = 1; i <= 3; i++) {

        console.log(random_sequence[i-1])

        j = random_sequence[i-1]

        i_str = i.toString()

        document.querySelector('#quoteOutput-'.concat(i_str)).textContent = `\"${arrayOfQuotes[j].quote}\"`;
        document.querySelector('#authorOutput-'.concat(i_str)).textContent = `--${arrayOfQuotes[j].author}`;

        quote_index++
        if (quote_index >= len_quotes) { quote_index = 0 }

    }

}

// Lifted from https://dev.to/ycmjason/how-to-create-range-in-javascript-539i

function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}

// Lifted from https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}