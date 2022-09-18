<?php function tabs_content_panel_dynamic_render($attributes, $content) {
	return '<div class="' . $attributes['className'] . ' tab-pane"' . ' id="tab-' . $attributes['myAnchor'] . '">' . $content . '</div>';
}
?>
