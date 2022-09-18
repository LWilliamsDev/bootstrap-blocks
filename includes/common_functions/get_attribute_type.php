<?php
//used for loading and front end functions
//for front end functions - called only for Bootstrap Container, Row, and Column blocks
function getAttributeType($breakpointValue, $attribute) { //this function separates the breakpoint from the attribute name, and stores it in a separate variable. (For instance, it removes "Xs" from the attribute "XsContainer").
	switch ($breakpointValue) {
		case "Xx" : 	return substr($attribute, 3); break; //if breakpointValue is "Xx", it is probably an XXL breakpoint. The actual attribute name will then start from the 4th character. For instance, XxLMarginBottom - we want to get "MarginBottom" and store it in a variable.
		case "Fu" : return $attribute; break; //if breakpintValue is "Fu", it is probably the FullWidthContainer attribute. In this case, "FullWidthContainer" is the attribute name, so we want to return that as the attribute name.
		case "cl" : return $attribute; break; //if breakpointValue is "cl", it is probably the className attribute. In this case, "className" is the attribute name, so we want to return className as the attribute name.
		default : return substr($attribute, 2); break; //in all other cases, the attribute name would start from the 3rd character. For instance: XsMarginBottom - we want to get "MarginBottom" and store as a variable.

	}
}
?>
