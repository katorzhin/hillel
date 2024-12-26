import React, { useState, useEffect } from "react";
import EmojiList from "./components/EmojiList/ EmojiList.jsx";
import Results from "./components/Results/Results.jsx";

import "./App.css";

const App = () => {
    const [emojis, setEmojis] = useState([
        { id: 1, emoji: "😀", votes: 0 },
        { id: 2, emoji: "😊", votes: 0 },
        { id: 3, emoji: "😎", votes: 0 },
        { id: 4, emoji: "😍", votes: 0 },
        { id: 5, emoji: "😘", votes: 0 },
    ]);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const savedEmojis = JSON.parse(localStorage.getItem("emojis"));
        if (savedEmojis) {
            setEmojis(savedEmojis);
        }
    }, []);

    const handleVote = (id) => {
        const updatedEmojis = emojis.map((emoji) =>
            emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
        );
        setEmojis(updatedEmojis);
        localStorage.setItem("emojis", JSON.stringify(updatedEmojis));
    };

    const showResults = () => {
        const maxVotes = Math.max(...emojis.map((emoji) => emoji.votes));
        const topEmojis = emojis.filter((emoji) => emoji.votes === maxVotes);

        if (maxVotes === 0) {
            setWinner({ message: "No votes yet!" });
        } else if (topEmojis.length > 1) {
            setWinner({ message: "It's a tie!", topEmojis });
        } else {
            setWinner(topEmojis[0]);
        }
    };

    const clearResults = () => {
        const resetEmojis = emojis.map((emoji) => ({
            ...emoji,
            votes: 0,
        }));
        setEmojis(resetEmojis);
        setWinner(null);
        localStorage.setItem("emojis", JSON.stringify(resetEmojis));
    };

    return (
        <div className="app">
            <h1>Голосування за найкращий смайлик</h1>
            <EmojiList emojis={emojis} onVote={handleVote} />
            <div className="buttons">
                <button className="btn show-results" onClick={showResults}>
                    Show Results
                </button>
                <button className="btn clear-results" onClick={clearResults}>
                    Clear Results
                </button>
            </div>
            <Results winner={winner} />
        </div>
    );
};

export default App;
