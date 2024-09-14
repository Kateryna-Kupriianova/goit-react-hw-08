import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet /> {/* Тут будуть рендеритись всі дочірні маршрути */}
      </main>
    </>
  );
};

export default Layout;
