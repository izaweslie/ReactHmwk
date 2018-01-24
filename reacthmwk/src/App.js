import React, { Component } from "react";
import card from "./components/cards";
import wrapper from "./components/wrapper";
import title from "./components/title";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  
  state = {
    cards
  };

  removeCard = id => {
  
    const cards = this.state.cards.filter(card => card.id !== id);
    
    this.setState({ cards });
  };

  
  render() {
    return (
      <wrapper>
        <title>Cards List</title>
        {this.state.cards.map(card => (
          <cards
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </wrapper>
    );
  }
}

export default App;
