import React from "react";
import "./style.css";

function GameCard(props) {
    return (
        <div className="card" onClick={() => props.clickedImage(props.id)}>
            <div className="card-image">
                <img className="game-image" alt="" src={props.image}/>
            </div>
        </div>
    );
}

export default GameCard;