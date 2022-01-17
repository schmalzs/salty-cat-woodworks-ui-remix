import { ReactElement } from 'react';
import Link from './Link';

type DesktopMenuProps = {
  items: {
    label: string | ReactElement;
    to: string;
  }[];
};

const DesktopMenu = (props: DesktopMenuProps) => {
  return (
    <div className="flex flex-col justify-center">
      <ul className="flex p-0 list-none">
        {props.items.map(({ label, to }) => (
          <li
            key={`${label}|${to}`}
            className="text-xl transition duration-300 hover:-translate-y-3 ml-16"
          >
            <Link to={to} className="p-4">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopMenu;
