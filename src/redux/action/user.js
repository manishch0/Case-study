import { userAction } from "../slice/user";

export const fetchUsers = () => {
  return (dispatch) => {
    try {
      fetch("http://localhost:3000/sample.json")
        .then((res) => res.json())
        .then((result) => {
          dispatch(userAction.setUsers(result));
        })
        .catch(console.log);
    } catch (error) {
    }
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch(userAction.deleteUsers(id));
  }
}

export const updateUser = (user) => {
  return dispatch => {
    dispatch(userAction.updateUser(user))
  }
}