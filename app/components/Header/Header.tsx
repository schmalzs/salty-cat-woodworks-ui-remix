import useWindowDimensions from '~/hooks/useWindowDimensions';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Link from './Link';

const ITEMS = [
  { label: 'About Us', to: '/#about-us' },
  { label: 'Meet Our Craftsman', to: '/#meet-our-craftsman' },
  { label: 'Contact Us', to: '/#contact-us' },
];

const Header = () => {
  const dimensions = useWindowDimensions();

  if (!dimensions) return null;

  const Menu = dimensions.width >= 1280 ? DesktopMenu : MobileMenu;

  return (
    <header className="p-4">
      <nav className="flex justify-start items-center">
        <Link to="/">
          <img
            className="h-100px w-100px hidden sm:block"
            alt="Salty Cat Woodworks Logo"
            src="/logo.svg"
          />
        </Link>
        <Link to="/">
          <h1 className="font-marker text-2xl sm:text-4xl ml-4">
            Salty Cat Woodworks
          </h1>
        </Link>
        <Menu items={ITEMS} />
      </nav>
    </header>
  );
};

export default Header;
