import React, { Component } from 'react';
import DataTable from './common/DataTable';
import postAPIClient from './services/posts.service';

class AjaxComponent extends Component {
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
                <DataTable items={this.state.posts} />
            </div>
        );
    }

    componentDidMount() {
        // postAPIClient.getPosts((data) => {
        //     this.setState({ posts: data }, () => {
        //         this.setState({ message: "" });
        //     });
        // }, (eMsg) => {
        //     this.setState({ message: eMsg });
        // });

        // postAPIClient.getPostsUsingPromise().then((data) => {
        //     this.setState({ posts: data }, () => {
        //         this.setState({ message: "" });
        //     });
        // }, (eMsg) => {
        //     this.setState({ message: eMsg });
        // });

        var self = this;
        postAPIClient.getPostsUsingPromise().then(function (data) {
            self.setState({ posts: data }, () => {
                self.setState({ message: "" });
            });
        }, function (eMsg) {
            self.setState({ message: eMsg });
        });
    }
}

export default AjaxComponent;       