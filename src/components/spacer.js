import classNames from 'classnames';

const Spacer = (props) => {
  const { x, y } = props;

  const width = `w-${x}`;
  const height = `h-${y}`;

  return <div className={classNames({ [width]: x, [height]: y })}></div>;
};

export default Spacer;
