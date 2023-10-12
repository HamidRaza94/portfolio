import classNames from 'classnames';

const Loader = (props) => {
  const { label, count } = props;

  return (
    <div>
      <h3>{label}</h3>
      <div className={classNames('text-xs bg-white w-full h-4')}>
        <div
          className={classNames(`flex justify-center items-center text-white bg-primary h-4`)}
          style={{ width: `${count}%`}}
        >
          <p>{count}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
