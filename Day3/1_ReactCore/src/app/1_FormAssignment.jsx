import React, { Component } from 'react';
import TextInput from './common/TextInput';
import DataTable from './common/DataTable';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { id: "", name: "", designation: "", salary: "" };
        this.updateState = this.updateState.bind(this);
        this.save = this.save.bind(this);
    }

    updateState(e) {
        const field = e.target.id;
        var newState = Object.assign({}, this.state.data);
        newState[field] = e.target.value;
        this.setState(newState);
    }

    save(e) {
        e.preventDefault();
        this.props.add(this.state);
    }

    render() {
        return (
            <form onSubmit={this.save}>
                <fieldset>
                    <legend>Add Employee Information</legend>

                    <TextInput label={"Id"} name={"id"} onChange={this.updateState} />
                    <TextInput label={"Name"} name={"name"} onChange={this.updateState} />
                    <TextInput label={"Designation"} name={"designation"} onChange={this.updateState} />
                    <TextInput label={"Salary"} name={"salary"} onChange={this.updateState} />

                    <div className="form-row">
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-success btn-block">Save</button>
                        </div>
                        <div className="col-md-3">
                            <button type="reset" className="btn btn-primary btn-block">Reset</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

class FormAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] };
        this.addEmployee = this.addEmployee.bind(this);
    }

    addEmployee(employee) {
        // this.setState({ employees: this.state.employees.concat(Object.assign({}, employee)) });
        this.setState({ employees: [...this.state.employees, Object.assign({}, employee)] });
    }

    render() {
        return (
            <div>
                <FormComponent add={this.addEmployee}/>
                <hr />
                <DataTable items={this.state.employees} />
            </div>
        );
    }
}

export default FormAssignment;