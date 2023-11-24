import PropTypes from 'prop-types';

export const VARIANT = {
  standard: 'standard',
  filled: 'filled',
};

export const PROP_TYPES = {
  animate: PropTypes.bool,
  size: PropTypes.number,
  variant: PropTypes.oneOf([VARIANT.standard, VARIANT.filled]),
};

export const DEFAULT_PROPS = {
  animate: false,
  size: 24,
  variant: VARIANT.standard,
};
