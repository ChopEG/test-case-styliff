import {useHistory} from 'react-router';
import {Box} from '@mui/material';

export const Navigation = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <Box onClick={handleClick}>
      Go back
    </Box>
  );
};
