import React from "react";
import BeyCard from '../Components/BeyCard'
class BeyContainer extends React.Component {
  state = {
    yonce: []

  };


componentDidMount(){
  fetch('http://localhost:3001/beys')
  .then(response => response.json())
  .then(yonce => this.setState({ yonce }))
}

removeYonceCard = (event) =>{

let chosen = this.state.yonce.find(function(element){
  return element.name == event.target.parentElement.querySelector('h3').innerText
})
let chosenIndex = this.state.yonce.indexOf(chosen)
let newArray = this.state.yonce
newArray.splice(chosenIndex, 1)
this.setState({yonce: newArray})
}

  render() {
  let arrayOfYonceCards = this.state.yonce.map((yonceObj, index) => (
    <BeyCard key = {index} yonceObj = {yonceObj} removeYonce ={this.removeYonceCard} />
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
