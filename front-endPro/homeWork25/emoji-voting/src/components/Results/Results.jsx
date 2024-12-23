import React, {Component} from "react";
import "./Results.css";

class Results extends Component {
    render() {
        const {winner} = this.props;

        if (!winner) return null;

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
    }
}

export default Results;
