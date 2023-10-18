import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AXIS } from '@/utils/constants';

const [horizontalAxis, verticalAxis] = AXIS;

const Divider = (props) => {
  const { axis, style } = props;

  const isVerticalAxis = axis === verticalAxis;

  return (
    <div
      className={classNames(
        'h-px w-full bg-black rounded opacity-10',
        { 'w-px': isVerticalAxis, 'h-full': isVerticalAxis },
        style,
      )}
    />
  );
};

Divider.propTypes = {
  axis: PropTypes.oneOf(AXIS),
};

Divider.defaultProps = {
  axis: horizontalAxis,
};

export default Divider;
