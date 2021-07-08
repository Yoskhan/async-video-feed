import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import { getUser } from '../../store/user/user-actions';

const UserProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser('12'));
  }, [dispatch]);

  const userData = useSelector((state) => state.user.user);
  return (
    <Container maxWidth="md" mt={15}>
      <Card>
        <CardHeader
          title={userData.name}
          avatar={<Avatar src={userData.avatar}></Avatar>}
        ></CardHeader>
        <Box m={3} display="flex" alignItems="center">
          <Typography variant={'h6'}>
            Country: {userData?.country?.name}
          </Typography>
          <Box ml={1}>
            <img
              src={userData?.country?.icon}
              alt={`flagIcon`}
              width="30"
              height="30"
            />
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default UserProfile;
