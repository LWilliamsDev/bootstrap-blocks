<?php //used in front end and loading function
//for front end functions - used only for Bootstrap Container, Row, and Column blocks
//this function rewrites the attributes to either match the naming convention for a) classes on the front end or b) script or style handle for loading function
//$context tells us whether this function is being used to write classes for the front end or to write the handle to be enqueued
function transformAttribute($breakpoint, $type, $value, $context) {

//$breakpointWithDashes is used for writing front end classes only
	if ($breakpoint == '') {
		$breakpointWithDashes = '-';
	}
	else {
		$breakpointWithDashes =  '-' . $breakpoint . '-';
	}

	switch ($type) { //set the front end class name or script/style handle name based on what the attribute name is.
		case "Container" : //container classes are loaded globally, so we don't need a value for $loading_transform
			if ($breakpoint == '') {
				$front_end_transform = 'container';
			}
			else {
				$front_end_transform = 'container-' . $breakpoint;
			}
		break;
		case "FullWidthContainer" : //container classes are loaded globally, so we don't need a value for $loading_transform
			$front_end_transform =  'container-fluid ';
		break;
		case "Display" :
			$front_end_transform =  'd' . $breakpointWithDashes . $value;
			$loading_transform = 'display';
		break;
		case "MarginTop" :
			$front_end_transform = 'mt' . $breakpointWithDashes . $value;
			$loading_transform = 'margin-top';
		break;
		case "MarginBottom" :
			$front_end_transform = 'mb' . $breakpointWithDashes . $value;
			$loading_transform = 'margin-bottom';
		break;
		case "MarginLeft" :
			$front_end_transform = 'ms' . $breakpointWithDashes . $value;
			$loading_transform = 'margin-left';
		break;
		case "MarginRight" :
			$front_end_transform = 'me' . $breakpointWithDashes . $value;
			$loading_transform = 'margin-right';
		break;
		case "PaddingTop" :
			$front_end_transform = 'pt' . $breakpointWithDashes . $value;
			$loading_transform = 'padding-top';
		break;
		case "PaddingBottom" :
			$front_end_transform = 'pb' . $breakpointWithDashes . $value;
			$loading_transform = 'padding-bottom';
		break;
		case "PaddingLeft" :
			$front_end_transform = 'ps' . $breakpointWithDashes . $value;
			$loading_transform = 'padding-left';
		break;
		case "PaddingRight" :
			$front_end_transform = 'pe' . $breakpointWithDashes . $value;
			$loading_transform = 'padding-right';
		break;
		case "JustifyContent" :
			$front_end_transform = 'justify-content' . $breakpointWithDashes . $value;
			$loading_transform = 'justify-content';
		break;
		case "AlignItems" :
			$front_end_transform = 'align-items' . $breakpointWithDashes . $value;
			$loading_transform = 'align-items';
		break;
		case "Wrap" :
			$front_end_transform = 'flex' . $breakpointWithDashes . $value;
			$loading_transform = 'wrap';
		break;
		case "AlignContent" :
			$front_end_transform = 'align-content' . $breakpointWithDashes . $value;
			$loading_transform = 'align-content';
		break;
		case "Gx" :
			$front_end_transform = 'gx' . $breakpointWithDashes . $value;
			$loading_transform = 'gutters';
		break;
		case "Gy" :
			$front_end_transform = 'gy' . $breakpointWithDashes . $value;
			$loading_transform = 'gutters';
		break;
		case "Col" :
			$front_end_transform = 'col' . $breakpointWithDashes . $value;
			$loading_transform = 'col';
		break;
		case "Offset" :
			$front_end_transform = 'offset' . $breakpointWithDashes . $value;
		break;
		case "AlignSelf" :
			$front_end_transform = 'align-self' . $breakpointWithDashes . $value;
			$loading_transform = 'align-self';
		break;
		case "FlexBasis" :
			$front_end_transform = 'flex-basis' . $breakpointWithDashes . $value;
			$loading_transform = 'flex-basis';
		break;
		case "BgUrl" : //classes for this attribute are hardcoded, so no front_end_transform is needed.
			$loading_transform = "bg-img";
			break;
		case "className" : //this attribute contains the value in the Gutenberg "Advanced > Additional CSS class(es)" box. It doesn't need a loading value, and the front end class does not need to be changed to meet Bootstrap class names.
		$front_end_transform = $value;
		break;
		default: $front_end_transform = ""; $loading_transform = ''; break; //if $type does not match any of the above conditions, return blank strings
	}
	if ($context == 'front_end' && isset($front_end_transform)) { //if this is for front end classes and the $front_end_transform variable has a value, then return it
		return $front_end_transform;
	}
	else if ($context == 'loading' && isset($loading_transform)){ //if this is for enqueuing styles/scripts and $loading_transform variable has a value, then return it
		if ($value > 0 || !empty($value)) {
			return $loading_transform;
		}
	}
}
?>
