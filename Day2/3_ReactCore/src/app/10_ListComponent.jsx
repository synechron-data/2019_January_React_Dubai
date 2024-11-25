import React, { Component } from 'react';

class ListComponent extends Component {
    render() {
        var lItems = this.props.items.map((item,index)=>{
            return <li key={index} className="list-group-item">{item.name}</li>
        });
        return (
            <ul className="list-group">
                {lItems}
            </ul>
        );
    }
}

// We can get this data from API
let employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Abhijeet" },
    { id: 3, name: "Ramakant" },
    { id: 4, name: "Subodh" },
    { id: 5, name: "Abhishek" }
];

class ListRoot extends Component {
    render() {
        return (
            <div>
                <ListComponent items={employees}/>
            </div>
        );
    }
}

export default ListRoot;