import React, {Component} from "react";
import "./EmojiList.css";

class EmojiList extends Component {
    handleVote = (id) => {
        this.props.onVote(id);
    };

    render() {
        const {emojis} = this.props;

        return (
            <ul className="emoji-list">
                {emojis.map((emoji) => (
                    <li
                        key={emoji.id}
                        className="emoji-item"
                        onClick={() => this.handleVote(emoji.id)}>

                        <span className="emoji">{emoji.emoji}</span>
                        <span className="votes">{emoji.votes}</span>
                    </li>
                ))}
            </ul>
        );
    }
}

export default EmojiList;
