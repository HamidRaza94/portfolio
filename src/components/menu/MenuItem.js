import classNames from 'classnames';

const MenuItem = (props) => {
  const { Icon, text, id, selected, handleClick } = props;

  return (
    <div
      className={classNames(
        'flex flex-col items-center rounded-lg',
        {
          'text-white': selected,
          'dark:text-white': selected,
          'bg-primary': selected,
        },
      )}
      onClick={() => handleClick(id)}
    >
      {Icon}
      <label>{text}</label>
    </div>
  );
};

export default MenuItem;
