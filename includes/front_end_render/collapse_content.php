<?php function collapse_content_dynamic_render($attributes, $content) {
	return '<div class="collapse" id="' . $attributes['myAnchor'] . '">' . $content . '</div>';

}
?>
