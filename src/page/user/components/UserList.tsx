import {Grid} from '@mui/material';
import {useSelector} from 'react-redux';
import {getUsers} from '../../../store/modules/user/user.selectors';
import {UserCard} from './UserCard';

export const UserList = () => {
  const users = useSelector(getUsers);

  return (
    <Grid container spacing={2} justifyContent='center'>
      {users.map((user) => (
        <Grid key={user.id} item xs={12} sm={6} md={3}>
          <UserCard user={user}/>
        </Grid>
      ))}
    </Grid>
  );
};
