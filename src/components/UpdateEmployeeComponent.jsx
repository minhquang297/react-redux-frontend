import React, { Component } from 'react';
import { connect } from 'react-redux';
// import EmployeeService from '../services/EmployeeService';
import { fetchEmployees, editEmployee } from '../actions'

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFisrtNameHandler = this.changeFisrtNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    componentDidMount() {
        this.props.fetchEmployees();
        // console.log(this.props.employees);
        // console.log(newE[0]);

        // this.setState({
        //     firstName: newE.firstName,
        //     lastName: newE.lastName,
        //     emailId: newE.emailId
        // })
    }



    updateEmployee = (e) => {
        e.preventDefault();
        const newFirstName = this.getFirstName.value;
        const newLastName = this.getLastName.value;
        const newEmail = this.getEmailId.value;
        let employee = {
            firstName: newFirstName,
            lastName: newLastName,
            emailId: newEmail
        };
        this.props.editEmployee(employee, this.state.id, this.cancel)
    }



    changeFisrtNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees')
    }

    render() {
        return (
            <div>
                <h1>Employee Form</h1>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            {
                                this.props.employees.filter(e => e.id == this.state.id).map(employee =>

                                    <form action="">
                                        <div className="form-group">
                                            <label htmlFor="">First Name: </label>
                                            <input type="text" placeholder="First Name"
                                                name="firstName" className="form-control"
                                                defaultValue={employee.firstName}
                                                ref={(input) => this.getFirstName = input}

                                                onChange={this.changeFisrtNameHandler}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Last Name: </label>
                                            <input type="text" placeholder="Last Name"
                                                name="lastName" className="form-control"
                                                defaultValue={employee.lastName || ''}
                                                ref={(input) => this.getLastName = input}
                                                onChange={this.changeLastNameHandler}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Email ID: </label>
                                            <input type="text" placeholder="Email ID"
                                                name="emailId" className="form-control"
                                                defaultValue={employee.emailId || ''}
                                                ref={(input) => this.getEmailId = input}

                                                onChange={this.changeEmailHandler}
                                            />
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }} >Cancel</button>

                                    </form>
                                )

                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}


export default connect(mapStateToProps, { fetchEmployees, editEmployee })(UpdateEmployeeComponent);