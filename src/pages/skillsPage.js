import { forwardRef } from 'react';

import Loader from '@/components/loader';
import Accordion from '@/components/accordion';
import Logo from '@/components/logo';
import useNavigation from '@/hooks/useNavigation';

import ReactJSImage from '@/assets/images/technologies/reactjs.png';
import ReduxJSImage from '@/assets/images/technologies/reduxjs.png';
import AngularImage from '@/assets/images/technologies/angular.png';
import GraphQLImage from '@/assets/images/technologies/graphql.png';
import NodeJSImage from '@/assets/images/technologies/nodejs.png';
import ExpressJSImage from '@/assets/images/technologies/expressjs.png';
import MongoDBImage from '@/assets/images/technologies/mongodb.png';
import HTML5Image from '@/assets/images/technologies/html5.png';
import CSS3Image from '@/assets/images/technologies/css3.png';
import TypeScriptImage from '@/assets/images/technologies/typescript.png';
import ApolloClientImage from '@/assets/images/technologies/apollo-client.png';
import JestImage from '@/assets/images/technologies/jest.png';
import MochaImage from '@/assets/images/technologies/mocha.png';
import ChaiImage from '@/assets/images/technologies/chai.png';
import JiraImage from '@/assets/images/technologies/jira.png';
import RedmineImage from '@/assets/images/technologies/redmine.png';
import GitHubImage from '@/assets/images/technologies/github.png';
import BitBucketImage from '@/assets/images/technologies/bitbucket.png';
import FigmaImage from '@/assets/images/technologies/figma.png';

const skillList = [
  {
    title: 'Front-end technologies',
    content: [
      {
        comp: <Loader label="React JS" count={85} />,
        logo: <Logo img={ReactJSImage} alt="React JS Logo" />,
      },
      {
        comp: <Loader label="HTML5" count={80} />,
        logo: <Logo img={HTML5Image} alt="HTML 5 Logo" />,
      },
      {
        comp: <Loader label="CSS3" count={70} />,
        logo: <Logo img={CSS3Image} alt="CSS 3 Logo" />,
      },
      {
        comp: <Loader label="Redux" count={90} />,
        logo: <Logo img={ReduxJSImage} alt="Redux JS Logo" />,
      },
      {
        comp: <Loader label="Apollo Client" count={70} />,
        logo: <Logo img={ApolloClientImage} alt="Apollo Client Logo" />,
      },
      {
        comp: <Loader label="React Native" count={25} />,
        logo: <Logo img={ReactJSImage} alt="React Native Logo" />,
      },
      {
        comp: <Loader label="Angular" count={20} />,
        logo: <Logo img={AngularImage} alt="Angular JS Logo" />,
      },
    ],
  },
  {
    title: 'Back-end technologies',
    content: [
      {
        comp: <Loader label="Node JS" count={80} />,
        logo: <Logo img={NodeJSImage} alt="Node JS Logo" />,
      },
      {
        comp: <Loader label="GraphQL" count={80} />,
        logo: <Logo img={GraphQLImage} alt="GraphQL Logo" />,
      },
      {
        comp: <Loader label="Express JS" count={85} />,
        logo: <Logo img={ExpressJSImage} alt="Express JS Logo" />,
      },
      {
        comp: <Loader label="TypeScript" count={85} />,
        logo: <Logo img={TypeScriptImage} alt="TypeScript Logo" />,
      },
    ],
  },
  {
    title: 'Database technologies',
    content: [{
      comp: <Loader label="MongoDB" count={80} />,
      logo: <Logo img={MongoDBImage} alt="Mongo DB Logo" />,
    }],
  },
  {
    title: 'Testing technologies',
    content: [
      {
        comp: <Loader label="Jest" count={80} />,
        logo: <Logo img={JestImage} alt="Jest Logo" />,
      },
      {
        comp: <Loader label="Enzyme" count={80} />,
        logo: <Logo img={JestImage} alt="Logo" />,
      },
      {
        comp: <Loader label="Mocha" count={70} />,
        logo: <Logo img={MochaImage} alt="Mocha Logo" />,
      },
      {
        comp: <Loader label="Chai" count={70} />,
        logo: <Logo img={ChaiImage} alt="Chai Logo" />,
      },
    ],
  },
  {
    title: 'Project management tool',
    content: [
      {
        comp: <Loader label="Jira" count={90} />,
        logo: <Logo img={JiraImage} alt="Jira Logo" />,
      },
      {
        comp: <Loader label="Redmine" count={80} />,
        logo: <Logo img={RedmineImage} alt="Redmine Logo" />,
      },
    ],
    // content: (
    //   <>
    //     <Loader label="Jira" count={90} />
    //     <Loader label="Redmine" count={80} />
    //   </>
    // ),
  },
  {
    title: 'Version control',
    content: [
      {
        comp: <Loader label="GIT" count={80} />,
        logo: <Logo img={GitHubImage} alt="Git Hub Logo" />,
      },
      {
        comp: <Loader label="BitBucket" count={75} />,
        logo: <Logo img={BitBucketImage} alt="Bit Bucket Logo" />,
      },
    ],
  },
  {
    title: 'Designing technologies',
    content: [{
      comp: <Loader label="Figma" count={50} />,
      logo: <Logo img={FigmaImage} alt="Figma Logo" />,
    }],
  },
];

const Skills = (_, ref) => {
  const isMobileView = useNavigation();

  return (
    <div ref={ref} className="min-h-full h-full">
      <h1 className="text-2xl text-center dark:text-gray-300 md:hidden">Skills</h1>

      {isMobileView ? <div><Accordion items={skillList} /></div> : (
        <div>
          {skillList.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="text-center">
                <h2>{skill.title}</h2>
              </div>

              <div className="flex flex-wrap w-full">
                {skill.content.map(({ comp, logo }, i) => (
                  <div key={i} className="flex w-1/3 px-3 py-1">
                    <div className="mr-2 flex items-center">{logo}</div>
                    <div className="w-full">{comp}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default forwardRef(Skills);
