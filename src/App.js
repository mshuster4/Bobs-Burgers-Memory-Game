import React, { Component } from "react";
import Header from "./components/Header";
import GameCard from "./components/GameCard";
import cards from "./cards.json";

function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

class App extends Component {

    state = {
        score: 0,
        highScore: 0,
        cards, 
        clickedCards: []
    };

     clickedImage = id => {
        var clickedCards = this.state.clickedCards;
        var score = this.state.score;
        var highScore = this.state.highScore;

        if (clickedCards.indexOf(id) === -1) {
            clickedCards.push(id);
            console.log(clickedCards);
            this.handleIncrement();
            this.shuffleCards();
        } else if (this.state.score === 12) {
            alert("You Win!")
            this.setState({
                score: 0,
                clickedCards: []
            });
        } else {
            this.setState({
                score: 0,
                clickedCards: []
            });
            alert("GAME OVER");

            if (score > highScore) {
                this.setState({
                    highScore: score,
                })
            }
        }

    };

    handleIncrement = () => {
        this.setState({ score: this.state.score + 1 });
    };

    shuffleCards = () => {
        this.setState({ cards: shuffle(cards) });
    };

    render() {
        return (
            <div>
                <div className="container game-container">
                <Header
                    score={this.state.score}
                    highScore={this.state.highScore}
                />
                    <div className="row">
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[0].id}
                                image={cards[0].image}
                                clickedImage={this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[1].id}
                                image={cards[1].image}
                                clickedImage={this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">     
                            <GameCard
                                id={cards[2].id}
                                image={cards[2].image}
                                clickedImage={this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[3].id}
                                image={cards[3].image}
                                clickedImage={this.clickedImage}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[4].id}
                                image={cards[4].image}
                                clickedImage = {this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[5].id}
                                image={cards[5].image}
                                clickedImage = {this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">     
                            <GameCard
                                id={cards[6].id}
                                image={cards[6].image}
                                clickedImage = {this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[7].id}
                                image={cards[7].image}
                                clickedImage={this.clickedImage}
                            />
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[8].id}
                                image={cards[8].image}
                                clickedImage={this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[9].id}
                                image={cards[9].image}
                                clickedImage = {this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">     
                            <GameCard
                                id={cards[10].id}
                                image={cards[10].image}
                                clickedImage = {this.clickedImage}
                            />
                        </div>
                        <div className="col-sm-3 col-xs-3">
                            <GameCard
                                id={cards[11].id}
                                image={cards[11].image}
                                clickedImage = {this.clickedImage}
                            />
                        </div>
                    </div> 
                </div>
            </div>
        );
    }

}

export default App; 