<?php
//dynamic render function for QR code
function qr_dynamic_render($attributes, $content) {
	$qrParams = array( //these control various attributes for the QR code
		'qrLink' => $attributes['QRLink'],
		'id' => $attributes['id'],
		'darkColor' => $attributes['darkColor'],
		'lightColor' =>  $attributes['lightColor']
	);
	//because these are scripts, they can be enqueued in the actual block. This approach doesn't work for styles, because it causes styles to be loaded outside of the HTML <head>
	wp_enqueue_script( 'qr-code-init');
	wp_localize_script('qr-code-init', 'php_var', $qrParams);

	return '<div class="download-app ' . $attributes['className'] . '" ' . 'id="' . $attributes['id'] . '"></div>';
}
?>
