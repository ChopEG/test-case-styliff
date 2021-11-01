import {Pagination} from '@mui/material';

type PagePaginationProps = {
  page: number,
  limit: number,
  total: number,
  onChange: any;
}

export const PagePagination = (
  {page, limit, total, onChange}: PagePaginationProps,
) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <Pagination
      count={totalPages}
      page={page + 1}
      onChange={onChange}
      sx={{display: 'flex', justifyContent: 'center'}}
    />
  );
};
