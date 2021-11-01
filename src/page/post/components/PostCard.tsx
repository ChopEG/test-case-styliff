import {
  Card, CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import {Box} from '@mui/system';
import {Post} from '../../../store/modules/post/post.types';
import {UserPreview} from '../../user/components/UserPreview';
import {TagList} from './TagList';
import {PostComments} from './PostComments';

type PostCardProps = {
  post: Post;
  typePage: 'tag' | 'user'
}

export const PostCard = ({post, typePage}: PostCardProps) => {
  return (
    <Card sx={{height: '100%', position: 'relative'}}>
      <CardMedia
        component="img"
        height="150"
        image={post.image}
        alt='user thumbnail'
      />
      <CardContent>
        <Box mb='15px'>
          <TagList tags={post.tags}/>
        </Box>
        <Box mb='15px'>
          <Typography color='text.secondary'>
            {post.text}
          </Typography>
        </Box>

        <Box mb='15px'>
          {typePage === 'tag' ?
            <Box>
              <UserPreview user={post.owner} />
              {post.countComment || post.countComment === 0 ?
                <Typography>
                  Total comments: {post.countComment}
                </Typography> :
                null
              }
            </Box> :
            <Box mb='30px'>
              <PostComments comments={post.comments}/>
            </Box>
          }
        </Box>
      </CardContent>
      <CardActions sx={{position: 'absolute', bottom: 0}}>
        {typePage === 'user' &&
        <Typography>
            Likes: {post.likes}
        </Typography>
        }
      </CardActions>
    </Card>
  );
};
