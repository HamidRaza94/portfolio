import { forwardRef } from 'react';
import classNames from 'classnames';

import PageHeading from '@/components/pageHeading';
import JourneyBar from '@/components/journeyBar';
import Label from '@/components/label';
import useNavigation from '@/hooks/useNavigation';

const Education = (_, ref) => {
  const isMobileView = useNavigation();

  return (
    <div className={classNames('flex flex-col')}>
      <PageHeading label="Education" ref={ref} />

      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
        <div className="flex justify-start sm:flex-col-reverse sm:items-start">
          <JourneyBar height={isMobileView ? 110 : 300} isHorizontal={!isMobileView} />

          <div className="ml-2 sm:ml-5">
            <Label text="B Tech" size="text-xl" isBold style="leading-4" />
            <Label text="northern india engineering college" isBold />
            <Label text="july 2015 - aug 2018" isItalic />
            <Label text="computer science and engineering" isItalic />
            <Label text="located in delhi" isItalic />
          </div>
        </div>

        <div className="flex justify-start sm:flex-col-reverse sm:items-start">
          <JourneyBar height={isMobileView ? 110 : 300} isHorizontal={!isMobileView} />

          <div className="ml-2 sm:ml-5">
            <Label text="Diploma" size="text-xl" isBold style="leading-4" />
            <Label text="guru nanak dev polytechnic" isBold />
            <Label text="july 2012 - aug 2015" isItalic />
            <Label text="computer science and engineering" isItalic />
            <Label text="located in delhi" isItalic />
          </div>
        </div>

        <div className="flex justify-start sm:flex-col-reverse sm:items-start">
          <JourneyBar height={isMobileView ? 110 : 300} isHorizontal={!isMobileView} />

          <div className="ml-2 sm:ml-5">
            <Label text="Xth" size="text-xl" isBold style="leading-4" />
            <Label text="govt boys senior secondary school" isBold />
            <Label text="july 2010 - aug 2011" isItalic />
            <Label text="all subject" isItalic />
            <Label text="located in delhi" isItalic />
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Education);
