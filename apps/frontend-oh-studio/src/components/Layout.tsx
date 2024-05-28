import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const Layout = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
