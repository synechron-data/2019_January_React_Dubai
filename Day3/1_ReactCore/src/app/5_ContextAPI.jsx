import React, { Component } from 'react';
import DataTable from './common/DataTable';
import postAPIClient from './services/posts.service';

const DataContext = React.createContext();

const DataProvider = DataContext.Provider;
const DataConsumer = DataContext.Consumer;

class AjaxParentContext extends Component {
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
                <h2>Ajax Parent</h2>
                <h2 className="text-info">{this.state.message}</h2>
                <DataProvider value={this.state.posts}>
                    <Child1 />
                </DataProvider>
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
                <Child2 />
            </div>
        );
    }
}

class Child2 extends Component {
    render() {
        return (
            <div>
                <h2>Child 2</h2>
                <DataConsumer>
                    {data => <DataTable items={data} />}
                </DataConsumer>
            </div>
        );
    }
}


export default AjaxParentContext;       