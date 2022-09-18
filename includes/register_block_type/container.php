<?php register_block_type( dirname(__FILE__, 3) . '/build/container', array(
  'render_callback' => 'container_dynamic_render',
  'attributes' => [
    'myAnchor' => [
      'type' => 'string',
      'default' => ''
    ],
     'className' => [
       'type' => 'string',
       'default' => ''
      ],
     'htmlElement' => [
      'type' => 'string',
      'default' => 'section'
      ],
      'FullWidthContainer' => [
        'type' => 'boolean',
        'default' => null
        ],
      'XsContainer' => [
        'type' => 'boolean',
        'default' => null
        ],
      'XsDisplay' => [
          'type' => 'string',
          'default'=> ""
          ],
      'XsMarginTop' => [
          'type' => 'string',
          'default'=> ""
          ],
      'XsMarginBottom' => [
          'type' => 'string',
          'default'=> ""
          ],
      'XsMarginLeft' => [
          'type' => 'string',
          'default'=> ""
          ],
      'XsMarginRight' => [
          'type' => 'string',
          'default'=> ""
          ],
      'XsPaddingTop' => [
          'type' => 'number',
          'default' => null
          ],
      'XsPaddingBottom' => [
           'type' => 'number',
           'default' => null
          ],
      'XsPaddingLeft' => [
            'type' => 'number',
            'default' => null
          ],
      'XsPaddingRight' => [
            'type' => 'number',
            'default' => null
          ],
      'SmContainer' => [
            'type' => 'boolean',
            'default' =>  null
            ],
      'SmDisplay' => [
            'type' => 'string',
            'default'=> ""
            ],
      'SmMarginTop' => [
            'type' => 'string',
            'default'=> ""
            ],
      'SmMarginBottom' => [
            'type' => 'string',
            'default'=> ""
            ],
      'SmMarginLeft' => [
            'type' => 'string',
            'default'=> ""
            ],
      'SmMarginRight' => [
            'type' => 'string',
            'default'=> ""
            ],
      'SmPaddingTop' => [
            'type' => 'number',
            'default' => null
             ],
      'SmPaddingBottom' => [
            'type' => 'number',
            'default' => null
             ],
      'SmPaddingLeft' => [
             'type' => 'number',
             'default' => null
              ],
      'SmPaddingRight' => [
              'type' => 'number',
              'default' => null
              ],
      'MdContainer' => [
              'type' => 'boolean',
              'default' => null
              ],
      'MdDisplay' => [
              'type' => 'string',
              'default'=> ""
              ],
      'MdMarginTop' => [
              'type' => 'string',
              'default'=> ""
              ],
      'MdMarginBottom' => [
              'type' => 'string',
              'default'=> ""
              ],
      'MdMarginLeft' => [
              'type' => 'string',
              'default'=> ""
              ],
      'MdMarginRight' => [
              'type' => 'string',
              'default'=> ""
              ],
      'MdPaddingTop' => [
              'type' => 'number',
              'default' => null
              ],
      'MdPaddingBottom' => [
              'type' => 'number',
              'default' => null
              ],
      'MdPaddingLeft' => [
              'type' => 'number',
              'default' => null
              ],
      'MdPaddingRight' => [
              'type' => 'number',
              'default' => null
              ],
      'LgContainer' => [
              'type' => 'boolean',
              'default' => null
              ],
      'LgDisplay' => [
              'type' => 'string',
              'default'=> ""
              ],
      'LgMarginTop' => [
              'type' => 'string',
              'default'=> ""
              ],
      'LgMarginBottom' => [
              'type' => 'string',
              'default'=> ""
              ],
      'LgMarginLeft' => [
              'type' => 'string',
              'default'=> ""
              ],
      'LgMarginRight' => [
              'type' => 'string',
              'default'=> ""
              ],
      'LgPaddingTop' => [
              'type' => 'number',
              'default' => null
              ],
      'LgPaddingBottom' => [
              'type' => 'number',
              'default' => null
              ],
      'LgPaddingLeft' => [
              'type' => 'number',
              'default' => null
              ],
      'LgPaddingRight' => [
              'type' => 'number',
              'default' => null
              ],
      'XlContainer' => [
              'type' => 'boolean',
              'default' => null
              ],
      'XlDisplay' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XlMarginTop' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XlMarginBottom' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XlMarginLeft' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XlMarginRight' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XlPaddingTop' => [
              'type' => 'number',
              'default' => null
              ],
      'XlPaddingBottom' => [
              'type' => 'number',
              'default' => null
              ],
      'XlPaddingLeft' => [
              'type' => 'number',
              'default' => null
              ],
      'XlPaddingRight' => [
              'type' => 'number',
              'default' => null
              ],
      'XxlContainer' => [
              'type' => 'boolean',
              'default' => null
              ],
      'XxlDisplay' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XxlMarginTop' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XxlMarginBottom' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XxlMarginLeft' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XxlMarginRight' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XxlPaddingTop' => [
              'type' => 'number',
              'default' => null
              ],
      'XxlPaddingBottom' => [
              'type' => 'number',
              'default' => null
              ],
      'XxlPaddingLeft' => [
              'type' => 'number',
              'default' => null
              ],
      'XxlPaddingRight' => [
              'type' => 'number',
              'default' => null
              ],
      'XsBgUrl' => [
              'type' => 'string',
              'default' => ""
              ],
      'XsBgWidth' => [
              'type' => 'number',
              'default' => null
              ],
      'MdBgUrl' => [
              'type' => 'string',
              'default' => ""
              ],
      'MdBgWidth' => [
              'type' => 'number',
              'default' => null
              ],
      'LgBgUrl' => [
              'type' => 'string',
              'default' => ""
              ],
      'LgBgWidth' => [
              'type' => 'number',
              'default' => null
              ]
    ]
) );
?>
