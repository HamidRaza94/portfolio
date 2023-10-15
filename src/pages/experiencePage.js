import { forwardRef } from 'react';
import classNames from 'classnames';

import PageHeading from '@/components/pageHeading';
import JourneyStatus from '@/components/journeyStatus';

const Experience = (_, ref) => {
  return (
    <div className={classNames('flex flex-col items-center')}>
      <PageHeading label="Experience" ref={ref} />

      <JourneyStatus />
    </div>
  );
}

export default forwardRef(Experience);
