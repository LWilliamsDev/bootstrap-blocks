<?php
//used in both loading and front end functions
function getBreakpoint($breakpointValue) {
	switch ($breakpointValue) {
		case "Xs" :
		return '';
		break;
		case "Sm" :
		return 'sm';
		break;
		case "Md" :
		return 'md';
		break;
		case "Lg" :
		return 'lg';
		break;
		case "Xl" :
		return 'xl';
		break;
		case "Xx" :
		return 'xxl';
		break;
		default:
		return ''; 		//if $breakpointValue does not match any of the above values, then it is probably not a Bootstrap attribute. Therefore, we want to return a blank value to note that there is no breakpoint value.

	}

}
?>
