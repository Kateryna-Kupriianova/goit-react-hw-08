import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar /> {/* Тут розміщується загальна навігація */}
      <main>
        <Outlet /> {/* Тут будуть рендеритись дочірні маршрути */}
      </main>
    </>
  );
};

export default Layout;
