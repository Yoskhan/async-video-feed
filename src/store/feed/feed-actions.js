import { feedActions } from './feed-slice';
import axios from 'axios';

export const getFeed = (sportSlug) => {
  let sport = '';

  if (sportSlug) {
    sport = '?sport=' + sportSlug;
  }

  return async (dispatch) =>
    axios
      .get(`${process.env.REACT_APP_API_URL}/feed${sport}`)
      .then(({ data }) => {
        dispatch(feedActions.replaceFeed(data));
      })
      .catch((err) => console.error(err));
};

export const addToBookmark = (id) => {
  return (dispatch) => dispatch(feedActions.addToBookmark({ id }));
};
