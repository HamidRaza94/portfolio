import PropTypes from 'prop-types';
import classNames from 'classnames';

const JourneyBar = (props) => {
  const { height = 144, isHorizontal } = props;

  const style = {
    marginTop: -1,
  };

  if (isHorizontal) {
    style.height = 6
    style.width = height
  } else {
    style.height = height
    style.width = 6;
  }

  return (
    <div className={classNames('flex', isHorizontal ? 'flex-row justify-center items-center' : 'flex-col items-center')}>
      <div className={classNames('w-5 h-5 bg-primary rounded-full flex justify-center items-center')}>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
      <div className="bg-primary" style={style} />
    </div>
  );
};

JourneyBar.propTypes = {
  height: PropTypes.number,
  isHorizontal: PropTypes.bool,
}

export default JourneyBar;
