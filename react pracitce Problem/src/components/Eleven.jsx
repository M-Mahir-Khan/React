import React, { useState } from 'react';

const Eleven = () => {
    let quotes = [
        "Avoid daydreaming about the years to come.",
        "You are the most important person in your whole life.",
        "Always be true to who you are, and ignore what other people have to say about you.",
        "Only demonstrate your strength when it’s really required."
    ];

    const [quote, setQuote] = useState(quotes[0]); // Initialize with the first quote

    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length); // Calculate random index on button click
        setQuote(quotes[randomIndex]); // Set the new quote
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>{quote}</p>
            <button 
                onClick={generateQuote} 
                style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}
            >
                Generate Quote
            </button>
        </div>
    );
};

export default Eleven;

