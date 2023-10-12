import Image from 'next/image';
import classNames from 'classnames';

import Button from '@/components/button';
import GitHubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import DownloadIcon from '@/assets/icons/download.svg';

const AboutMe = () => {
  return (
    <div className={classNames('h-screen flex flex-col p-2')}>
      <div className={classNames('flex justify-center')}>
        <div className={classNames('grid grid-cols-1 items-center mr-4')}>
          <GitHubIcon className={classNames('dark:text-white dark:fill-white')} />
          <LinkedInIcon className={classNames('dark:text-white dark:fill-white')} />
          <FacebookIcon className={classNames('dark:text-white dark:fill-white')} />
          <InstagramIcon className={classNames('dark:text-white dark:fill-white')} />
          <TwitterIcon className={classNames('dark:text-white dark:fill-white')} />
        </div>
        <Image
          src='/dp1.jpg'
          width={250}
          height={250}
          alt="Picture of the author"
          className={classNames('rounded-full w-48 h-52')}
        />
      </div>

      <div className={classNames('flex justify-between items-center my-4')}>
        <h1 className={classNames('text-2xl dark:text-gray-300')}>About me</h1>
        <Button primary css={classNames('p-1.5')}>
          <div className={classNames('flex items-center')}>
            Get Resume&nbsp;
            <DownloadIcon />
          </div>
        </Button>
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

export default AboutMe;
