import React from 'react';

class HeaderComponent extends React.Component {
    render(){
        return(
            <div className="header">
                {this.props.headerTitle}
            </div>
        );
    }
}

export default HeaderComponent;