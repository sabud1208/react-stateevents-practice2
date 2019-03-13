import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Favorites'
import bey from './beyImages'

class App extends Component {

  state = {
    bey: bey

  };

  favoriteYonce = (event) => {
    let chosen = this.state.bey.find(function(element){
     return element.name == event.target.parentElement.querySelector('h3').innerText
    })
    let chosenIndex = this.state.bey.indexOf(chosen)
    let newArray = this.state.bey
     newArray[chosenIndex].favorite= true

   this.setState({bey:  newArray} )

  }
  unfavoriteYonce = (event) => {
    let chosen = this.state.bey.find(function(element){
     return element.name == event.target.parentElement.querySelector('h3').innerText
    })
    let chosenIndex = this.state.bey.indexOf(chosen)
    let newArray = this.state.bey
     newArray[chosenIndex].favorite= false

   this.setState({bey:  newArray} )

  }
  render() {
    let arrayOfFavorites = this.state.bey.filter(fav => fav.favorite === true);
      console.log(arrayOfFavorites)
    return (
      <div className="container">
        <BeyContainer bey = {this.state.bey} fav = {this.favoriteYonce}/>
        <Favorites arrayOfFavs={arrayOfFavorites} fav = {this.unfavoriteYonce}/>
      </div>
    );
  }
}

export default App;
