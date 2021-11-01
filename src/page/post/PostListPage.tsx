import {Typography} from '@mui/material';
import {Box} from '@mui/system';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory, useParams} from 'react-router';
import {PagePagination} from '../../components/PagePagination';
import {useQueryParams} from '../../hooks/useQueryParams';
import {postActions} from '../../store/modules/post/post.actions';
import {
  getPostPageMeta,
} from '../../store/modules/post/post.selectors';
import {UserPreview} from '../user/components/UserPreview';
import {PostList} from './components/PostList';
import {userActions} from '../../store/modules/user/user.actions';
import {getUserById} from '../../store/modules/user/user.selectors';

export const PostListPage = () => {
  const pageMeta = useSelector(getPostPageMeta);

  const dispatch = useDispatch();
  const history = useHistory();
  const queryParams = useQueryParams();
  const {tagId, userId} = useParams<{ tagId: string, userId: string}>();

  const user = useSelector((state) => getUserById(state, userId));

  const getPosts = (page: number) => {
    const payload = {
      id: userId || tagId,
      page,
      limit: Number(queryParams.get('limit')) || pageMeta.limit,
    };

    if (userId) {
      return dispatch(postActions.getPostsByUser(payload));
    }

    return dispatch(postActions.getPostsByTag(payload));
  };

  useEffect(() => {
    getPosts(Number(queryParams.get('page')) || pageMeta.page);
    if (userId) {
      dispatch(userActions.getUser(userId));
    }
    // eslint-disable-next-line
  }, [tagId, userId]);

  const handleChangePage = (e: any, value: number) => {
    history.push(`?page=${value - 1}&limit=${pageMeta.limit}`);

    getPosts(value - 1);
  };

  if (pageMeta.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Box
        textAlign='center'
        mb='15px'
      >
        {user && <UserPreview user={user}/>}
        {tagId && <Typography>
          Post by tag {tagId}
        </Typography> }
      </Box>
      <PostList
        typePage={userId ? 'user' : 'tag'}
      />
      <Box display='flex' justifyContent='center' mt='20px'>
        <PagePagination
          page={pageMeta.page}
          total={pageMeta.total}
          limit={pageMeta.limit}
          onChange={handleChangePage}
        />
      </Box>
    </>
  );
};
