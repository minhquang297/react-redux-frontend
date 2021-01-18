import React, { Component } from 'react';
import { connect } from 'react-redux';
// import EmployeeService from '../services/EmployeeService';
import { fetchEmployees, deleteEmployee } from '../actions'

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    addEmployee() {
        this.props.history.push('/add-employee')
    }

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id) {
        this.props.deleteEmployee(id, this.cancel)
    }
    cancel() {
        this.props.history.push('/employees')
    }

    componentDidMount() {
        this.props.fetchEmployees()
    }



    render() {
        return (
            <div>
                <h2 className='textcenter'>Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add employee</button>
                </div>
                <div className="row">
                    <table className="table table-stripedtable-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {   
                                // console.log("heelo" ,this.props)

                                this.props.employees.map((employee) => 
                                (
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button
                                                onClick={() => this.editEmployee(employee.id)}
                                                className="btn btn-info">Update</button>
                                            <button
                                                style={{ marginLeft: "10px" }}
                                                onClick={() => this.deleteEmployee(employee.id)}
                                                className="btn btn-danger">Delete</button>

                                        </td>

                                    </tr>
                                )
                                )
                            }
                        </tbody>

                    </table>
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

export default connect(mapStateToProps, { fetchEmployees, deleteEmployee })(ListEmployeeComponent);