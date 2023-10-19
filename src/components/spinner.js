import PropTypes from 'prop-types';

const Spinner = (props) => {
  const { size } = props;

  return (
    <div className={`border-t-primary border-solid animate-spin rounded-full border-white border-2 h-${size} w-${size}`} />
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: 6,
};

export default Spinner;
