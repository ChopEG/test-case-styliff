import {Button} from '@mui/material';
import {Box} from '@mui/system';
import {Link} from 'react-router-dom';

type TagListProps = {
  tags: string[]
}

export const TagList = ({tags}:TagListProps) => {
  return (
    <Box
      display='flex'
      sx={{
        justifyContent: 'space-between',
        fontSize: '8px',
        flexWrap: 'wrap',
      }}
    >
      {tags?.map((tag) => (
        <Link key={tag} to={`/tag/${tag}/post`}>
          <Button
            key={tag}
            color='primary'
            variant='contained'
            size='small'
            sx={{fontSize: '10px', marginBottom: '5px'}}
          >
            {tag}
          </Button>
        </Link>
      ))}
    </Box>
  );
};
