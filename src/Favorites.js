import React, { Component } from "react";
import BeyCard from './Components/BeyCard'
export default class Favorites extends Component {

  render() {

      console.log(this.props.arrayOfFavs)
    let arrayOfYonceCards = this.props.arrayOfFavs.map((beyObj, index) => (
      <BeyCard key = {index} beyObj = {beyObj} favoriteYonce ={this.props.fav} />
    ))
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {arrayOfYonceCards}
      </div>
    );
  }
}
