import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <header>
      <Navigation /> {/* Навігація, яка змінюється в залежності від статусу користувача */}
    </header>
  );
};

export default AppBar;
