import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IFormInput } from '../../types/Interfaces';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/auth-slice';
import { fetchLogin } from '../../services/AuthApi';
import kakaoLogin from '../../assets/images/button_login_kakao.png';
import NaverLoginButton from '../../components/Button/NaverLogin';
import GoogleLoginButton from '../../components/Button/GoogleLogin';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();
  const [loginError, setLoginError] = React.useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    const a = 1;
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoginError(null);

    try {
      const response = await fetchLogin(data);
      if (response.code === 200) {
        dispatch(loginSuccess(response.data));
        navigate('/');
      } else {
        setLoginError(response.message);
      }
    } catch (error) {
      setLoginError('An unexpected error occurred.');
      console.log(`error: ${JSON.stringify(error)}`);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            {loginError && (
              <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                {loginError}
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              {...register('email', { required: true })}
            />
            {errors.email && (
              <Typography color="error" variant="body2">
                This field is required
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <Typography color="error" variant="body2">
                This field is required
              </Typography>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 1 }}>
              Sign In
            </Button>

            <NaverLoginButton />

            <GoogleLoginButton />

            {/*<Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleKakaoLogin}
              sx={{
                mt: 1,
                mb: 1,
                backgroundColor: '#FEE500',
                '&:hover': {
                  backgroundColor: '#FEE500'
                },
                color: '#000',
                fontWeight: 'bold'
              }}
            >
              <img src={kakaoLogin} alt="카카오 로고" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            </Button>*/}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
