import {Popover, Typography} from '@mui/material';
import {Box} from '@mui/system';
import {useState} from 'react';
import {User} from '../../../store/modules/user/user.types';
import {UserCard} from './UserCard';

interface UserPreviewProps {
  user: User;
}

export const UserPreview = ({user}: UserPreviewProps) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  if (!user) {
    return null;
  }

  return (
    <Box display='inline-block'>
      <Typography
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {user.firstName} {user.lastName}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <UserCard user={user} showActions={false}/>
      </Popover>
    </Box>
  );
};
