import { useContext, forwardRef } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import PageHeading from '@/components/pageHeading';
import JourneyBar from '@/components/journeyBar';
import Label from '@/components/label';
import Logo from '@/components/logo';
import Spacer from '@/components/spacer';

import ThemeModeContext from '@/contexts/ThemeModeContext';

import IntersoftCompanyLightImage from '@/assets/images/companies/intersoft-light.png';
import IntersoftCompanyDarkImage from '@/assets/images/companies/intersoft-dark.png';
import HTCCompanyImage from '@/assets/images/companies/htc.png';
import SuccessiveCompanyImage from '@/assets/images/companies/successive-technologies.png';
import ReactJSImage from '@/assets/images/technologies/reactjs.png';
import ReduxJSImage from '@/assets/images/technologies/reduxjs.png';
import AngularImage from '@/assets/images/technologies/angular.png';
import GraphQLImage from '@/assets/images/technologies/graphql.png';
import NodeJSImage from '@/assets/images/technologies/nodejs.png';
import ExpressJSImage from '@/assets/images/technologies/expressjs.png';
import MongoDBImage from '@/assets/images/technologies/mongodb.png';
import ProfileIcon from '@/assets/icons/profile.svg';
import CalenderIcon from '@/assets/icons/calender.svg';
import ProjectsIcon from '@/assets/icons/projects-16*16.svg';

const Experience = (_, ref) => {
  const { themeMode } = useContext(ThemeModeContext);

  const isLightTheme = themeMode === 'light';

  return (
    <div className={classNames('flex flex-col items-center')}>
      <PageHeading label="Experience" ref={ref} />

      <div className="flex">
        <div className="flex flex-col items-end">
          <Image
            src={HTCCompanyImage}
            alt="Intersoft Company Logo"
            className="w-24 h-8"
          />

          {/* <Spacer y={32} /> */}
          <div style={{ height: 128 }}></div>

          <div className="flex flex-col items-end mt-10">
            <div className="flex items-center">
              <Label text="technical analyst" size="text-xl" isBold />
              {/* <Spacer x={1} /> */}
              <div style={{ width: 4 }}></div>
              <ProfileIcon color={isLightTheme ? '' : 'white'} />
            </div>
            <div className="flex items-center">
              <Label text="sept 2021 - mar 2023" isItalic isThin style="leading-5" />
              {/* <Spacer x={1} /> */}
              <div style={{ width: 4 }}></div>
              <CalenderIcon fill={isLightTheme ? '' : 'white'} />
            </div>
            <div className="flex items-center">
              <Label text="done 1 project" isThin style="leading-5" />
              <ProjectsIcon color={isLightTheme ? '' : 'white'} />
            </div>
            {/* <Spacer y={2} /> */}
            <div style={{ height: 8 }}></div>

            <div className="flex justify-start">
              <Logo img={ReactJSImage} alt="React JS Logo" />
              {/* <Spacer x={2} /> */}
              <div style={{ width: 8 }}></div>
              <Logo img={ReduxJSImage} alt="Redux JS Logo" />
            </div>
          </div>

          {/* <Spacer y={5} /> */}
          <div style={{ height: 20 }}></div>

          <Image
            src={SuccessiveCompanyImage}
            alt="Successive Technologies Company Logo"
            className="w-24 h-12"
          />
        </div>

        {/* <Spacer x={3} /> */}
        <div style={{ width: 12 }}></div>

        <div className="flex flex-col items-center mt-2">
          <JourneyBar />
          <JourneyBar />
          <JourneyBar />
        </div>

        {/* <Spacer x={3} /> */}
        <div style={{ width: 12 }}></div>

        <div className="flex flex-col items-start mt-8">
          <div>
            <div className="flex items-center">
              <ProfileIcon color={isLightTheme ? '' : 'white'} />
              {/* <Spacer x={1} /> */}
              <div style={{ width: 4 }}></div>
              <Label text="senior engineer" size="text-xl" isBold />
            </div>
            <div className="flex items-center">
              <CalenderIcon fill={isLightTheme ? '' : 'white'} />
              {/* <Spacer x={1} /> */}
              <div style={{ width: 4 }}></div>
              <Label text="mar 2023 - present" isItalic isThin style="leading-5" />
            </div>
            <div className="flex items-center">
              <ProjectsIcon color={isLightTheme ? '' : 'white'} />
              <Label text="done 2 projects" isThin style="leading-5" />
            </div>
            {/* <Spacer y={2} /> */}
            <div style={{ height: 8 }}></div>

            <div className="flex justify-start">
              <Logo img={ReactJSImage} alt="React JS Logo" />
              {/* <Spacer x={2} /> */}
              <div style={{ width: 8 }}></div>
              <Logo img={ReduxJSImage} alt="Redux JS Logo" />
              {/* <Spacer x={2} /> */}
              <div style={{ width: 8 }}></div>
              <Logo img={AngularImage} alt="Angular JS" />
            </div>
          </div>

          {/* <Spacer y={8} /> */}
          <div style={{ height: 32 }}></div>

          <Image
            src={isLightTheme ? IntersoftCompanyLightImage : IntersoftCompanyDarkImage}
            alt="Intersoft Company Logo"
            className="w-24 h-10"
          />

          {/* <Spacer y={36} /> */}
          <div style={{ height: 144 }}></div>

          <div>
            <div className="flex items-center">
              <ProfileIcon color={isLightTheme ? '' : 'white'} />
              {/* <Spacer x={1} /> */}
              <div style={{ width: 4 }}></div>
              <Label text="associate engineer" size="text-xl" isBold />
            </div>
            <div className="flex items-center">
              <CalenderIcon fill={isLightTheme ? '' : 'white'} />
              {/* <Spacer x={1} /> */}
              <div style={{ width: 4 }}></div>
              <Label text="jan 2019 - sept 2021" isItalic isThin style="leading-5" />
            </div>
            <div className="flex items-center">
              <ProjectsIcon color={isLightTheme ? '' : 'white'} />
              <Label text="done 4 projects" isThin style="leading-5" />
            </div>

            {/* <Spacer y={2} /> */}
            <div style={{ height: 8 }}></div>

            <div className="flex flex-wrap">
              <Logo img={ReactJSImage} alt="React JS Logo" />
              {/* <Spacer x={2} /> */}
              <div style={{ width: 8 }}></div>
              <Logo img={GraphQLImage} alt="GraphQL JS" />
              {/* <Spacer x={2} /> */}
              <div style={{ width: 8 }}></div>
              <Logo img={NodeJSImage} alt="Node JS" />
              {/* <Spacer x={2} /> */}
              <div style={{ width: 8 }}></div>
              <Logo img={ExpressJSImage} alt="Express JS" />
              {/* <Spacer x={2} /> */}
              <div style={{ width: 8 }}></div>
              <Logo img={MongoDBImage} alt="Mongo DB" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Experience);
