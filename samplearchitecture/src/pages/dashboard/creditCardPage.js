import React from 'react';
import './creditCardPage.css';
import CardComponent from '../../component/cardComponent';
import Carddata from '../../data/cards.json';
import HeaderCompoment from '../../component/headerComponent';

class CreditCardPage extends React.Component {

  state={
      "headerTitle" : "This is my New title 12"
  }

  clickHandler = (data) => {
      this.setState({
        headerTitle: data
      });
  }

  renderCards = (content, index) => {
      return(
          <CardComponent {...content}
           key={index}
           clickHandler={this.clickHandler}
           />
        //   <CardComponent title={content.title} clickHandler={this.clickHandler}/>
      );
  }

  render(){
    return(
      <div>
        <HeaderCompoment headerTitle={this.state.headerTitle}/>
        <div className="cardholder">
            {/* {Carddata.map((d, index) => <CardComponent data={d} />)} */}
            {/* {Carddata.map((d, index) => this.renderCards(d, index) )} */}
            {Carddata.map(this.renderCards)}
        </div>
      </div>
    );
  }
}

export default CreditCardPage;