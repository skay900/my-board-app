import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Container } from '@mui/material';

const sections = [{ title: 'Board', url: '/board' }];

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header title="Blog" sections={sections} />
      <Container maxWidth="lg" style={{ flex: '1' }}>
        {children}
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </div>
  );
}
