import I18n from 'react-native-i18n';
import { en, vi } from './languages';

export const TRANSLATIONS = {
  en,
  vi
};

I18n.fallbacks = true;

I18n.translations = TRANSLATIONS;

export const getLanguage = () => I18n.locale.substr(0, 2);

export default I18n;
