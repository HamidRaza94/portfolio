import { forwardRef } from 'react';
import classNames from 'classnames';

import Loader from '@/components/loader';
import Accordion from '@/components/accordion';

const accordionItems = [
  {
    title: 'Front end technologies',
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
    title: 'Back end technologies',
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
    <div className={classNames('min-h-screen p-2')}>
      <h1 ref={ref} className={classNames('text-2xl text-center dark:text-gray-300')}>Skills</h1>

      <Accordion items={accordionItems} />
    </div>
  );
}

export default forwardRef(Skills);
