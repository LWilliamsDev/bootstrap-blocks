<?php register_block_type( dirname(__FILE__, 3) . '/build/column', array(
  'render_callback' => 'column_dynamic_render',
  'attributes' => [
     'className' => [
        'type' => 'string',
        'default' => ''
         ],
      'XsCol' => [
        'type' => 'number',
        'default' => null
        ],
      'XsOffset' => [
        'type' => 'number',
        'default' => null
        ],
      'XsAlignSelf' => [
         'type' => 'string',
         'default'=> ""
        ],
      'XsFlexBasis' => [
          'type' => 'string',
          'default'=> ""
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
      'SmCol' => [
            'type' => 'number',
            'default' => null
          ],
      'SmOffset' => [
            'type' => 'number',
            'default' => null
          ],
      'SmAlignSelf' => [
            'type' => 'string',
            'default'=> ""
          ],
      'SmFlexBasis' => [
            'type' => 'string',
            'default'=> ""
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
      'MdCol' => [
              'type' => 'number',
              'default' => null
              ],
      'MdOffset' => [
              'type' => 'number',
              'default' => null
              ],
      'MdAlignSelf' => [
              'type' => 'string',
              'default'=> ""
              ],
      'MdFlexBasis' => [
              'type' => 'string',
              'default'=> ""
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
      'LgCol' => [
              'type' => 'number',
              'default' => null
              ],
      'LgOffset' => [
              'type' => 'number',
              'default' => null
              ],
      'LgAlignSelf' => [
              'type' => 'string',
              'default'=> ""
              ],
      'LgFlexBasis' => [
              'type' => 'string',
              'default'=> ""
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
      'XlCol' => [
              'type' => 'number',
              'default' => null
              ],
      'XlOffset' => [
              'type' => 'number',
              'default' => null
              ],
      'XlAlignSelf' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XlFlexBasis' => [
              'type' => 'string',
              'default'=> ""
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
      'XxlCol' => [
              'type' => 'number',
              'default' => null
              ],
      'XxlOffset' => [
              'type' => 'number',
              'default' => null
              ],
      'XxlAlignSelf' => [
              'type' => 'string',
              'default'=> ""
              ],
      'XxlFlexBasis' => [
              'type' => 'string',
              'default'=> ""
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
    ]
) );
?>
