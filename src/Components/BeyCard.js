import React, { Component } from "react";

class BeyCard extends React.Component {
  state={
    clicked: this.props.beyObj.favorite
  }

handleClick = (event) => {
 event.target.parentElement.remove()
}

handleFavorite = (event) => {
  this.setState({clicked: !this.state.clicked})
  setTimeout(
    this.test, 2000)
}

test = () => {
  this.setState({clicked: !this.state.clicked})
}
  render() {
    return (
      <div>
        {this.state.clicked ? <p> All My Single Ladies</p> : null}
        <h3   onClick={this.handleFavorite}>{this.props.beyObj.name}</h3>
        <img  onClick={this.props.favoriteYonce} src={this.props.beyObj.img} />
      </div>
    );
  }
}

export default BeyCard;
