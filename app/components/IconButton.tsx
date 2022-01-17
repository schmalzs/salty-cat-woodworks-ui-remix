import cx from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const IconButton = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={cx(
        'bg-inherit',
        'border-0',
        'cursor-pointer',
        'transition duration-300',
        'hover:-translate-y-4',
        'py-4',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
