<?php function carousel_item_dynamic_render($attributes, $content) {

	if ($attributes['isFirstBlock'] == true) {
		$activeClass = ' active';
	}
	else {
		$activeClass = '';
	}

	return '<div class="carousel-item' . $activeClass . '">' .  $content . '</div>';

}
?>
