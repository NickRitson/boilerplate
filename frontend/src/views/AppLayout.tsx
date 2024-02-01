import { Outlet } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
// import Footer from '../components/footer/Footer';

const AppLayout: React.FC = () => {
    return (
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <div>
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

export default AppLayout;