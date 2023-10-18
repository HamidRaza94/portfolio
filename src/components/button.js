import classNames from 'classnames';

const Button = (props) => {
  const { children, primary, noPadding, css, ...rest } = props;

  return (
    <button
      className={classNames(
        'rounded-lg',
        noPadding ? 'p-0' : 'p-4',
        { 'bg-primary': primary, 'text-white': primary },
        css,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
