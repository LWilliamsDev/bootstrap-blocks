<?php register_block_type( dirname(__FILE__, 3) . '/build/carousel-item', array(
'render_callback' => 'carousel_item_dynamic_render',
  'attributes' => [
      'className' =>
      [
        'type' => 'string',
        'default' => ''
        ],
    'isFirstBlock' =>
    [
      'type' => 'boolean',
      'default' => false
      ],
    ]
) );
?>
