import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Container } from '@mui/material';

const sections = [{ title: 'Board', url: '/board' }];

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header title="Blog" sections={sections} />
      <Container maxWidth="lg">{children}</Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </>
  );
}
