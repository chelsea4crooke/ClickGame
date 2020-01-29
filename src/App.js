import React, { Component } from "react";
import Board from "./components/Board/indexBoard";
import Card from "./components/Card";
import Score from "./components/Score/Score";
import turtles from "./cards.json";
import "./App.css";
  
class App extends Component {
  
    // Setting this.state turtle to the cards json array
    state = {
     turtles,
      TurtleIds: [],
      score: 0,
      goal: 12,
      status: ""
    };
    shuffScore = id => {
      let TurtleIds = this.state.TurtleIds;

      if(TurtleIds.includes(id)){
        this.setState({ TurtleIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
        return;
      }else{
        TurtleIds.push(id)
  
        if(TurtleIds.length === 8){
          this.setState({score: 12, status: "Smartie pants! What a good memory!! Click to play again!", TurtleIds: []});
          return;
        }
  
        this.setState({ turtles, TurtleIds, score: TurtleIds.length, status: " " });
  
        for (let i = turtles.length - 1; i > 0; i++) {
          let j = Math.floor(Math.random() * (i + 1));
           [turtles[i], turtles[j]] =  [turtles[j], turtles[i]];
        }
      }
    }
  render(){
    return(
      <div className= "App">
        <h1>Start Clicking</h1>
        <h2>Do you remember the one you clicked before?</h2>
        <h3> Don't click the same image twice, or else!</h3>
        <div className="scores">
          <Score total={this.state.score}
          goal={12}
          status={this.state.status}/>
          </div>
          <Board>
            {this.state.turtles.map(turtles => (
         
            <Card>
               shuffCard={this.shuffCard}
                id={turtles.id}
                 key={turtles.id}
                image={turtles.image}
            </Card>
            ))}
          </Board>
        </div>  
    )}
  }
export default App;