import * as React from 'react';
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
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormInput } from '../../types/Interfaces';
import { fetchRegister } from '../../services/UserApi';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();
  const [registerError, setRegisterError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setRegisterError(null);

    if (data.password !== data.password2) {
      setRegisterError('비밀번호가 일치하지 않습니다.');

      return;
    }

    try {
      const response = await fetchRegister(data);
      if (response.code === 200) {
        alert(`${response.data.name}님 회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.`);
        navigate('/login');
      } else {
        setRegisterError(response.message);
      }
    } catch (error) {
      setRegisterError('An unexpected error occurred.');
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            {registerError && (
              <Typography color="error" variant="body2" sx={{ mb: 2 }}>
                {registerError}
              </Typography>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  autoFocus
                  {...register('password', { required: true })}
                />
                {errors.password && (
                  <Typography color="error" variant="body2">
                    This field is required
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Check Password"
                  type="password"
                  id="password2"
                  autoComplete="check-password"
                  autoFocus
                  {...register('password2', { required: true })}
                />
                {errors.password2 && (
                  <Typography color="error" variant="body2">
                    This field is required
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <Typography color="error" variant="body2">
                    This field is required
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  autoFocus
                  {...register('phone', { required: true })}
                />
                {errors.phone && (
                  <Typography color="error" variant="body2">
                    This field is required
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterPage;
