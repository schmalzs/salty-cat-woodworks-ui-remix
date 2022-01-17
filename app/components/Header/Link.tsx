import cx from 'classnames';
import { ReactElement } from 'react';
import { Link as RemixLink, useLocation } from 'remix';
import ScrollLink from '~/components/ScrollLink';

type LinkProps = {
  children: ReactElement | string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  to: string;
};

const Link = (props: LinkProps) => {
  const location = useLocation();
  const [path, hash] = props.to.split('#');

  const className = cx(
    props.className,
    'cursor-pointer text-slate-700 hover:text-black'
  );

  return path === location.pathname && hash ? (
    <ScrollLink to={hash} className={className} onClick={props.onClick}>
      {props.children}
    </ScrollLink>
  ) : (
    <RemixLink to={props.to} className={className} onClick={props.onClick}>
      {props.children}
    </RemixLink>
  );
};

export default Link;
