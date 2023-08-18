import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Home;