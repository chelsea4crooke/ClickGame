import React from "react";
import Card from "../Card";
import cards from "../../cards.json"
import "./board.css";
const Board = props => <div className="board">{props.children}
        <Card 
            key={cards.id}
            id={cards.id}
            type={cards.type}
        />
    </div>
export default Board;