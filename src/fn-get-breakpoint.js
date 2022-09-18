export function getBreakpoint(attributeName) {
  if (attributeName == "Xx") { //if breakpoint is Xxl, return xxl
    return "xxl";
  }
  else if (attributeName == "Fu") { //if breakpoint is "Fu", this is FullWidthContainer attribute. Return nothing, because this is not really a breakpoint.
    return "";
  }
  else if (attributeName == "cl") { //if breakpoint is "cl", this is className attribute. Return nothing, because this is not really a breakpoint.
    return "";
  }
  else {
    return attributeName.toLowerCase(); //in all other cases, transform breakpoint to lowercase, for instance "Sm" becomes "sm"
  }
}
