import { forwardRef } from 'react';
import classNames from 'classnames';

import PageHeading from '@/components/pageHeading';

import FrontEndIcon from '@/assets/icons/front-end.svg';
import BackEndIcon from '@/assets/icons/back-end.svg';
import Label from '@/components/label';
import Spacer from '@/components/spacer';

const Ability = (_, ref) => {
  return (
    <div ref={ref} className={classNames('flex flex-col items-center justify-center md:h-[calc(100vh-56px)]')}>
      <PageHeading label="Ability" />

        <div className="flex flex-col md:flex-row md:justify-around md:w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <FrontEndIcon width={150} />
            <Label text="Front-end designing" />
          </div>

          <Spacer size={150} axis="vertical" />

          <div className="flex flex-col justify-center items-center">
            <BackEndIcon width={150} />
            <Label text="Back-end designing" />
          </div>
        </div>
    </div>
  );
}

export default forwardRef(Ability);
