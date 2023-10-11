import classNames from 'classnames';

const Button = (props) => {
  const { children, noPadding, css } = props;

  return (
    <button className={classNames(noPadding ? 'p-0' : 'p-4', css)}>
      {children}
    </button>
  );
};

export default Button;
