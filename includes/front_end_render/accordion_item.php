<?php
function accordion_item_dynamic_render($attributes, $content) {
	return '<div class="accordion-item '.  ' ' . $attributes['className'] . '">' . $content .'</div>';
}
?>
