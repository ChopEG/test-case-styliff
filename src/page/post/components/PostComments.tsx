import {Comment} from '../../../store/modules/post/post.types';
import {Avatar, Box, Typography} from '@mui/material';

type PostCommentsProps = {
  comments: Comment[]
}

export const PostComments = ({comments}: PostCommentsProps) => {
  return <Box display='flex' flexDirection='column'>
    <Typography mb='10px'>Comments</Typography>
    {comments?.length ? comments.slice(0, 2).map((comment) =>
      <Box key={comment.id} mb='10px'>
        <Box display='flex' alignItems='center' mb='15px'>
          <Avatar
            src={comment.owner.picture}
            alt={comment.owner.firstName}
          />
          <Typography ml='10px'>
            {comment.owner.firstName} {comment.owner.lastName}
          </Typography>
        </Box>
        <Typography>
          {comment.message}
        </Typography>
      </Box>) : 'No comments'
    }
  </Box>;
};
