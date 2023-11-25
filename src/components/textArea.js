import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useAutosizeTextArea from '@/hooks/useAutosizeTextArea';

const TextArea = (props) => {
  const { name, label, value, error, onChange, handleValidation, isSubmitClicked, ...rest } = props;

  const [isFocused, setFocused] = useState(false);
  const [isTouchedOnce, setIsTouchedOnce] = useState(false);
  const textAreaRef = useRef(null);

  useAutosizeTextArea(textAreaRef.current, value);

  let labelFocusedColor = '';
  let textInputFocusedColor = '';

  if (error) {
    labelFocusedColor = 'text-red-500';
    textInputFocusedColor = 'text-red-500 border-red-500 caret-red-500';
  } else if (isFocused) {
    labelFocusedColor = 'text-primary';
    textInputFocusedColor = 'text-primary border-primary caret-primary';
  }

  return (
    <div className={classNames('mb-3 p-2 rounded bg-white', { 'animate-blinkingBg': (isSubmitClicked && error) })}>
      <label
        htmlFor={name}
        className={classNames(labelFocusedColor)}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          handleValidation();
          setIsTouchedOnce(true);
        }}
        onChange={(e) => {
          onChange(e.target.value);
          if (isTouchedOnce) {
            handleValidation(e.target.value);
          }
        }}
        ref={textAreaRef}
        className={classNames(
          'text-blueGray-600 relative text-sm border-0 outline-none focus:outline-none w-full border-b overflow-hidden resize-none bg-transparent',
          textInputFocusedColor,
        )}
        {...rest}
      />
      {error ? (
        <div className="text-xs text-red-500">
          {error}
        </div>
      ) : null}
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
  error: PropTypes.string,
  isSubmitClicked: PropTypes.bool,
};

TextArea.defaultProps = {
  error: '',
  handleValidation: () => {},
  isSubmitClicked: false,
};

export default TextArea;
