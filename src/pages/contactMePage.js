import { useState, useContext, forwardRef } from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PageHeading from '@/components/pageHeading';
import TextInput from '@/components/textInput';
import TextArea from '@/components/textArea';
import Button from '@/components/button';
import Label from '@/components/label';
import Spacer from '@/components/spacer';

import { THEME_MODES, URLS } from '@/utils/constants';
import ThemeModeContext from '@/contexts/ThemeModeContext';
import { isValidName, isValidEmail } from '@/utils/helper';

import PhoneCallIcon from '@/assets/icons/phone-call.svg';
import AtSignIcon from '@/assets/icons/at-sign.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';

const defaultError = { name: '', email: '', query: '' };

const ContactMe = (props, ref) => {
  const { contactNo, emailAddress } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(defaultError);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

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

  const validateNameFields = () => {
    if (!name) {
      return 'Name field is mandatory';
    } else if (name.length <= 3) {
      return 'Name field should not be less than 3 characters';
    } else if (!isValidName(name)) {
      return 'Name field is not valid';
    }

    return '';
  };

  const validateEmailFields = () => {
    if (!email) {
      return 'Email field is mandatory';
    } else if (!isValidEmail(email)) {
      return 'Email field is not valid';
    }

    return '';
  };

  const validateQueryFields = () => {
    if (!query) {
      return 'Query field is mandatory';
    } else if (query.length <= 3) {
      return 'Query field should not be less than 3 characters';
    }

    return '';
  };

  const validateFields = ({ nameValidation = false, emailValidation = false, queryValidation = false }) => {
    const nameError = nameValidation ? validateNameFields() : error.name;
    const emailError = emailValidation ? validateEmailFields() : error.email;
    const queryError = queryValidation ? validateQueryFields() : error.query;

    setError({ name: nameError, email: emailError, query: queryError });

    return !(nameError || emailError || queryError);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const isValid = validateFields({ nameValidation: true, emailValidation: true, queryValidation: true });

    if (!isValid) {
      setIsSending(false);
      setIsSubmitClicked(true);
      setTimeout(() => setIsSubmitClicked(false), 1400);

      return false;
    }

    try {
      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedQuery = query.trim();
      const url = `${URLS.sendEmail}?name=${trimmedName}&email=${trimmedEmail}&query=${trimmedQuery}`;

      const response = await fetch(url);

      if (response.ok) {
        resetFields();
      }
    } catch (err) {
      console.error('ERROR : SENDING EMAIL : ', err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={classNames('w-full flex flex-col')}>
      <PageHeading label="Get in touch!" ref={ref} />

      <div className="flex justify-around my-7">
        <Link href={`tel:${contactNo}`} className="flex flex-col justify-center items-center">
          <PhoneCallIcon fill={isLightTheme ? '': 'white'} />
          <Spacer size={10} axis="vertical" />
          <Label text={contactNo} isBold />
        </Link>

        <Link href={`mailto:${emailAddress}`} className="flex flex-col justify-center items-center">
          <AtSignIcon color={isLightTheme ? '': 'white'} />
          <Spacer size={10} axis="vertical" />
          <Label text={emailAddress} isBold />
        </Link>
      </div>

      <form noValidate onSubmit={handleSubmit}>
        <TextInput
          name="name"
          label="Your name*"
          value={name}
          error={error.name}
          onChange={handleNameChange}
          handleValidation={() => validateFields({ nameValidation: true })}
          isSubmitClicked={isSubmitClicked}
        />

        <TextInput
          name="email"
          label="Your email*"
          value={email}
          error={error.email}
          onChange={handleEmailChange}
          handleValidation={() => validateFields({ emailValidation: true })}
          isSubmitClicked={isSubmitClicked}
        />

        <TextArea
          name="query"
          label="Your query*"
          value={query}
          error={error.query}
          onChange={handleQueryChange}
          handleValidation={() => validateFields({ queryValidation: true })}
          isSubmitClicked={isSubmitClicked}
        />

        <Button
          primary
          isSubmit
          isFullWidth
          css="px-2 py-2 rounded"
          isLoading={isSending}
        >
          Send direct message
        </Button>
      </form>

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

ContactMe.propTypes = {
  contactNo: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
};

export default forwardRef(ContactMe);
