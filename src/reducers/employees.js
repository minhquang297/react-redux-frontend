import {
  ADD_EMPLOYEE,
  SET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../actions";

export default function employee(state = [], action = {}) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return action.employee ? [...state, action.employee] : state;
    case SET_EMPLOYEES:
      return action.employees;
    case UPDATE_EMPLOYEE:
      return [action.employees] 
    case DELETE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.employeeId);

    default:
      return state;
  }
}
