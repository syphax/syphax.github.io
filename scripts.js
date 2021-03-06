
// Lifted and adapted from https://github.com/romeojeremiah/quote-generator/blob/master/quotes.js

//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Donald Trump, November 6, 2012',
     'quote': 'The electoral college is a disaster for a democracy.',
     'source': 'https://twitter.com/realDonaldTrump/status/266038556504494082',
     'comment':'We concur.'},
    {'author': 'Donald Trump, March 19, 2020',
     'quote': 'I wanted to always play it down. I still like playing it down. Yes, because I don’t want to create a panic.',
     'source': 'https://www.nydailynews.com/news/politics/ny-coronavirus-trump-bob-woodward-rage-20200909-uf65ckmgxbhi5c4pgddrdhi64a-story.html'},
    {'author': 'Donald Trump, Feb. 27, 2020',
     'quote': 'It’s going to disappear. One day, it’s like a miracle, it will disappear.',
     'source': 'https://www.factcheck.org/2020/03/trumps-statements-about-the-coronavirus/'},
    {'author': 'Donald Trump, Feb. 26, 2020',
     'quote': 'And again, when you have 15 people, and the 15 within a couple of days is going to be down to close to zero, that’s a pretty good job we’ve done.',
     'source': 'https://www.factcheck.org/2020/03/trumps-statements-about-the-coronavirus/'},
    {'author': 'Donald Trump, September 11, 2001',
     'quote': '40 Wall street actually was the second-tallest building in downtown Manhattan, and it was actually before the World Trade Center the tallest, and then when they built the World Trade Center it became known as the second-tallest, and now it’s the tallest.',
     'source': 'https://www.snopes.com/fact-check/trump-bragged-tallest-building/'},
    {'author': 'Donald Trump, July 19, 2020',
     'quote': 'We\'re signing a health care plan within two weeks, a full and complete health care plan that the Supreme Court decision on DACA gave me the right to do.',
     'source': 'https://www.foxnews.com/politics/transcript-fox-news-sunday-interview-with-president-trump'},
    {'author': 'Donald Trump, September 15, 2020',
     'quote': 'We\'re going to have a vaccine in a matter of weeks, it could be four weeks, it could be eight weeks',
     'source': 'https://www.foxnews.com/politics/trump-fox-friends-coronavirus-vaccine-matter-weeks'},
    {'author': 'Donald Trump, February 27, 2015',
     'quote': 'Nobody knew health care could be so complicated',
     'source': 'https://www.washingtonpost.com/trump-madness-2017-whats-the-quintessential-quote-of-the-trump-administration/6f1f6d1e-a24e-4628-887d-197ceb20d4f2_brackets.html',
     'comment':'"Nobody" = "Almost everybody"'},
    {'author': 'Donald Trump, ',
     'quote': '',
     'source': ''},
    {'author': 'Donald Trump, ',
     'quote': '',
     'source': ''},
];

function generateQuote(){

    len_quotes = arrayOfQuotes.length
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length);

    quote_index = random

    range = range(0, len_quotes-1)
    random_sequence = shuffle(range)

    for (i = 1; i <= 5; i++) {

        console.log(random_sequence[i-1])

        j = random_sequence[i-1]

        i_str = i.toString()

        document.querySelector('#quoteOutput-'.concat(i_str)).textContent = i_str.concat(`. \"${arrayOfQuotes[j].quote}\"`);
        document.querySelector('#authorOutput-'.concat(i_str)).textContent = `--${arrayOfQuotes[j].author}`;
        document.querySelector('#authorOutput-'.concat(i_str)).setAttribute('href', `${arrayOfQuotes[j].source}`);

        console.log(document.querySelector('#authorOutput-'.concat(i_str)).getAttribute('href'))
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