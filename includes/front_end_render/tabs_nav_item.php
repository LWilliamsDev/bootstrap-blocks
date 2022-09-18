<?php function tabs_nav_item_dynamic_render($attributes, $content) {

	return '<li class="' . $attributes['className'] . ' nav-item" role="presentation"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-' . $attributes['tabTarget'] . '" aria-controls="tab-' . $attributes['tabTarget'] .  '" ' . 'id="' . $attributes['myAnchor'] . '">' . $attributes['tabNavContent'] . '</button></li>';
}
?>
