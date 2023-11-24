import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from '@/components/spinner';

const Button = (props) => {
  const {
    children,
    isSubmit,
    primary,
    noPadding,
    css,
    isLoading,
    isFullWidth,
    ...rest
  } = props;

  let backgroundColor = 'bg-primary hover:bg-dark-primary';

  if (isLoading) {
    backgroundColor = 'bg-light-primary';
  }

  return (
    <button
      className={classNames(
        'rounded-lg flex justify-center items-center group',
        noPadding ? 'p-0' : 'p-4',
        backgroundColor,
        { 'text-white': primary, 'w-full': isFullWidth },
        css,
      )}
      disabled={isLoading}
      type={isSubmit ? 'submit' : 'button'}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  isSubmit: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  children: PropTypes.any.isRequired,
  noPadding: PropTypes.bool,
  css: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
