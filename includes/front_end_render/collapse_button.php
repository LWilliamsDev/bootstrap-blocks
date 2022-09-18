<?php function collapse_button_dynamic_render($attributes, $content) {
	if (!(empty($attributes['target']))) {
		return '<button type="button" data-bs-toggle="collapse" data-bs-target="#' . $attributes['target'] . '" aria-expanded="false" aria-controls="' . $attributes['target'] . '">' . $content . '</button>';
	}
}
?>
