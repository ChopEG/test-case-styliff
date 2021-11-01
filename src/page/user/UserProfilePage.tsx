import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {
  getUserById,
  getUserPageMeta,
} from '../../store/modules/user/user.selectors';
import {useEffect} from 'react';
import {userActions} from '../../store/modules/user/user.actions';
import {Box, Paper, Typography} from '@mui/material';
import {UserFull} from '../../store/modules/user/user.types';

export const UserProfilePage = () => {
  const {id} = useParams<{id: string}>();

  const user = useSelector((state) => getUserById(state, id)) as UserFull;
  const pageMeta = useSelector(getUserPageMeta);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser(id));
  }, [dispatch, id]);

  if (pageMeta.isLoading) {
    return <Box>Loading</Box>;
  }

  if (!user) {
    return <Box>User not found!</Box>;
  }

  return (
    <Paper
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '10px',
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={user?.picture}
          alt={user.firstName + '' + user.lastName}
        />
      </Box>
      <Box>
        <Typography variant='h5'>Personal info</Typography>
        <Typography>First name: {user.firstName}</Typography>
        <Typography>Last name: {user.lastName}</Typography>
        <Typography>Gender: {user.gender}</Typography>
        <Typography>
            Date of birth: {new Date(user.dateOfBirth).toLocaleDateString()}
        </Typography>
        <Typography>Phone: {user.phone}</Typography>
      </Box>
      <Box>
        <Typography variant='h5'>Location:</Typography>
        <Typography>Country:{user?.location?.country}</Typography>
        <Typography>State:{user?.location?.state}</Typography>
        <Typography>City:{user?.location?.city}</Typography>
        <Typography>Street:{user?.location?.street}</Typography>
        <Typography>Timezone:{user?.location?.timezone}</Typography>
      </Box>
      <Box>
        <Typography variant='h5'>Account info</Typography>
        <Typography>
            Registration date: {new Date(user.registerDate)
            .toLocaleDateString()
          }
        </Typography>
        <Typography>Email: {user.email}</Typography>
      </Box>
    </Paper>
  );
};
