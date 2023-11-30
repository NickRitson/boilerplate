import { Outlet } from "react-router-dom";

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AppLayout: React.FC = () => {
    return (
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <div className="py-6">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }

export default AppLayout;
