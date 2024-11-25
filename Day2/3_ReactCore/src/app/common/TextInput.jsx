import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        return (
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <input type="text" className="form-control" id={this.props.name} name={this.props.name}
                        value={this.props.value} onChange={this.props.onChange} />
                </div>
            </div>
        );
    }
}

export default TextInput;