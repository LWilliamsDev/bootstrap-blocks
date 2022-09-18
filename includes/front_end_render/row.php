<?php
//dynamic render function for Bootstrap row block
//please see comments for Bootstrap container block; the row block is built in a similar way
function row_dynamic_render($attributes, $content) {

	$allClasses = 'row '; //since all Bootstrap rows require the "row" class, this is hardcoded

	$breakpoint;

	foreach ($attributes as $attribute=>$value) {

		$breakpointValue = substr($attribute, 0, 2);
		$typeValue = getAttributeType($breakpointValue, $attribute);

		$breakpoint = getBreakpoint($breakpointValue);

		if ($value !== "" || (!isset($value)) || $value == true) {
			$allClasses .= transformAttribute($breakpoint,$typeValue, $value, 'front_end') . ' ';
		}


	}


	return '<div' . ' class="' . $allClasses . '"' . '>' . $content . '</div>';
}
?>
