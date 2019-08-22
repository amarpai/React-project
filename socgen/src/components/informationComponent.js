import React, {Component} from 'react';

class InformationComponent extends Component{
    render(){
        return(
          <div className="flex-container informationArea">
            <div className="downCard">Information 1</div>
            <div className="downCard">Information 2</div>
          </div>
        );
    }
}

export default InformationComponent;