export function getAttributeType(attributeName) { //separate the breakpoint from the attribute name. For instance, for an attribute named "XsMarginBottom", we want to get 2 variables - const breakpoint = xs and const attributeName = MarginBottom. This function provides the attributeName = MarginBottom portion of this functionality.
  if (attributeName.startsWith("Xxl")) {
    return attributeName.substring(3); //if the attribute name starts with Xxl, then the breakpoint ends at the 3rd character and the actual attribute name begins at the 4th character. For instance, for "XxlMarginBottom", it would return "MarginBottom"
  }
  else if (attributeName == "FullWidth") { //if the attribute name equals FullWidth, then return "FullWidth" as the attribute name. This is because FullWidthContainer has no breakpoint.
    return attributeName;
  }
  else if (attributeName == "className") { //if the attribute name equals className, then return className as the attribute name. className has no breakpoint.
    return attributeName;
  }
  else {
    return attributeName.substring(2); //in all other instances, the attribute name should begin at the 3rd character. For instance "XsMarginBottom", we want to grab "MarginBottom" from this.
  }
}
