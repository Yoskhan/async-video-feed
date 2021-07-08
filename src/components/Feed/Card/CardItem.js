import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Chip from '@material-ui/core/Chip';

import { addToBookmark } from '../../../store/feed/feed-actions';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 'sm',
    margintop: 20,
  },
  media: {
    height: 310,
    width: '100%',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));

const CardItem = ({ cardData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addToBookmarkHandler = (id) => {
    dispatch(addToBookmark(id));
  };

  return (
    <Box mb={8} mt={8}>
      <Card className={classes.root} elevation={3}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {cardData.author.name[0].toUpperCase()}
            </Avatar>
          }
          title={cardData.author.name}
          subheader={format(new Date(cardData.createdAt), 'do MMMM Y')}
          action={
            <IconButton
              aria-label="add to bookmarks"
              onClick={() => addToBookmarkHandler(cardData.id)}
            >
              <BookmarkIcon
                style={cardData.bookmarked === true ? { color: 'red' } : null}
              />
            </IconButton>
          }
        />
        <CardMedia
          className={classes.media}
          component="iframe"
          image={cardData.video.url}
          type="video/mp4"
          title={cardData.video.handler}
          allowFullScreen="allowFullScreen"
          frameBorder="0"
        />
        <CardContent>
          <Chip
            label={cardData.views}
            icon={<VisibilityIcon />}
            variant="outlined"
            size="small"
          ></Chip>
        </CardContent>
        <CardContent>
          <Typography variant="overline" display="block" gutterBottom>
            Description:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardData.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardItem;
