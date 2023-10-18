import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TextInput = (props) => {
  const { name, label, value, onChange, ...rest } = props;

  const [isFocused, setFocused] = useState(false);

  return (
    <div className="mb-3 p-2 rounded bg-white">
      <label htmlFor={name} className={classNames({ 'text-primary': isFocused })}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        type="text"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
          'text-blueGray-600 relative text-sm border-0 outline-none focus:outline-none w-full border-b',
          isFocused ? 'text-primary border-primary caret-primary' : '',
        )}
        {...rest}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
