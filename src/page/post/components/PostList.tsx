import {Grid} from '@mui/material';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postActions} from '../../../store/modules/post/post.actions';
import {getPosts} from '../../../store/modules/post/post.selectors';
import {PostCard} from './PostCard';

type PostListProps = {
  typePage: 'tag' | 'user'
}

export const PostList = ({typePage}: PostListProps) => {
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typePage === 'tag') {
      dispatch(postActions.getCountComment(posts));
    }
    // eslint-disable-next-line
  }, [posts]);

  return (
    <Grid container spacing={2} justifyContent='center' alignItems='stretch'>
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4}>
          <PostCard post={post} typePage={typePage}/>
        </Grid>
      ))}
    </Grid>
  );
};
