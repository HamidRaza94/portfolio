import classNames from 'classnames';

const Drawer = (props) => {
  const { open, children } = props;

  return (
    <div
      className={classNames(
        'fixed left-0 right-0 z-20 h-36 w-full transition-all duration-500 transform bg-white dark:bg-dark-grey dark:text-white',
        {
          'translate-y-0': open,
          'bottom-12': open,
          'translate-y-full': !open,
          'bottom-0': !open,
        },
      )}
    >
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

export default Drawer;
