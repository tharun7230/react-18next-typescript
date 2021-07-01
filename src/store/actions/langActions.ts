import { LangAction, STE_LANGUAGE } from '../types';

// Set language
export const setLanguage = (lang: string): LangAction => {
  this.lang.setItem('language', lang);
  return {
    type: SEE_LANGUAGE,
    payload: lang
  }
}