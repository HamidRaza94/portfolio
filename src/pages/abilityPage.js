import { forwardRef } from 'react';
import classNames from 'classnames';

const Ability = (_, ref) => {
  return (
    <div className={classNames('h-screen')}>
      Ability Page
    </div>
  );
}

export default forwardRef(Ability);
