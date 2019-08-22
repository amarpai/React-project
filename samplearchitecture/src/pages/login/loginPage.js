import React from 'react';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {
  
  render(){
    console.log(this.props)
    return(
      <div>
        <Link to="/dashboard/cc">Go to dashboard</Link>
        <Link to="/dashboard/lq">
          <button>This is custom link</button>
          {/* <div>UserId: {this.props.location.state.userId}</div>
          <div>Name: {this.props.location.state.name}</div>
          <div>Age: {this.props.location.state.age}</div> */}
        </Link>
        LoginPage
      </div>
    );
  }
}

export default LoginPage;