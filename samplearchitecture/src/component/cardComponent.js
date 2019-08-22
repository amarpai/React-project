import React from 'react';

class CardComponent extends React.Component {

  pressHandler = () => {
    this.props.clickHandler(this.props.title)
  }

  render() {
    return (
      <div className="card" onClick={this.pressHandler}>
        <div className="cardImage"> {this.props.title} </div>
        <div className="cardTitle" onClick={()=>this.props.clickHandler(this.props.description)}> {this.props.description} </div>
      </div>
    );
  }
}

export default CardComponent;