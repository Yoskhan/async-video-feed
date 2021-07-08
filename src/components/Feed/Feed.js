import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from './Card/CardItem';
import FilterFeedBySport from './FilterFeedBySport/FilterFeedBySport';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { getFeed } from '../../store/feed/feed-actions';

const useStyles = makeStyles(() => ({
  alignItemsAndJustifyContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Feed = () => {
  const feed = useSelector((state) => state.feed.feed);
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeed());
  }, [dispatch]);

  return (
    <Container maxWidth="sm" className={classes.alignItemsAndJustifyContent}>
      <div>
        <FilterFeedBySport />
        {feed.map((item) => {
          return <CardItem key={item.id} cardData={item}></CardItem>;
        })}
      </div>
    </Container>
  );
};

export default Feed;
