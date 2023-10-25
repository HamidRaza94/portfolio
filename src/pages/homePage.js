import { useContext, forwardRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Button from '@/components/button';
import MyPhoto from '@/assets/images/myPhoto/dp1.jpg';
import RightIcon from '@/assets/icons/right.svg';
import MenuContext from '@/contexts/MenuContext';

const Home = (_, ref) => {
  const { setMenu, setMenuClicked } = useContext(MenuContext);

  const handleClick = () => {
    setMenuClicked(true);
    setMenu(8);
  };

  return (
    <div className={classNames('flex flex-col h-full sm:flex-row sm:justify-center sm:items-center')}>
      <div className={classNames('self-center sm:mx-10')}>
        <Image
          src={MyPhoto}
          width={200}
          height={200}
          alt="Picture of the author"
          className={classNames('w-48 h-52 dp-home')}
        />
        <br />
      </div>
      <div className="flex flex-col sm:w-6/12">
        <div className="flex flex-col sm:flex-row sm:w-full">
          <h1 ref={ref} className={classNames('text-2xl font-semibold dark:text-gray-100 self-center sm:self-start')}>Hi, I am&#160;</h1>
          <h1 className={classNames('text-2xl font-semibold dark:text-gray-100 self-center sm:self-start')}>Mohammad Hamid Raza</h1>
        </div>
        <h2 className={classNames('text-lg text-gray-400 self-center sm:self-start')}>Full stack developer | MERN</h2>

        <div>
          <p className={classNames('text-xl dark:text-gray-300')}>Passionate programmer with a knack for learning new languages, producing quality work.</p>
          <br />
          <Button primary onClick={handleClick}>
            <div className={classNames('flex items-center')}>
              Contact me
              <RightIcon />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Home);
