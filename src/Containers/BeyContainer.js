import React from "react";
import BeyCard from '../Components/BeyCard'



class BeyContainer extends React.Component {
  state = {
    bey: this.props.bey
  };




  render() {
  let arrayOfYonceCards = this.state.bey.map((beyObj, index) => (
    <BeyCard key = {index} beyObj = {beyObj} favoriteYonce ={this.props.fav} />
  ))


  console.log(arrayOfYonceCards)
    return (
      <div className="index">
        <h1>Index</h1>
        {arrayOfYonceCards}

      </div>
    );
  }
}

export default BeyContainer;
