import classNames from 'classnames';

const Label = (props) => {
  const { text, isItalic } = props;

  return <p className={classNames('text-center dark:text-gray-300', { italic: isItalic })}>{text}</p>;
};

export default Label;
