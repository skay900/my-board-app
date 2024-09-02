import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Link from '@mui/material/Link';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const Header = (props: HeaderProps) => {
  const { sections, title } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/'); // 원하는 경로로 내비게이션
  };

  const { isAuthenticated, email, name } = useSelector((state: RootState) => state.auth);

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="div"
          onClick={handleClick}
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{
            flex: 1,
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline', // Hover 시 밑줄 추가 (원하는 경우)
              cursor: 'pointer' // Hover 시 손가락 모양의 커서
            }
          }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {!isAuthenticated ? (
          <>
            <Button variant="outlined" size="small" onClick={() => navigate('/login')} sx={{ mr: 1 }}>
              Sign in
            </Button>
            <Button variant="outlined" size="small" onClick={() => navigate('/register')} sx={{ mr: 1 }}>
              Sign up
            </Button>
          </>
        ) : (
          <Button variant="outlined" size="small" onClick={() => navigate('/')} sx={{ mr: 1 }}>
            Logout
          </Button>
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflowX: 'auto'
        }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            sx={{ p: 1, flexShrink: 0, textAlign: 'left' }}
            onClick={() => navigate(section.url)}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
