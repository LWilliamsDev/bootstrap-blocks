<?php
function accordion_header_dynamic_render($attributes, $content) {
	return '<h' . $attributes['level'] . ' class="accordion-header" id="' . $attributes['myAnchor'] . '"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#' . $attributes['target'] . '" aria-expanded="false" aria-controls="' . $attributes['target'] . '">' . $attributes['content'] . '</button></h' . $attributes['level'] . '>';
}
?>
