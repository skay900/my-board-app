import React from 'react';
import { redirectToNaver } from '../../services/AuthApi';
import naverLogin from '../../assets/images/button_login_naver.png';
import Button from '@mui/material/Button';

// 네이버 로그인 버튼을 표시하는 컴포넌트
const NaverLoginButton: React.FC = () => {
  const handleLogin = () => {
    redirectToNaver();
  };

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      onClick={handleLogin}
      sx={{
        mb: 1,
        backgroundColor: '#03C75A',
        '&:hover': {
          backgroundColor: '#03C75A'
        },
        fontWeight: 'bold'
      }}
    >
      <img
        src={naverLogin}
        alt="Naver Logo"
        style={{
          height: 26,
          verticalAlign: 'middle'
        }}
      />
    </Button>
  );
};

export default NaverLoginButton;
