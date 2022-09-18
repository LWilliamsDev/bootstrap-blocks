<?php register_block_type( dirname(__FILE__, 3) . '/build/tabs-nav', array(
  'render_callback' => 'tabs_nav_dynamic_render',
  'attributes' => [
     'className' => [
       'type' => 'string',
       'default' => ''
      ]
    ]
) );
?>
