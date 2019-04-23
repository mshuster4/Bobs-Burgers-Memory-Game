import React from "react";
import banner from "./bb-banner-1.jpg"
import "./style.css";

function Header (props) {
    return (

        <div className="container">
            <div className="row">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-sm-3 col-xs-0"></div>
                        <div className="col-sm-6 col-xs-12">
                            <img className="logo" src={banner} alt="banner"/>
                        </div>
                        <div className="col-sm-3 col-xs-0"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3 col-xs-0"></div>
                        <div className="col-sm-6 col-xs-12">
                            <div className="chalkboard">
                                <h1 className="text-center">CLICKY GAME</h1>
                                <p className="text-center">HIGH SCORE: {props.highScore}</p>
                                <p className="text-center"> SCORE: {props.score}</p>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-0"></div>
                    </div>
                </div>
            </div>
        </div>
               
    );
}

export default Header;