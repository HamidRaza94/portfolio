import classNames from 'classnames';

import { VARIANT, PROP_TYPES, DEFAULT_PROPS } from './constants';

const Download = (props) => {
  const { size, variant, animate } = props;

  if (variant === VARIANT.standard) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        stroke-width="1"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="stroke-white"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 20l16 0" />
        <g id="download_svg__arrow" className={classNames({ 'group-hover:animate-slide-down': animate })}>
          <path d="M12 14l0 -10" />
          <path d="M12 14l4 -4" />
          <path d="M12 14l-4 -4" />
        </g>
      </svg>
    );
  }

};

Download.propTypes = PROP_TYPES;
Download.defaultProps = DEFAULT_PROPS;

export default Download;
