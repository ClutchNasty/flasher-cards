import React, { Component } from 'react';
import {Container, Header, } from "semantic-ui-react"
import FlashCard from "./flashers/FlashCard.js"



class App extends Component {
  state = { 
    flashCards: [
      { id: 1, flashFront: "what is 2+2?", flashBack: "4"},
      { id: 2, flashFront: "what color is Devyn's necklace", flashBack: "Red" },
      { id: 3, flashFront: "What is 5x5?", flashBack: "25" },
    ],
  }


render() {
  return(
    <Container style={{ paddingTop: "30px"}}>
      <Header as="h2">
         Flash cards!!
         <FlashCard flashcards  = {this.state.flashCards} />
      </Header>
     </Container>

   )
  } 
}

export default App;
