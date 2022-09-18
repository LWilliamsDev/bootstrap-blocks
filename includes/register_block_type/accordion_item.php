<?php register_block_type( dirname(__FILE__, 3) . '/build/accordion-item', array(
  'render_callback' => 'accordion_item_dynamic_render',
  'attributes' => [
     'className' => [
       'type' => 'string',
       'default' => ''
      ]
    ]
) );
?>
