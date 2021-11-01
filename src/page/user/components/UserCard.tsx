import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {Link} from 'react-router-dom';
import {User} from '../../../store/modules/user/user.types';

type UserCardProps = {
  user: User;
  showActions?: boolean
}

export const UserCard = ({user, showActions = true}: UserCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image={user.picture}
        alt='user thumbnail'
      />
      <CardContent>
        <Typography color='text.secondary' mb='12px'>
          {user.firstName} {user.lastName}
        </Typography>
        {user.countPosts || user.countPosts === 0 ?
          <Typography color='text.secondary'>
            Posts: {user.countPosts}
          </Typography> :
          null
        }
      </CardContent>
      {showActions &&
        <CardActions>
          <Link to={`/users/${user.id}`}>
            <Button size='small'>Show profile</Button>
          </Link>
          <Link to={`/users/${user.id}/post`}>
            <Button size='small'>Show posts</Button>
          </Link>
        </CardActions>
      }
    </Card>
  );
};
