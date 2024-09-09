import React from 'react';
import { redirectToGoogle } from '../../services/AuthApi';
import googleLogin from '../../assets/images/button_login_google.png';
import Button from '@mui/material/Button';

// 구글 로그인 버튼을 표시하는 컴포넌트
const GoogleLoginButton: React.FC = () => {
  const handleLogin = () => {
    redirectToGoogle();
  };

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      onClick={handleLogin}
      sx={{
        mb: 1,
        backgroundColor: '#e8eaed',
        '&:hover': {
          backgroundColor: '#e8eaed'
        },
        fontWeight: 'bold'
      }}
    >
      <img
        src={googleLogin}
        alt="Google Logo"
        style={{
          height: 26,
          verticalAlign: 'middle'
        }}
      />
    </Button>
  );
};

export default GoogleLoginButton;
