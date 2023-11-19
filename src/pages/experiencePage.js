import { useContext, forwardRef } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import PageHeading from '@/components/pageHeading';
import JourneyBar from '@/components/journeyBar';
import Label from '@/components/label';
import Logo from '@/components/logo';
import Spacer from '@/components/spacer';
import useNavigation from '@/hooks/useNavigation';

import ThemeModeContext from '@/contexts/ThemeModeContext';
import { THEME_MODES, AXIS } from '@/utils/constants';

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
import ProjectsIcon from '@/assets/icons/projects-16.svg';

const Experience = (_, ref) => {
  const { themeMode } = useContext(ThemeModeContext);
  const isMobileView = useNavigation();

  const { light } = THEME_MODES;
  const [horizontalAxis, verticalAxis] = AXIS;

  const isLightTheme = themeMode === light;

  return (
    <div className={classNames('flex flex-col items-center h-[calc(100vh)] md:h-[calc(100vh-56px)]')}>
      <PageHeading label="Experience" />
      {isMobileView ? (
        <div ref={ref} className="flex">
          <div className="flex flex-col items-end">
            <Image
              src={HTCCompanyImage}
              alt="Intersoft Company Logo"
              className="w-24 h-8"
            />

            <Spacer size={110} axis={verticalAxis} />

            <div className="flex flex-col items-end mt-10">
              <div className="flex items-center">
                <Label text="technical analyst" size="text-xl" isBold />
                <Spacer size={4} />
                <ProfileIcon color={isLightTheme ? '' : 'white'} />
              </div>
              <div className="flex items-center">
                <Label text="sept 2021 - mar 2023" isItalic isThin style="leading-5" />
                <Spacer size={4} />
                <CalenderIcon fill={isLightTheme ? '' : 'white'} />
              </div>
              <div className="flex items-center">
                <Label text="done 1 project" isThin style="leading-5" />
                <ProjectsIcon color={isLightTheme ? '' : 'white'} />
              </div>
              <Spacer size={8} axis={verticalAxis} />

              <div className="flex justify-start">
                <Logo img={ReactJSImage} alt="React JS Logo" />
                <Spacer size={8} />
                <Logo img={ReduxJSImage} alt="Redux JS Logo" />
              </div>
            </div>

            <Spacer size={45} axis={verticalAxis} />

            <Image
              src={SuccessiveCompanyImage}
              alt="Successive Technologies Company Logo"
              className="w-24 h-12"
            />
          </div>

          <Spacer size={12} />

          <div className="flex flex-col items-center mt-2">
            <JourneyBar />
            <JourneyBar />
            <JourneyBar />
          </div>

          <Spacer size={12} />

          <div className="flex flex-col items-start">
            <Spacer size={20} axis={verticalAxis} />
            <div>
              <div className="flex items-center">
                <ProfileIcon color={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="senior engineer" size="text-xl" isBold />
              </div>
              <div className="flex items-center">
                <CalenderIcon fill={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="mar 2023 - present" isItalic isThin style="leading-5" />
              </div>
              <div className="flex items-center">
                <ProjectsIcon color={isLightTheme ? '' : 'white'} />
                <Label text="done 2 projects" isThin style="leading-5" />
              </div>
              <Spacer size={8} axis={verticalAxis} />

              <div className="flex justify-start">
                <Logo img={ReactJSImage} alt="React JS Logo" />
                <Spacer size={8} />
                <Logo img={ReduxJSImage} alt="Redux JS Logo" />
                <Spacer size={8} />
                <Logo img={AngularImage} alt="Angular JS" />
              </div>
            </div>

            <Spacer size={45} axis={verticalAxis} />

            <Image
              src={isLightTheme ? IntersoftCompanyLightImage : IntersoftCompanyDarkImage}
              alt="Intersoft Company Logo"
              className="w-24 h-10"
            />

            <Spacer size={144} axis={verticalAxis} />

            <div>
              <div className="flex items-center">
                <ProfileIcon color={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="associate engineer" size="text-xl" isBold />
              </div>
              <div className="flex items-center">
                <CalenderIcon fill={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="jan 2019 - sept 2021" isItalic isThin style="leading-5" />
              </div>
              <div className="flex items-center">
                <ProjectsIcon color={isLightTheme ? '' : 'white'} />
                <Label text="done 4 projects" isThin style="leading-5" />
              </div>

              <Spacer size={8} axis={verticalAxis} />

              <div className="flex flex-wrap">
                <Logo img={ReactJSImage} alt="React JS Logo" />
                <Spacer size={8} />
                <Logo img={GraphQLImage} alt="GraphQL JS" />
                <Spacer size={8} />
                <Logo img={NodeJSImage} alt="Node JS" />
                <Spacer size={8} />
                <Logo img={ExpressJSImage} alt="Express JS" />
                <Spacer size={8} />
                <Logo img={MongoDBImage} alt="Mongo DB" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div ref={ref} className="flex flex-col justify-center h-[calc(100vh)] md:h-[calc(100vh-56px)]">
          <div className="flex flex-row items-end">
            <Image src={HTCCompanyImage} alt="HTC Global Services Logo" className="w-24 h-8" />

            <Spacer size={280} axis={horizontalAxis} />

            <div>
              <div className="flex items-center">
                <ProfileIcon color={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="senior engineer" size="text-xl" isBold />
              </div>
              <div className="flex items-center">
                <CalenderIcon fill={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="mar 2023 - present" isItalic isThin style="leading-5" />
              </div>
              <div className="flex items-center">
                <ProjectsIcon color={isLightTheme ? '' : 'white'} />
                <Label text="done 2 projects" isThin style="leading-5" />
              </div>
              <Spacer size={8} axis={horizontalAxis} />

              <div className="flex justify-start">
                <Logo img={ReactJSImage} alt="React JS Logo" />
                <Spacer size={8} />
                <Logo img={ReduxJSImage} alt="Redux JS Logo" />
              </div>
            </div>

            <Spacer size={95} axis={horizontalAxis} />

            <Image src={SuccessiveCompanyImage} alt="Successive Technologies Company Logo" className="w-24 h-12" />
          </div>

          <div className="flex flex-row items-center mt-2 ml-9">
            <JourneyBar isHorizontal height={300} />
            <JourneyBar isHorizontal height={300} />
            <JourneyBar isHorizontal height={300} />
          </div>

          <div className="flex flex-row items-start">
            <Spacer size={55} axis={horizontalAxis} />
            <div>
              <div className="flex items-center">
                <ProfileIcon color={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="senior engineer" size="text-xl" isBold />
              </div>
              <div className="flex items-center">
                <CalenderIcon fill={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="mar 2023 - present" isItalic isThin style="leading-5" />
              </div>
              <div className="flex items-center">
                <ProjectsIcon color={isLightTheme ? '' : 'white'} />
                <Label text="done 2 projects" isThin style="leading-5" />
              </div>
              <Spacer size={8} axis={horizontalAxis} />

              <div className="flex justify-start">
                <Logo img={ReactJSImage} alt="React JS Logo" />
                <Spacer size={8} />
                <Logo img={ReduxJSImage} alt="Redux JS Logo" />
                <Spacer size={8} />
                <Logo img={AngularImage} alt="Angular JS" />
              </div>
            </div>

            <Spacer size={110} axis={horizontalAxis} />

            <Image
              src={isLightTheme ? IntersoftCompanyLightImage : IntersoftCompanyDarkImage}
              alt="Intersoft Company Logo"
              className="w-24 h-10"
            />

            <Spacer size={280} axis={horizontalAxis} />

            <div>
              <div className="flex items-center">
                <ProfileIcon color={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="associate engineer" size="text-xl" isBold />
              </div>
              <div className="flex items-center">
                <CalenderIcon fill={isLightTheme ? '' : 'white'} />
                <Spacer size={4} />
                <Label text="jan 2019 - sept 2021" isItalic isThin style="leading-5" />
              </div>
              <div className="flex items-center">
                <ProjectsIcon color={isLightTheme ? '' : 'white'} />
                <Label text="done 4 projects" isThin style="leading-5" />
              </div>

              <Spacer size={8} axis={horizontalAxis} />

              <div className="flex flex-wrap">
                <Logo img={ReactJSImage} alt="React JS Logo" />
                <Spacer size={8} />
                <Logo img={GraphQLImage} alt="GraphQL JS" />
                <Spacer size={8} />
                <Logo img={NodeJSImage} alt="Node JS" />
                <Spacer size={8} />
                <Logo img={ExpressJSImage} alt="Express JS" />
                <Spacer size={8} />
                <Logo img={MongoDBImage} alt="Mongo DB" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Experience.displayName = 'Experience';

export default forwardRef(Experience);
