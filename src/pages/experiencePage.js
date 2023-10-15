import { forwardRef } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import PageHeading from '@/components/pageHeading';
import JourneyBar from '@/components/journeyBar';
import Label from '@/components/label';
import Logo from '@/components/logo';
import Spacer from '@/components/spacer';

import ProfileIcon from '@/assets/icons/profile.svg';
import CalenderIcon from '@/assets/icons/calender.svg';
import ProjectsIcon from '@/assets/icons/projects-16*16.svg';
import IntersoftCompanyImage from '@/assets/images/intersoft-dark.png';
import ReactJSImage from '@/assets/images/reactjs.png';
import ReduxJSImage from '@/assets/images/reduxjs.png';

const Experience = (_, ref) => {
  return (
    <div className={classNames('flex flex-col items-center')}>
      <PageHeading label="Experience" ref={ref} />

      <div className="flex">
      <Image
        src={IntersoftCompanyImage}
        alt="Intersoft Company Logo"
        className="w-24 h-10"
      />

      <Spacer x={3} />

      <div className="flex flex-col items-center mt-3">
        <JourneyBar />
        <JourneyBar />
        <JourneyBar />
      </div>

      <Spacer x={3} />

      <div className="flex flex-col items-start mt-10">
        <div className="flex items-center">
          <ProfileIcon />
          <Spacer x={1} />
          <Label text="technical analyst" size="text-xl" isBold />
        </div>
        <div className="flex items-center">
          <CalenderIcon />
          <Spacer x={1} />
          <Label text="sept 2021 - mar 2023" isItalic isThin style="leading-5" />
        </div>
        <div className="flex items-center">
          <ProjectsIcon />
          <Label text="done 1 project" isThin style="leading-5" />
        </div>
        <Spacer y={2} />

        <div className="flex justify-start">
          <Logo img={ReactJSImage} alt="React JS Logo" />
          <Spacer x={2} />
          <Logo img={ReduxJSImage} alt="Redux JS Logo" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default forwardRef(Experience);
