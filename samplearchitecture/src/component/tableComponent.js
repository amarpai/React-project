import React from 'react';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import DeleteIcon from '@material-ui/icons/Delete';
import ViewIcon from '@material-ui/icons/Search';
import axios from 'axios';

class TableComponent extends React.Component {

    state = {
        showTable: true,
        displayData: [],
        columns: [],
    }

    componentDidMount() {
        this.getPostAPI()
    }

    getCommentsAPI = () => {
        axios.get('/posts/1/comments')
            .then((response) => {
                // handle success
                this.setState({
                    displayData: response.data,
                    columns: [
                        {
                            Header: "Post ID",
                            accessor: "postId"
                        },
                        {
                            Header: "Id",
                            accessor: "id"
                        },
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                        {
                            Header: "Email",
                            accessor: "email"
                        },
                        {
                            Header: "Body",
                            accessor: "body"
                        },
                    ]
                })
                console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    getPostAPI = () => {
        axios.get('/posts')
            .then((response) => {
                // handle success
                this.setState({
                    displayData: response.data,
                    columns: [
                        {
                            Header: "User ID",
                            accessor: "userId"
                        },
                        {
                            Header: "ID",
                            accessor: "id"
                        },
                        {
                            Header: "Title",
                            accessor: "title"
                        },
                        {
                            Header: "Body",
                            accessor: "body"
                        },
                    ]
                })
                console.log(response);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }


    columns = [
        {
            Header: "Customer ID",
            accessor: "customerId"
        },
        {
            Header: "Customer Name",
            accessor: "customerName"
        },
        {
            Header: "Customer Age",
            accessor: "customerAge",
            Cell: row => (
                <div style={{ backgroundColor: (row.original.customerAge > 20) ? 'red' : null }}>
                    {row.original.customerAge}
                    {/* {(row.original.customerAge > 50)?<div style={{backgroundColor:'red'}}>{row.original.customerAge}</div>:<div>{row.original.customerAge}</div>} */}
                </div>
            )
        },
        {
            Header: "Customer Country",
            accessor: "customerCountry"
        },
        {
            Header: "Actions",
            accessor: "customerCountry",
            Cell: row => (
                <div>
                    <ViewIcon onClick={() => this.props.onViewHandle(row.original)} />
                    <DeleteIcon onClick={() => this.props.onDeleteHandler(row.original)} />
                </div>
            )
        },

    ]

    toggleHandle = () => {
        this.setState({
            showTable: !this.state.showTable
        })
        if (this.state.showTable) {
            this.getPostAPI()
        } else {
            this.getCommentsAPI()
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleHandle()}>Toggle Table</button>
                {(this.state.showTable) ? <ReactTable
                    data={this.props.data}
                    columns={this.columns}
                    filterable
                    defaultPageSize={10}
                    className="-striped -highlight"
                /> : <div>Table is Hidden</div>}

                <ReactTable
                    data = {this.state.displayData}
                    columns = {this.state.columns}
                    filterable
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

export default TableComponent;