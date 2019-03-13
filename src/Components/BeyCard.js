import React, { Component } from "react";

class BeyCard extends React.Component {
  state={
    clicked: this.props.yonceObj.favorite
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
        <h3   onClick={this.handleFavorite}>{this.props.yonceObj.name}</h3>
        <img id= {this.props.yonceObj.id} onClick={this.props.removeYonce} src={this.props.yonceObj.img} />
      </div>
    );
  }
}

export default BeyCard;
