import { forwardRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Button from '@/components/button';
import RightIcon from '@/assets/icons/right.svg';

// h-[calc(100vh-48px)]
const Home = (_, ref) => {
  return (
    <div className={classNames('h-screen flex flex-col p-2')}>
      <div className={classNames('flex flex-col items-center')}>
        <Image
          src='/dp1.jpg'
          width={200}
          height={200}
          alt="Picture of the author"
          className={classNames('w-48 h-52 dp-home')}
        />
        <br />
        <h1 ref={ref} className={classNames('text-2xl font-semibold dark:text-gray-100')}>Hi, I am</h1>
        <h1 className={classNames('text-2xl font-semibold dark:text-gray-100')}>Mohammad Hamid Raza</h1>
        <h2 className={classNames('text-lg text-gray-400')}>Full stack developer | MERN</h2>
      </div>
      <div className={classNames('p-2')}>
        <p className={classNames('text-xl dark:text-gray-300')}>Passionate programmer with a knack for learning new languages, producing quality work.</p>
        <br />
        <Button primary>
          <div className={classNames('flex items-center')}>
            Contact Me
            <RightIcon />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default forwardRef(Home);