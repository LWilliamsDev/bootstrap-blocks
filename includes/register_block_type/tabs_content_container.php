<?php register_block_type( dirname(__FILE__, 3) . '/build/tabs-content-container', array(
  'render_callback' => 'tabs_content_container_dynamic_render',
  'attributes' => [
     'className' => [
       'type' => 'string',
       'default' => ''
      ],
      ]

  ) );
  ?>
