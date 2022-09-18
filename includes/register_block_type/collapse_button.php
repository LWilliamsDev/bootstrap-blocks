<?php register_block_type( dirname(__FILE__, 3) . '/build/collapse-button', array(
'render_callback' => 'collapse_button_dynamic_render',
  'attributes' => [
      'className' =>
      [
        'type' => 'string',
        'default' => ''
        ],
    'target' =>
    [
      'type' => 'string',
      'default' => ''
      ],
    ]
) );
?>
