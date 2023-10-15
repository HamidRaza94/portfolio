import classNames from 'classnames';

const Label = (props) => {
  const { text, size = 'text-base', isThin, isBold, isItalic, style } = props;

  return (
    <p
      className={classNames(
        `text-center dark:text-gray-300 ${size} ${style}`,
        { italic: isItalic, 'font-semibold': isBold, 'font-light': isThin },
      )}
    >
      {text}
    </p>
  );
};

export default Label;
