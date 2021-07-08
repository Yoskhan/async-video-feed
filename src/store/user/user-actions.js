import { userActions } from './user-slice';
import axios from 'axios';

export const getUser = (id) => {
  return async (dispatch) =>
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${id}`)
      .then(({ data }) => {
        dispatch(userActions.getUser(data));
      })
      .catch((err) => console.error(err));
};
