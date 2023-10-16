import { forwardRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Button from '@/components/button';

import MyPhoto from '@/assets/images/myPhoto/dp1.jpg';

import GitHubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import DownloadIcon from '@/assets/icons/download.svg';

const AboutMe = (_, ref) => {
  return (
    <div className={classNames('flex flex-col')}>
      <div className={classNames('flex justify-center')}>
        <div className={classNames('grid grid-cols-1 items-center mr-4')}>
          <a href="https://github.com/HamidRaza94" target='_blank'>
            <GitHubIcon className={classNames('dark:text-white dark:fill-white')} />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-hamid-raza-4b6a82152" target='_blank'>
            <LinkedInIcon className={classNames('dark:text-white dark:fill-white')} />
          </a>
          <FacebookIcon className={classNames('dark:text-white dark:fill-white')} />
          <InstagramIcon className={classNames('dark:text-white dark:fill-white')} />
          <TwitterIcon className={classNames('dark:text-white dark:fill-white')} />
        </div>
        <Image
          src={MyPhoto}
          width={200}
          height={200}
          alt="Picture of the author"
          className={classNames('w-48 h-52 dp-about-me')}
        />
      </div>

      <div className={classNames('flex justify-between items-center my-4')}>
        <h1 ref={ref} className={classNames('text-2xl dark:text-gray-300')}>About me</h1>
        <a
          href="/resume.pdf"
          download="Mohammad Hamid Raza's Resume"
          target="_blank"
          rel="noreferrer"
        >
          <Button primary noPadding css="p-1.5">
            <div className={classNames('flex items-center')}>
              Get Resume&nbsp;
              <DownloadIcon />
            </div>
          </Button>
        </a>
      </div>

      <p className={classNames('text-xl dark:text-gray-300')}>
        Passionate programmer with a knack for learning new languages, producing quality work.
        Passionate programmer with a knack for learning new languages, producing quality work.
        Passionate programmer with a knack for learning new languages, producing quality work.
        Passionate programmer with a knack for learning new languages, producing quality work.
      </p>
    </div>
  );
}

export default forwardRef(AboutMe);
