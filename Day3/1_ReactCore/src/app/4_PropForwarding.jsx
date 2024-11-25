import React, { Component } from 'react';
import DataTable from './common/DataTable';
import postAPIClient from './services/posts.service';

class AjaxParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            message: "Loading Data, please wait...."
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-info">{this.state.message}</h2>
                <Child1 data={this.state.posts}/>
            </div>
        );
    }

    componentDidMount() {
        postAPIClient.getPostsUsingPromise().then((data) => {
            this.setState({ posts: data }, () => {
                this.setState({ message: "" });
            });
        }, (eMsg) => {
            this.setState({ message: eMsg });
        });
    }
}

class Child1 extends Component {
    render() {
        return (
            <div>
                <h2>Child 1</h2>
                <Child2 data={this.props.data}/>
            </div>
        );
    }
}

class Child2 extends Component {
    render() {
        return (
            <div>
                <h2>Child 2</h2>
                <DataTable items={this.props.data} />
            </div>
        );
    }
}


export default AjaxParent;       