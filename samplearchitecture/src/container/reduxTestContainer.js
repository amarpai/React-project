import React from 'react';
import {connect} from 'react-redux'
import { INCREMENT, DECREMENT, CLEAR, ADD, CLEARSTR } from '../store/actions/counterActions';

class ReduxTestContainer extends React.Component {

  render(){
    return(
      <div>
          <br/>
          Counter : {this.props.ctr}
          <br/>
          <br/>
          <button onClick={this.props.onIncrementCounter}>Increment</button>
          <button onClick={this.props.onDecrementCounter}>Decrement</button>
          <button onClick={this.props.onClear}>Clear</button>

          <br/>
          <br/>
          <div>String: {this.props.data}</div>
          <button onClick={this.props.onChangeOfData}>Add String</button>
          <button onClick={this.props.onEmptyString}>Clear String</button>
      </div>
    );
  }
}

// CTr is subscribe to reduc store
const mapStateToProps = state => {
  return {
    ctr : state.ctr.counter,
    data : state.res.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type: INCREMENT}),
    onDecrementCounter : () => dispatch({type: DECREMENT}),
    onClear : () => dispatch({type: CLEAR}),
    onChangeOfData : () => dispatch({type: ADD, payload: "Chnage Hello different"}),
    onEmptyString : () => dispatch({type: CLEARSTR, payload: ""})
  }
}

// Takes two params (redux state and Dispatcher action)
export default connect(mapStateToProps, mapDispatchToProps) (ReduxTestContainer);
