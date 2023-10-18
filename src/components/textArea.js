import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useAutosizeTextArea from '@/hooks/useAutosizeTextArea';

const TextArea = (props) => {
  const { name, label, value, onChange, ...rest } = props;

  const [isFocused, setFocused] = useState(false);
  const textAreaRef = useRef(null);

  useAutosizeTextArea(textAreaRef.current, value);

  return (
    <div className="mb-3 p-2 rounded bg-white">
      <label
        htmlFor={name}
        className={classNames({ 'text-primary': isFocused })}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        ref={textAreaRef}
        className={classNames(
          'text-blueGray-600 relative text-sm border-0 outline-none focus:outline-none w-full border-b overflow-hidden resize-none',
          isFocused ? 'text-primary border-primary caret-primary' : '',
        )}
        {...rest}
      />
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
