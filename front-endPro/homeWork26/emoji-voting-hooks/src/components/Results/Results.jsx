import React from "react";
import "./Results.css";

const Results = ({ winner }) => {
    if (!winner) return null;

    if (winner.message === "No votes yet!") {
        return (
            <div className="results-container">
                <h2 className="results-header">Результати голосування:</h2>
                <p className="results-message">Голосів ще немає!</p>
            </div>
        );
    }

    if (winner.message === "It's a tie!") {
        return (
            <div className="results-container">
                <h2 className="results-header">Результати голосування:</h2>
                <p className="results-message">Нічия між:</p>
                <div className="tie-emojis">
                    {winner.topEmojis.map((emoji, index) => (
                        <span key={index} className="emoji">
                            {emoji.emoji} ({emoji.votes})
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="results-container">
            <h2 className="results-header">Результати голосування:</h2>
            <div className="winner-container">
                <p>Переможець:</p>
                <span className="winner-emoji">{winner.emoji}</span>
                <p>Кількість голосів: {winner.votes}</p>
            </div>
        </div>
    );
};

export default Results;
