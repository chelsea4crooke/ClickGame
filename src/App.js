import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import turtles from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state kittens to the cards json array
  state = {
   turtles,
    clickedTurtleIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the kitten cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedTurtleIds = this.state.clickedTurtleIds;

    if(clickedTurtleIds.includes(id)){
      this.setState({ clickedTurtleIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedTurtleIds.push(id)

      if(clickedTurtleIds.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedTurtleIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ turtles, clickedTurtleIds, score: clickedTurtleIds.length, status: " " });

      for (let i = turtles.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
         [turtles[i], turtles[j]] =  [turtles[j], turtles[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Click</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.turtles.map(turtles => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={turtles.id}
              key={turtles.id}
              image={turtles.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p>Designed and built by Chelsea Crooke. You can find the
          code<a href="https://chelsea4crooke.github.io/ClickGame/." target="_blank" rel="noopener noreferrer"> here</a>.</p>
        </footer>
    </div>
    );
  }
}

export default App;
