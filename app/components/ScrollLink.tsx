import { Link } from 'react-scroll';

type ScrollLinkProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  to: string;
};

const ScrollLink = ({ children, className, onClick, to }: ScrollLinkProps) => (
  <Link
    className={className}
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    onClick={onClick as () => void}
  >
    {children}
  </Link>
);

export default ScrollLink;
