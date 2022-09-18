<?php function carousel_container_dynamic_render($attributes, $content) {

	if ($attributes['carouselControls'] == true) {
			$controls = '<button class="carousel-control-prev" type="button" data-bs-target="#' . $attributes['myAnchor'] . '" data-bs-slide="prev">
    		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
    		<span class="visually-hidden">Previous</span>
  			</button>
  			<button class="carousel-control-next" type="button" data-bs-target="#' . $attributes['myAnchor'] . '" data-bs-slide="next">
    		<span class="carousel-control-next-icon" aria-hidden="true"></span>
    		<span class="visually-hidden">Next</span>
  			</button></div>';
	}
	else {
			$controls = '';
	}
	return '<div id="' . $attributes['myAnchor'] . '" class="carousel slide" data-bs-ride="carousel">' . '<div class="carousel-inner">' . $content . '</div>' . $controls;

}
?>
