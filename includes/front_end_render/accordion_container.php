<?php
function accordion_container_dynamic_render($attributes, $content) {
	return '<div class="accordion'.  ' ' . $attributes['className'] . '" id="' . $attributes['myAnchor'] . '">' . $content .'</div>';
}
?>
