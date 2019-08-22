import React from 'react';
import CreditCardPage from '../pages/dashboard/creditCardPage';
import LiquidityPage from '../pages/dashboard/liquidityPage';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

class DashboardContainer extends React.Component {

  state = {
    open: false
  }

  // other way to do Routing from one page to another
  validateInteraction = () => {
    console.log(this.props)
    this.props.history.push('/login/login');
  }

  render(){
    console.log(this.props)
    const match = this.props.match;
    return(
      <div>
        <button onClick={()=> this.setState({ open: true })}>to set state and redirect</button>
        {(this.state.open)?<Redirect to="/login/login"/>:null}
        <Link
          to={
            {
              pathname :'/login/login',
              state: {
                userId: '9141',
                name: 'Amar Pai',
                age: '29',
              }
            }
          }
        ><button>Go to Login</button></Link>
        <button onClick={this.validateInteraction}>Validate</button>
        <Switch>
            <Route path={`${match.path}/cc`} exact component={CreditCardPage} />
            <Route path="/dashboard/lq" exact component={LiquidityPage} />
        </Switch>
      </div>
    );
  }
}

export default DashboardContainer;