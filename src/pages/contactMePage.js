import { forwardRef } from 'react';
import classNames from 'classnames';

const ContactMe = (_, ref) => {
  return (
    <div className={classNames('h-screen')}>
      Contact Me Page
    </div>
  );
}

export default forwardRef(ContactMe);