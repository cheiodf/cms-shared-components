import en from '../../public/static/locales/en/';
import es from '../../public/static/locales/es/';

/**
 * @param {string} page - page
 * @returns {object} - t
 */
function useTranslation(page) {
  let lang;

  switch (localStorage.lang) {
    case 'en':
      lang = en;
      break;
    case 'es':
      lang = es;
      break;
    default:
      lang = es;
      break;
  }

  const t = key => lang[page][key];

  return { t };
}

export default useTranslation;
