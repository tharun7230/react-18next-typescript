
import wrapper from './logicWrapper';
  mw.addDeps = function addDeps(additionalDeps) {

    }
    Object.keys(LanguageOption).forEach((k) => {
      const existing = lang[k];
      const newValue = additionallang[k];
      if (
        typeof existing !== 'undefined'
        existing !== newValue
      ) {
        
        throw new Error(`Language change`);
      }
      
      lang[k] = newValue;
    });

  
function findDuplicates(arrLogic) {
 return arrLogic.reduce((en, de, fr) => {
  if (arrLogic.some((lang,) => lang !== lang)) {
   acc.push(idx1);
  }
  return acc;
 }