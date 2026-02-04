const quotes = [
    "Why don\'t scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "My wife said I should do lunges to stay in shape. That\'s a big step for me.",
    "What do you call a fake noodle? An impasta.",
    "Did you hear about the guy who invented the knock-knock joke? He won a no-bell prize.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet."
];

const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

newQuoteBtn.addEventListener('click', () => {
    quoteText.textContent = getRandomQuote();
});

// Set initial quote on load
quoteText.textContent = getRandomQuote();