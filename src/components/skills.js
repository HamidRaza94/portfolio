import classNames from 'classnames';

import Loader from '@/components/loader';

const Skills = () => {
  return (
    <div className={classNames('min-h-screen p-2')}>
      <h1 className={classNames('text-2xl text-center')}>Skills</h1>
      <div className={classNames('mt-5')}>
        <h1>Front end technologies</h1>
        <div className={classNames('mx-3')}>
          <Loader label="React JS" count={85} />
          <Loader label="HTML5" count={80} />
          <Loader label="CSS3" count={70} />
          <Loader label="Redux" count={90} />
          <Loader label="Apollo Client" count={70} />
          <Loader label="React Native" count={25} />
        </div>
      </div>

      <div className={classNames('mt-5')}>
        <h1>Back end technologies</h1>
        <div className={classNames('mx-3')}>
          <Loader label="Node JS" count={80} />
          <Loader label="GraphQL" count={80} />
          <Loader label="Express JS" count={85} />
          <Loader label="TypeScript" count={85} />
        </div>
      </div>

      <div className={classNames('mt-5')}>
        <h1>Database technologies</h1>
        <div className={classNames('mx-3')}>
          <Loader label="MongoDB" count={80} />
        </div>
      </div>

      <div className={classNames('mt-5')}>
        <h1>Testing technologies</h1>
        <div className={classNames('mx-3')}>
          <Loader label="Jest" count={80} />
          <Loader label="Enzyme" count={80} />
        </div>
      </div>

      <div className={classNames('mt-5')}>
        <h1>Designing technologies</h1>
        <div className={classNames('mx-3')}>
          <Loader label="Figma" count={50} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
