import { addClasses } from './fn-add-classes.js';

export function printClasses(attributeValue, breakpoint, typeValue) {
switch (attributeValue) {
  case "" : case null : case undefined : case false : return ""; break;
  default : return addClasses(breakpoint, typeValue, attributeValue) +' ';
  //console.log(addClasses(breakpoint, typeValue, attributeValue) +' ');
}
}
