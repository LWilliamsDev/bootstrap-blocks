<?php register_block_type( dirname(__FILE__, 3) . '/build/carousel-container', array(
'render_callback' => 'carousel_container_dynamic_render',
  'attributes' => [
      'className' =>
      [
        'type' => 'string',
        'default' => ''
        ],
      'carouselControls' =>
      [
        'type' => 'boolean',
        'default' => true
        ],
      'myAnchor' =>
      [
        'type' => 'string',
        'default' => ''
      ],

    ]
) );
?>
