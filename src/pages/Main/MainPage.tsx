import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, selectUserInfo } from '../../redux/auth-slice';
import { fetchUserInfo } from '../../services/AuthApi';
import Cookies from 'js-cookie';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://picsum.photos/1100/350',
  imageText: 'main image description',
  linkText: 'Continue reading…'
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/200/300',
    imageLabel: 'Image Text'
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://picsum.photos/200/300',
    imageLabel: 'Image Text'
  }
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' }
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon }
  ]
};

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

const MainPage = (props: MainProps) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

  console.log('Main isAuthenticated : ', userInfo.isAuthenticated);
  console.log('Main accessToken : ', userInfo.accessToken);
  console.log('Main email : ', userInfo.email);
  console.log('Main name : ', userInfo.name);
  console.log('Main phone : ', userInfo.phone);

  useEffect(() => {
    // 만약 인증되지 않았다면 쿠키에서 accessToken을 가져와 유저 정보를 로드
    if (!userInfo.isAuthenticated) {
      const email = Cookies.get('email');
      const accessToken = Cookies.get('accessToken');
      if (email && accessToken) {
        fetchUserInfo()
          .then((userData) => {
            // 성공 시 Redux 스토어에 유저 정보 업데이트
            dispatch(
              loginSuccess({
                accessToken,
                email: userData.data.email,
                name: userData.data.name,
                phone: userData.data.phone
              })
            );
          })
          .catch((error) => {
            console.error('Error fetching user info:', error);
          });
      }
    }
  }, [dispatch, userInfo.isAuthenticated]);

  return (
    <main>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </main>
  );
};

export default MainPage;
