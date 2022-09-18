<?php
//dynamic render function for the Bootstrap container block
function container_dynamic_render($attributes, $content) {

	$allClasses = '';

	$breakpoint;

	$bgImg = '';
	$bgImgEnd = '';

	$doNotExecute = array('BgUrl', 'BgWidth', 'Anchor'); //exclude attributes like XsBgUrl, XsBgWidth, myAnchor.

	foreach ($attributes as $attribute=>$value) {

		$breakpointValue = substr($attribute, 0, 2); //separate breakpoint from $attribute; will typically be first 2 characters (like XsMarginBottom)

		$typeValue = getAttributeType($breakpointValue, $attribute); //separate $attribute from breakpoint value; for instance, XsMarginBottom would return $typeValue == MarginBottom


		if (!in_array($typeValue, $doNotExecute)) { //Run the following functions if the attribute value is not in the doNotExecuteArray. For instance, myAnchor represents the ID attribute for a specific element. That attribute is not used to add Bootstrap classes to elements, so we don't want to run the following functions for the myAnchor attribute.
			$breakpoint = getBreakpoint($breakpointValue); //returns breakpoint value in the same format that it appears for Bootstrap classes. For instance, "Xx" returns "xxl" (such as col-xxl-6), and "Xs" returns a blank value (such as col-6).

			if ($value !== "" || (!isset($value)) || $value == true) { //if the attribute's value is set, is not blank, or equals true, then add to a string of classes
				$allClasses .= transformAttribute($breakpoint,$typeValue, $value, 'front_end') . ' '; //add the appropriate Bootstrap class to a string of all classes. an extra space is added to the end to prevent scenarios where class names run into each other, for instance: col-xxl-6col-6.
			}

	  }
	}

	if (isset($attributes['myAnchor'])) { //myAnchor represents the ID attribute for the block
		$anchor = 'id=' . $attributes['myAnchor'];
	}
	else {
		$anchor = '';
	}

//the next section applies to blocks with a background image

//if the block has a background image, then add classes needed for the background image
	if ($attributes['XsBgUrl'] !== "" || $attributes['MdBgUrl'] !== "" || $attributes['LgBgUrl'] !== "") {
		$allClasses .= 'd-grid bg-img ';
		$bgImg .= '<img srcset="';
		$bgImgEnd = '" />';
	}

//build the img srcset attribute
	if ($attributes['XsBgUrl'] !== "") {
		$bgImg .= $attributes['XsBgUrl'] . ' ' . $attributes['XsBgWidth']. 'w,';
	}

	if ($attributes['MdBgUrl'] !== "") {
		$bgImg .= $attributes['MdBgUrl'] . ' ' . $attributes['MdBgWidth'] . 'w,';
	}

	if ($attributes['LgBgUrl'] !== "") {
	$bgImg .= $attributes['LgBgUrl'] . ' '. $attributes['LgBgWidth'] . 'w';
	}

	//add the closing tag for the whole $bgImg string
	$bgImg .= $bgImgEnd;

	//build the entire HTML tag
	return '<' . $attributes['htmlElement'] . ' class="' . $allClasses . '"' . $anchor . '>' . $bgImg . $content . '</' . $attributes['htmlElement'] .'>';
}
?>
