import classNames from 'classnames';

const Drawer = (props) => {
  const { open, children } = props;

  return (
    <div
      className={classNames(
        'fixed left-0 right-0 z-20 h-64 w-full transition-all duration-500 transform bg-white dark:bg-slate-500',
        {
          'translate-y-0': open,
          'bottom-12': open,
          'translate-y-full': !open,
          'bottom-0': !open,
        },
      )}
    >
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
}

export default Drawer;
