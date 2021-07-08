import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import classes from './FilterFeedBySport.module.css';

import { getFeed } from '../../../store/feed/feed-actions';

const FilterFeedBySport = () => {
  const [sports, setSports] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/sport`)
      .then(({ data }) => {
        setSports(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filterFeedBySport = (sport) => {
    dispatch(getFeed(sport));
    history.push('/feed/' + sport);
  };

  return (
    <div className={classes.title}>
      <Box mt={3}>
        <Typography variant={'h5'}>Choose your favorite sport</Typography>
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={2}>
        {sports.map((sportData) => {
          return (
            <Box key={sportData.id} mx={0.5} my={0.3}>
              <Chip
                label={sportData.name}
                onClick={() => filterFeedBySport(sportData.slug)}
              />
            </Box>
          );
        })}
      </Box>
    </div>
  );
};

export default FilterFeedBySport;
