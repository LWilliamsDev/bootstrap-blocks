<?php function accordion_content_dynamic_render($attributes, $content) {
	return '<div class="accordion-collapse collapse'.  ' ' . $attributes['className'] . '" id="' . $attributes['myAnchor'] . '" aria-labelledby="' . $attributes['headerId'] . '">' . $content .'</div>';
}
?>
