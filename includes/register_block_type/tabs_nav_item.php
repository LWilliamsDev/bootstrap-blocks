<?php
register_block_type( dirname(__FILE__, 3) . '/build/tabs-nav-item', array(
  	'render_callback' => 'tabs_nav_item_dynamic_render',
		'attributes' => [
			 'className' => [
				 'type' => 'string',
				 'default' => ''
				],
				'tabNavContent' => [
					'type' => 'string',
					'default' => ''
					],
          'tabTarget' => [
            'type' => 'string',
            'default' => ''
            ],
				'myAnchor' => [
					'type' => 'string',
					'default' => "",
					],
			]
	) );
  ?>
