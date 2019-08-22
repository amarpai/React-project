import React from 'react';
import FormComponet from '../../component/forms/formComponent';
import TableComponent from '../../component/tableComponent';
import ViewTableComponent from '../../component/viewTableComponent'

class LiquidityPage extends React.Component {

  componentDidMount(){
    console.log("Liquidity Page did mounted")
  }

  componentWillMount(){
    console.log("liquidity page will mount")
  }

  state = {
    'viewData': {
      customerName: "--placeholder--",
      customerAge: "--placeholder--",
      customerCountry: "--placeholder--",
      customerId: "--placeholder--",
    },
    'data': [
      {
        customerName: "Jone doe",
        customerAge: "23",
        customerCountry: "India",
        customerId: "1000",
      }
    ]
  };

  onFormSubmitHandler = (formData) => {
    const dataCopy = [...this.state.data]
    dataCopy.push(formData)
    this.setState({
      data: dataCopy
    })
  }

  onDeleteHandler = (data) => {
    const copyData = this.state.data.filter((x)=>x.customerId != data.customerId)
    this.setState({
      data: copyData
    })
  }

  onViewHandle = (data) => {
    this.setState({
      viewData: data
    })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TableComponent 
          data={this.state.data}
          onDeleteHandler={this.onDeleteHandler}
          onViewHandle={this.onViewHandle}

          />
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            <FormComponet 
              onFormSubmitHandler={this.onFormSubmitHandler} 
            />
          </div>
          <div style={{ width: '50%' }}>
            <ViewTableComponent data={this.state.viewData} />
          </div>
        </div>
      </div>
    );
  }
}

export default LiquidityPage;