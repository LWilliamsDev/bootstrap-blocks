//dynamically builds bootstrap classes
export function addClasses(breakpoint, type, value) {
  let breakpointWithDashes;

  if (breakpoint == 'xs') { //if this is Xs breakpoint, Bootstrap 5 no longer includes "xs" in the class name.
    breakpointWithDashes = '-';
  }
  else { //in all other instances, return something like "-sm-", as part of "col-sm-6"
    breakpointWithDashes = '-'+breakpoint+'-';
  }

  switch (type) { //switch statement going over the attribute name without the breakpoint
    case "FullWidthContainer" : return "container-fluid";
    break;
    case "Container" :
      if (breakpoint == 'xs') { return 'container'; }
      else { return 'container-'+breakpoint; }
    break;
    case "Display" :
      return "d"+breakpointWithDashes+value; //would return something like "d-lg-block"
    break;
    case "MarginTop" :
      return "mt"+breakpointWithDashes+value;
    break;
    case "MarginBottom" :
      return "mb"+breakpointWithDashes+value;
    break;
    case "MarginLeft" :
      return "ms"+breakpointWithDashes+value;
    break;
    case "MarginRight" :
      return "me"+breakpointWithDashes+value;
    break;
    case "PaddingTop" :
      return "pt"+breakpointWithDashes+value;
    break;
    case "PaddingBottom" :
      return "pb"+breakpointWithDashes+value;
    break;
    case "PaddingLeft" :
      return "ps"+breakpointWithDashes+value;
    break;
    case "PaddingRight" :
      return "pe"+breakpointWithDashes+value;
    break;
    case "Col" :
      return "col"+breakpointWithDashes+value;
    break;
    case "Offset" :
      return "offset"+breakpointWithDashes+value;
    break;
    case "FlexBasis" :
      return "flex-basis"+breakpointWithDashes+value;
    break;
    case "AlignSelf" :
      return "align-self"+breakpointWithDashes+value;
    break;
    case "JustifyContent" :
      return "justify-content"+breakpointWithDashes+value;
    break;
    case "AlignItems" :
      return "align-items"+breakpointWithDashes+value;
    break;
    case "Wrap" :
      return "flex"+breakpointWithDashes+value;
    break;
    case "AlignContent" :
      return "align-content"+breakpointWithDashes+value;
    break;
    case "Gx" :
      return "gx"+breakpointWithDashes+value;
    break;
    case "Gy" :
      return "gy"+breakpointWithDashes+value;
    break;
    case "className" : //className is tied to the block's "Advanced CSS class(es)" in the Advanced panel. Due to this, we just want to return the text stored in that text box.
      return value;
    break;
    default:
      return ''; //return blank string if attribute name does not match any of the above cases.
  }
}
