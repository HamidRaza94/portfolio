import { forwardRef } from 'react';

import Loader from '@/components/loader';
import Accordion from '@/components/accordion';

const skillList = [
  {
    title: 'Front-end technologies',
    content: (
      <>
        <Loader label="React JS" count={85} />
        <Loader label="HTML5" count={80} />
        <Loader label="CSS3" count={70} />
        <Loader label="Redux" count={90} />
        <Loader label="Apollo Client" count={70} />
        <Loader label="React Native" count={25} />
      </>
    ),
  },
  {
    title: 'Back-end technologies',
    content: (
      <>
        <Loader label="Node JS" count={80} />
        <Loader label="GraphQL" count={80} />
        <Loader label="Express JS" count={85} />
        <Loader label="TypeScript" count={85} />
      </>
    ),
  },
  {
    title: 'Database technologies',
    content: <Loader label="MongoDB" count={80} />,
  },
  {
    title: 'Testing technologies',
    content: (
      <>
        <Loader label="Jest" count={80} />
        <Loader label="Enzyme" count={80} />
        <Loader label="Mocha" count={70} />
        <Loader label="Chai" count={70} />
      </>
    ),
  },
  {
    title: 'Project management tool',
    content: (
      <>
        <Loader label="Jira" count={90} />
        <Loader label="Redmine" count={80} />
      </>
    ),
  },
  {
    title: 'Version control',
    content: (
      <>
        <Loader label="GIT" count={80} />
        <Loader label="BitBucket" count={75} />
      </>
    ),
  },
  {
    title: 'Designing technologies',
    content: <Loader label="Figma" count={50} />,
  },
];

const Skills = (_, ref) => {
  return (
    <div>
      <h1 ref={ref} className="text-2xl text-center dark:text-gray-300">Skills</h1>

      <Accordion items={skillList} />
    </div>
  );
}

export default forwardRef(Skills);
