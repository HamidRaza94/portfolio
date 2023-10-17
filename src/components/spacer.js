import classNames from 'classnames';

const Spacer = (props) => {
  const { x = 1, y = 1 } = props;

  return <div className={classNames({ [`w-${x}`]: x, [`h-${y}`]: y })}></div>;
};

export default Spacer;
