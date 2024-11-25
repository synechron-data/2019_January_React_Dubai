import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.click3 = this.click3.bind(this);
    }

    click1(e) {
        console.log(this);
        console.log(e);
        e.preventDefault();
    }

    click2(e) {
        console.log(this);
        console.log(e);
        e.preventDefault();
    }

    click3(e) {
        console.log(this);
        console.log(e);
        e.preventDefault();
    }

    click4(name, e) {
        console.log(name);
        console.log(this);
        console.log(e);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <a href="http://www.google.com" onClick={this.click1}>Click One</a>
                <br />
                <a href="http://www.google.com" onClick={this.click2.bind(this)}>Click Two</a>
                <br />
                <a href="http://www.google.com" onClick={this.click3}>Click Three</a>
                <br />
                <a href="http://www.google.com" onClick={this.click4.bind(this, "Manish")}>Click Four</a>
                <br />
                <a href="http://www.google.com"
                    onClick={function (e) {
                        console.log(this);
                        console.log(e);
                        e.preventDefault();
                    }}>Click Five - Anonymous Function</a>
                <br />
                <a href="http://www.google.com"
                    onClick={(function (e) {
                        console.log(this);
                        console.log(e);
                        e.preventDefault();
                    }).bind(this)}>Click Six - Anonymous Function</a>
                <br />
                <a href="http://www.google.com"
                    onClick={(e) => {
                        console.log(this);
                        console.log(e);
                        e.preventDefault();
                    }}>Click Seven - Arrow Function</a>

                <br />
                <a href="http://www.google.com"
                    onClick={(e) => {
                        this.click3(e);
                    }}>Click Eight - Arrow Function</a>
                    <br />
                <a href="http://www.google.com"
                    onClick={(e) => {
                        this.click4("Abhijeet", e);
                    }}>Click Nine - Arrow Function</a>
            </div>
        );
    }
}

export default EventComponent;