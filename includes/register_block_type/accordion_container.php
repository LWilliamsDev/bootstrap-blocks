<?php register_block_type( dirname(__FILE__, 3) . '/build/accordion-container', array(
  'render_callback' => 'accordion_container_dynamic_render',
  'attributes' => [
    'myAnchor' => [
      'type' => 'string',
      'default' => ''
    ],
     'className' => [
       'type' => 'string',
       'default' => ''
      ]
    ]
) );
?>
