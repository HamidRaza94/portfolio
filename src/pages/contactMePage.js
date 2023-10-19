import { useState, useContext, forwardRef } from 'react';
import classNames from 'classnames';

import PageHeading from '@/components/pageHeading';
import TextInput from '@/components/textInput';
import TextArea from '@/components/textArea';
import Button from '@/components/button';
import Label from '@/components/label';
import Spacer from '@/components/spacer';
import { THEME_MODES } from '@/utils/constants';
import ThemeModeContext from '@/contexts/ThemeModeContext';

import PhoneCallIcon from '@/assets/icons/phone-call.svg';
import AtSignIcon from '@/assets/icons/at-sign.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';

const ContactMe = (_, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const { themeMode } = useContext(ThemeModeContext);

  const { light } = THEME_MODES;
  const isLightTheme = themeMode === light;

  const handleNameChange = (newName) => setName(newName);
  const handleEmailChange = (newEmail) => setEmail(newEmail);
  const handleQueryChange = (newQuery) => setQuery(newQuery);

  const resetFields = () => {
    setName('');
    setEmail('');
    setQuery('');
  };

  const handleSubmit = async () => {
    const response = await fetch(`/api/send-email?name=${name}&email=${email}&query=${query}`);
    console.log('response =>', response);

    if (response.ok) {
      resetFields();
    }
  };

  return (
    <div className={classNames('w-full flex flex-col')}>
      <PageHeading label="Get in touch!" ref={ref} />

      <div className="flex justify-around my-7">
        <div className="flex flex-col justify-center items-center">
          <PhoneCallIcon fill={isLightTheme ? '': 'white'} />
          <Spacer size={10} axis="vertical" />
          <Label text="+91 88007 52952" isBold />
        </div>

        <div className="flex flex-col justify-center items-center">
          <AtSignIcon color={isLightTheme ? '': 'white'} />
          <Spacer size={10} axis="vertical" />
          <Label text="raza.hamid09@gmail.com" isBold />
        </div>
      </div>

      <TextInput
        name="name"
        label="Your name"
        value={name}
        onChange={handleNameChange}
      />

      <TextInput
        name="email"
        label="Your email"
        value={email}
        onChange={handleEmailChange}
      />

      <TextArea
        name="query"
        label="Your query"
        value={query}
        onChange={handleQueryChange}
      />

      <Button primary css="px-2 py-2 rounded" onClick={handleSubmit}>Send direct message</Button>

      <div className="flex justify-around absolute bottom-16 w-[calc(100%-8px)]">
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
    </div>
  );
}

export default forwardRef(ContactMe);
