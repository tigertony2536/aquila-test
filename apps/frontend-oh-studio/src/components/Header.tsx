import Navigation from './Navigation';

const NavItem = [
  { text: 'Home', path: '/' },
  { text: 'Profile', path: '/profile' },
  { text: 'Contact', path: '/contact' }
];

const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full flex-col place-items-center p-8">
      <Navigation navItem={NavItem} />
    </div>
  );
};

export default Header;
