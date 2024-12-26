import React from "react";
import "./EmojiList.css";

const EmojiList = ({ emojis, onVote }) => {
    return (
        <ul className="emoji-list">
            {emojis.map((emoji) => (
                <li
                    key={emoji.id}
                    className="emoji-item"
                    onClick={() => onVote(emoji.id)}
                >
                    <span className="emoji">{emoji.emoji}</span>
                    <span className="votes">{emoji.votes}</span>
                </li>
            ))}
        </ul>
    );
};

export default EmojiList;
