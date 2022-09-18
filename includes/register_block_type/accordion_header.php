<?php register_block_type(dirname(__FILE__, 3) . '/build/accordion-header', array(
  'render_callback' => 'accordion_header_dynamic_render',
  'attributes' => [
    'myAnchor' => [
      'type' => 'string',
      'default' => ''
    ],
     'className' => [
       'type' => 'string',
       'default' => ''
      ],
      'target' =>[
      'type' => 'string',
      'default' => ''
    ],
    'level' => [
      'type' => 'string',
      'default' => '2'
      ],
      'content' => [
        'type' => 'string',
        'default' => ''
        ]
    ]
) );
?>
