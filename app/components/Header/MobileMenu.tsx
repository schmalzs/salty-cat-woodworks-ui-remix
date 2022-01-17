import { ReactElement, useState } from 'react';
import IconButton from '~/components/IconButton';
import Link from './Link';

type Props = {
  items: {
    label: string | ReactElement;
    to: string;
  }[];
};

const MobileMenu = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-end grow">
      <IconButton className="sm:mr-2 md:mr-6" onClick={() => setOpen(!open)}>
        <img alt="Menu" src="/menu.svg" />
      </IconButton>
      {open ? (
        <div className="fixed flex flex-col items-end w-full h-full top-0 left-0 bg-white bg-opacity-95">
          <IconButton className="px-8 py-8" onClick={() => setOpen(!open)}>
            <img alt="Menu" src="/close.svg" />
          </IconButton>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">
            <ul>
              {props.items.map(({ label, to }) => (
                <li
                  key={`${label}|${to}`}
                  className="py-4 duration-300 hover:-translate-y-4 text-center cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <Link to={to} onClick={() => setOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileMenu;
