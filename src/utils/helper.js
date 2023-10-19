import { NAME_REGEX, EMAIL_REGEX } from './regex';

export const isValidName = (name) => NAME_REGEX.test(name);
export const isValidEmail = (email) => EMAIL_REGEX.test(email);
