<?php register_block_type( dirname(__FILE__, 3) . '/build/tabs-content-panel', array(
'render_callback' => 'tabs_content_panel_dynamic_render',
  'attributes' => [
     'myAnchor' => [
       'type' => 'string',
       'default' => "",
      ],
      'isActive' => [
        'type' => 'boolean',
        'default' => false
        ],
      'className' => [
        'type' => 'string',
        'default' => ""
        ]
    ]
) );
?>
