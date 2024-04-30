export const generateUnitTag = (formId) =>
  `wpcf7-f${formId}` + Math.floor(Math.random() * 1000).toString();
