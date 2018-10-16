import _ from 'lodash';
import I18n, { TRANSLATIONS } from '../I18n';

export const translate = key => I18n.t(key);

export const configureLocale = language => {
  I18n.locale = language;
  I18n.fallbacks = true;
};

export const setTranslations = newTranslations => {
  I18n.translations = _.merge(TRANSLATIONS, newTranslations);
};
