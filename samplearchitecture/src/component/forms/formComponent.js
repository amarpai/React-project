import React from 'react';

class FormComponent extends React.Component {

  componentDidMount(){
    console.log("Form component did mounted")
  }


  componentWillMount(){
    console.log("Form component will mount")
  }

  stylesheet = {
      backgroundColor : 'red',
  }

//  If you need to set default values you can directly assign the state 
  state = {
      formData:{
        customerName: "Jone doe",
        customerAge: "23",
        customerCountry: "India",
        customerId: "123",
      }
  }

  dataSubmitHandler = () => {
      this.props.onFormSubmitHandler(this.state)
  }

  // This is to register the default value of state
  // Spread operator helps you to add new objects to existing array or object
  formHandler = (event) => {
      this.setState({
        formData: {
        ...this.state.formData,
        [event.target.name] : event.target.value
        }
      })
  }

  clearHandler = () => {
      this.setState({
        formData: {
          customerName: "",
          customerAge: "",
          customerCountry: "",
          customerId: "",
        }
      })
  }

  render() {
    return (
        <div style={{padding: '20px'}}>
            Customer ID: <input type="text" name="customerId" value={this.state.customerId} onChange={this.formHandler} /><br/>
            Name:  <input type="text" name="customerName" value={this.state.customerName} onChange={this.formHandler} /><br/>
            Age:  <input type="text" name="customerAge"  value={this.state.customerAge} onChange={this.formHandler} /><br/>
            Country:   <input type="text" name="customerCountry" value={this.state.customerCountry} onChange={this.formHandler} />
            <br/>
            <button type="button" onClick={this.dataSubmitHandler}> Click Me !! </button>
            <button style={{marginLeft: '10px', marginTop: '10px' }} type="button" onClick={this.clearHandler}> Clear Me !! </button>
        </div>
    );
  }
}

export default FormComponent;