import PropTypes from 'prop-types';

import { AXIS } from '@/utils/constants';

const [horizontalAxis, verticalAxis] = AXIS;

const Spacer = (props) => {
  const { size, axis, style = {}, ...delegated } = props;

  const width = axis === verticalAxis ? 1 : size;
  const height = axis === horizontalAxis ? 1 : size;

  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
      {...delegated}
    />
  );
};

Spacer.propTypes = {
  size: PropTypes.number.isRequired,
  axis: PropTypes.oneOf([horizontalAxis, verticalAxis]),
  style: PropTypes.object,
  delegated: PropTypes.object,
};

Spacer.defaultProps = {
  axis: horizontalAxis,
  style: {},
  delegated: {},
};

export default Spacer;
