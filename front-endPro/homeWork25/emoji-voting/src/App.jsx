import {Component} from "react";
import EmojiList from "./components/EmojiList/EmojiList.jsx";
import Results from "./components/Results/Results.jsx";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [
                {id: 1, emoji: "😀", votes: 0},
                {id: 2, emoji: "😊", votes: 0},
                {id: 3, emoji: "😎", votes: 0},
                {id: 4, emoji: "😍", votes: 0},
                {id: 5, emoji: "😘", votes: 0},
            ],
            winner: null,
        };
    }

    handleVote = (id) => {
        const updatedEmojis = this.state.emojis.map((emoji) =>
            emoji.id === id ? {...emoji, votes: emoji.votes + 1} : emoji
        );
        this.setState({emojis: updatedEmojis});
        localStorage.setItem("emojis", JSON.stringify(updatedEmojis));
    };

    showResults = () => {
        const winner = this.state.emojis.reduce((prev, current) =>
            prev.votes > current.votes ? prev : current
        );
        this.setState({winner});
    };

    clearResults = () => {
        const resetEmojis = this.state.emojis.map((emoji) => ({
            ...emoji,
            votes: 0,
        }));
        this.setState({
            emojis: resetEmojis,
            winner: null
        });
        localStorage.setItem("emojis", JSON.stringify(resetEmojis));
    };

    componentDidMount() {
        const savedEmojis = JSON.parse(localStorage.getItem("emojis"));
        if (savedEmojis) {
            this.setState({emojis: savedEmojis});
        }
    }

    render() {
        return (
            <div className="app">
                <h1>Голосування за найкращий смайлик</h1>
                <EmojiList emojis={this.state.emojis} onVote={this.handleVote}/>
                <div className="buttons">
                    <button className="btn show-results" onClick={this.showResults}>
                        Show Results
                    </button>
                    <button className="btn clear-results" onClick={this.clearResults}>
                        Clear Results
                    </button>
                </div>
                <Results winner={this.state.winner}/>
            </div>
        );
    }
}

export default App;
