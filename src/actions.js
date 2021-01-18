import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";

export function setEmployees(employees) {
  return {
    type: SET_EMPLOYEES,
    employees,
  };
}

export function updateEmployee(employees, employeeId) {
  return {
    type: UPDATE_EMPLOYEE,
    employees,
    employeeId
  };
}

function addEmployee(employee) {
  return {
    type: ADD_EMPLOYEE,
    employee,
  };
}

function removeEmployee(employeeId) {
  return {
    type: DELETE_EMPLOYEE,
    employeeId,
  };
}

export function fetchEmployees() {
  return (dispatch) => {
    fetch(EMPLOYEE_API_BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setEmployees(data));
      });
  };
}

// export function fetchEmployeeById(employeeId) {
//   return (dispatch) => {
//     fetch(EMPLOYEE_API_BASE_URL + "/" + employeeId)
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch(setEmployees(data));
//       });
//   };
// }

export function saveEmployee(data, redirect) {
  console.log(data);
  return (dispatch) => {
    fetch(EMPLOYEE_API_BASE_URL, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addEmployee(data));
        redirect();
      });
  };
}

export function editEmployee(data, employeeId, redirect) {
  return (dispatch) => {
    fetch(EMPLOYEE_API_BASE_URL + "/" + employeeId, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        dispatch(updateEmployee(data, employeeId));
        redirect();
      });
  };
}

export function deleteEmployee(employeeId, redirect) {
  return (dispatch) => {
    fetch(EMPLOYEE_API_BASE_URL + "/" + employeeId, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(removeEmployee(employeeId));
        redirect();
      });
  };
}
