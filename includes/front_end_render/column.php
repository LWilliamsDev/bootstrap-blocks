<?php
//dynamic render function for Bootstrap Column block. Please see notes in Bootstrap Container block, as this block is built in a similar fashion.
function column_dynamic_render($attributes, $content) {

	$allClasses = '';

	$breakpoint;


	foreach ($attributes as $attribute=>$value) {

		$breakpointValue = substr($attribute, 0, 2);

		$typeValue = getAttributeType($breakpointValue, $attribute);


		$breakpoint = getBreakpoint($breakpointValue);

		if ($value !== "" || (!isset($value)) || $value == true) {
			$allClasses .= transformAttribute($breakpoint,$typeValue, $value, 'front_end') . ' ';
		}

	}


	return '<div class="' . $allClasses . '">' . $content . '</div>';
}
?>
