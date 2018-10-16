import { trimAll } from './FormatHelper';

export function validateName(name) {
  const trimName = trimAll(name);
  const MAX_LENGTH = 50;
  const MIN_LENGTH = 3;
  const re = /^[^0-9 *&^$#@!(){}\[\]\\//]+[^0-9*&^$#@!(){}\[\]\\//]+$/;

  return re.test(name) && trimName.length <= MAX_LENGTH && trimName.length >= MIN_LENGTH;
}

export function validateDescription(description) {
  const MAX_LENGTH = 200;
  const re = /^[^*&^$#@{}\[\]\\//]+[^*&^$#@{}\[\]\\//]+$/;

  return re.test(description) && description.trim().length < MAX_LENGTH;
}

export function validatePhoneNumber(phoneNumber) {
  if (phoneNumber) {
    const MIN_LENGTH = 10;
    return phoneNumber.match(/\d/g).length === MIN_LENGTH;
  }

  return false;
}

export default {};
