import React, { Component } from 'react';
import { authenticator } from '../services/auth.service';
import DataTable from '../common/DataTable';
import { productsApiClient } from '../services/products.service';

class AdminComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], message: "" };
    }

    componentDidMount() {
        productsApiClient.getAllProducts().then((data) => {
            this.setState({ products: data, message: "" });
        }, (eMsg) => {
            this.setState({ message: eMsg });
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-info">Admin Component</h1>
                <h4 className="text-success">Welcome, you are an authenticated user.</h4>
                <hr />
                <h2 className="text-danger">{this.state.message}</h2>
                <DataTable items={this.state.products} />
            </div>
        );
    }

    componentWillUnmount() {
        authenticator.logout();
    }
}

export default AdminComponent;