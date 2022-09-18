<?php register_block_type( dirname(__FILE__, 3) . '/build/row', array(
  'render_callback' => 'row_dynamic_render',
  'attributes' => [
     'className' => [
         'type' => 'string',
         'default' => ''
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
      'XsJustifyContent' => [
            'type' => 'string',
            'default' => ""
      ],
      'XsAlignItems' => [
            'type' => 'string',
            'default' => ""
      ],
      'XsWrap' => [
            'type' => 'string',
            'default' => ""
      ],
      'XsAlignContent' => [
            'type' => 'string',
            'default' => ""
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
      'SmJustifyContent' => [
              'type' => 'string',
              'default' => ""
              ],
      'SmAlignItems' => [
              'type' => 'string',
              'default' => ""
              ],
      'SmWrap' => [
              'type' => 'string',
              'default' => ""
              ],
      'SmAlignContent' => [
              'type' => 'string',
              'default' => ""
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
      'MdJustifyContent' => [
              'type' => 'string',
              'default' => ""
              ],
      'MdAlignItems' => [
              'type' => 'string',
              'default' => ""
              ],
      'MdWrap' => [
              'type' => 'string',
              'default' => ""
              ],
      'MdAlignContent' => [
              'type' => 'string',
              'default' => ""
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
      'LgJustifyContent' => [
              'type' => 'string',
              'default' => ""
              ],
      'LgAlignItems' => [
              'type' => 'string',
              'default' => ""
              ],
      'LgWrap' => [
              'type' => 'string',
              'default' => ""
              ],
      'LgAlignContent' => [
              'type' => 'string',
              'default' => ""
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
      'XlJustifyContent' => [
              'type' => 'string',
              'default' => ""
              ],
      'XlAlignItems' => [
              'type' => 'string',
              'default' => ""
              ],
      'XlWrap' => [
              'type' => 'string',
              'default' => ""
              ],
      'XlAlignContent' => [
              'type' => 'string',
              'default' => ""
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
      'XxlJustifyContent' => [
              'type' => 'string',
              'default' => ""
              ],
      'XxlAlignItems' => [
              'type' => 'string',
              'default' => ""
              ],
      'XxlWrap' => [
              'type' => 'string',
              'default' => ""
              ],
      'XxlAlignContent' => [
              'type' => 'string',
              'default' => ""
              ],
      'XsGx' => [
              'type' => 'number',
              'default' => null
              ],
      'XsGy' => [
              'type' => 'number',
              'default' => null
              ],
      'SmGx' => [
              'type' => 'number',
              'default' => null
              ],
      'SmGy' => [
              'type' => 'number',
              'default' => null
              ],
      'MdGx' => [
              'type' => 'number',
              'default' => null
              ],
      'MdGy' => [
              'type' => 'number',
              'default' => null
              ],
      'LgGx' => [
              'type' => 'number',
              'default' => null
              ],
      'LgGy' => [
              'type' => 'number',
              'default' => null
              ],
      'XlGx' => [
              'type' => 'number',
              'default' => null
              ],
      'XlGy' => [
              'type' => 'number',
              'default' => null
              ],
      'XxlGx' => [
              'type' => 'number',
              'default' => null
              ],
      'XxlGy' => [
              'type' => 'number',
              'default' => null
              ],

    ]
) );
?>
