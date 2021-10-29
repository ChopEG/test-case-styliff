import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {Box} from '@mui/system';
import {Post} from '../../../store/modules/post/post.types';
import {UserPreview} from '../../user/components/UserPreview';
import {TagList} from './TagList';

type PostCardProps = {
  post: Post;
  typePage: 'tag' | 'user'
}

export const PostCard = ({post, typePage}: PostCardProps) => {
  return (
    <Card sx={{height: '100%'}}>
      <CardMedia
        component="img"
        height="150"
        image={post.image}
        alt='user thumbnail'
      />
      <CardContent sx={{alignItems: 'flex-start'}}>
        <Typography color='text.secondary'>
          {post.text}
        </Typography>
        <Box
          display='flex'
          justifyContent='space-between'
          mb='10px'
          alignItems='flex-end'
        >
          {typePage === 'tag' ?
            <Box mb='5'>
              <Typography>Author: <UserPreview user={post.owner} /></Typography>
              <Typography>Total comments: {post.countComment}</Typography>
            </Box> :
            `Likes: {post.likes}`
          }
        </Box>
        <Box>
          <TagList tags={post.tags}/>
        </Box>
      </CardContent>
    </Card>
  );
};
