import { forwardRef } from 'react';
import classNames from 'classnames';

import PageHeading from '@/components/pageHeading';
import JourneyBar from '@/components/journeyBar';
import Label from '@/components/label';
// import Spacer from '@/components/spacer';

import { AXIS } from '@/utils/constants';

const Education = (_, ref) => {
  // const [, verticalAxis] = AXIS;

  return (
    <div className={classNames('flex flex-col')}>
      <PageHeading label="Education" ref={ref} />

      <div>
        <div className="flex justify-start">
          <JourneyBar height={110} />

          <div className="ml-2">
            <Label text="B Tech" size="text-xl" isBold style="leading-4" />
            <Label text="northern india engineering college" isBold />
            <Label text="july 2015 - aug 2018" isItalic />
            <Label text="computer science and engineering" isItalic />
            <Label text="located in delhi" isItalic />
          </div>
        </div>

        <div className="flex justify-start">
          <JourneyBar height={110} />

          <div className="ml-2">
            <Label text="Diploma" size="text-xl" isBold style="leading-4" />
            <Label text="guru nanak dev polytechnic" isBold />
            <Label text="july 2012 - aug 2015" isItalic />
            <Label text="computer science and engineering" isItalic />
            <Label text="located in delhi" isItalic />
          </div>
        </div>

        <div className="flex justify-start">
          <JourneyBar height={110} />

          <div className="ml-2">
            <Label text="Xth" size="text-xl" isBold style="leading-4" />
            <Label text="govt boys senior secondary school" isBold />
            <Label text="july 2010 - aug 2011" isItalic />
            <Label text="all subject" isItalic />
            <Label text="located in delhi" isItalic />
          </div>
        </div>
      </div>

      {/* <div className="flex">
        <div className="flex flex-col items-end">
          <Label text="B Tech" size="text-xl" isBold />

          <div className="flex flex-col items-end">
            <Label text="guru nanak dev polytechnic" isBold style="text-end" />
            <Label text="july 2012 - aug 2015" isItalic style="text-end" />
            <Label text="computer science & engineering" isItalic style="text-end" />
            <Label text="located in delhi" isItalic style="text-end" />
          </div>
        </div>

        <Spacer size={12} />

        <div className="flex flex-col items-center mt-1">
          <JourneyBar height={110} />
          <JourneyBar />
          <JourneyBar />
        </div>

        <Spacer size={12} />

        <div className="flex flex-col items-start">
          <Spacer size={20} axis={verticalAxis} />
          <div className="flex flex-col items-start">
            <Label text="northern india engineering college" isBold />
            <Label text="july 2015 - aug 2018" isItalic />
            <Label text="computer science & engineering" isItalic />
            <Label text="located in delhi" isItalic />
          </div>

          <Spacer size={15} axis={verticalAxis} />
          <Label text="Diploma" size="text-xl" isBold />
        </div>
      </div> */}
    </div>
  );
}

export default forwardRef(Education);
