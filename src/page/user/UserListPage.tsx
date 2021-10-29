import {Container} from '@mui/material';
import {Box} from '@mui/system';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {PagePagination} from '../../components/PagePagination';
import {useQueryParams} from '../../hooks/useQueryParams';
import {userActions} from '../../store/modules/user/user.actions';
import {
  getUserPageMeta,
} from '../../store/modules/user/user.selectors';
import {UserList} from './components/UserList';

export const UserListPage = () => {
  const pageMeta = useSelector(getUserPageMeta);

  const dispatch = useDispatch();
  const history = useHistory();
  const queryParams = useQueryParams();

  useEffect(() => {
    dispatch(userActions.getUsers({
      page: Number(queryParams.get('page')) || pageMeta.page,
      limit: Number(queryParams.get('limit')) || pageMeta.limit,
    }));
  }, []);

  const handleChangePage = (e: any, value: number) => {
    history.push(`?page=${value - 1}&limit=${pageMeta.limit}`);

    dispatch(userActions.getUsers({page: value - 1, limit: pageMeta.limit}));
  };

  if (pageMeta.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Container sx={{alignItems: 'center'}}>
      <UserList />
      <Box display='flex' justifyContent='center' mt='20px'>
        <PagePagination
          page={pageMeta.page}
          total={pageMeta.total}
          limit={pageMeta.limit}
          onChange={handleChangePage}
        />
      </Box>
    </Container>
  );
};
