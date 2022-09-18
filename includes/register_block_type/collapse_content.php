<?php register_block_type( dirname(__FILE__, 3) . '/build/collapse-content', array(
'render_callback' => 'collapse_content_dynamic_render',
  'attributes' => [
      'className' =>
      [
        'type' => 'string',
        'default' => ''
        ],
    'myAnchor' =>
    [
      'type' => 'string',
      'default' => ''
      ],
    ]
) );
?>
