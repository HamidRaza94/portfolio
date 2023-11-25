import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextInput = (props) => {
  const { name, label, value, error, onChange, handleValidation, isSubmitClicked, ...rest } = props;

  const [isFocused, setFocused] = useState(false);
  const [isTouchedOnce, setIsTouchedOnce] = useState(false);

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
      <label htmlFor={name} className={classNames(labelFocusedColor)}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        type="text"
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
        className={classNames(
          'text-blueGray-600 relative text-sm border-0 outline-none focus:outline-none w-full border-b bg-transparent',
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

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
  error: PropTypes.string,
  isSubmitClicked: PropTypes.bool,
};

TextInput.defaultProps = {
  error: '',
  handleValidation: () => {},
  isSubmitClicked: false,
};

export default TextInput;
