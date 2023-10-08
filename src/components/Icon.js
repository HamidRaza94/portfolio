import PropTypes from 'prop-types';

const Icon = (props) => {
  const { Icon, size } = props;

  return (
    <div>
      <Icon
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      />
    </div>
  );
};

Icon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  size: PropTypes.number,
}

Icon.defaultProps = {
  size: 24,
}

export default Icon;
