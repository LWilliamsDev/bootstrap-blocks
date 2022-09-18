<?php
register_block_type( dirname(__FILE__, 3) . '/build/tabs-container', array(
  'render_callback' => 'tabs_container_dynamic_render',
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
