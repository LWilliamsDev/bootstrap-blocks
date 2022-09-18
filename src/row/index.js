/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import { addClasses } from '../fn-add-classes.js';
import { getAttributeType } from '../fn-get-attribute-type.js';
import { getBreakpoint } from '../fn-get-breakpoint.js';
import { printClasses } from '../fn-print-classes.js';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
  title:  __( 'Bootstrap Row', 'bootstrap-blocks' ),
  supports: {
    color: {
      gradients: true
    }
  },
  attributes: {
  XsDisplay: {
    type: 'string',
    default: ""
    },
  SmDisplay: {
    type: 'string',
    default: ""
    },
  MdDisplay: {
    type: 'string',
    default: ""
    },
  LgDisplay: {
    type: 'string',
    default: ""
    },
  XlDisplay: {
    type: 'string',
    default: ""
    },
  XxlDisplay: {
    type: 'string',
    default: ""
    },
  XsJustifyContent: {
    type: 'string',
    default: ""
    },
  SmJustifyContent: {
    type: 'string',
    default: ""
    },
  MdJustifyContent: {
    type: 'string',
    default: ""
    },
  LgJustifyContent: {
    type: 'string',
    default: ""
    },
  XlJustifyContent: {
    type: 'string',
    default: ""
    },
  XxlJustifyContent: {
    type: 'string',
    default: ""
    },
  XsAlignItems: {
    type: 'string',
    default: ""
    },
  SmAlignItems: {
    type: 'string',
    default: ""
    },
  MdAlignItems: {
    type: 'string',
    default: ""
    },
  LgAlignItems: {
    type: 'string',
    default: ""
    },
  XlAlignItems: {
    type: 'string',
    default: ""
    },
  XxlAlignItems: {
    type: 'string',
    default: ""
    },
  XsWrap: {
    type: 'string',
    default: ""
    },
  SmWrap: {
    type: 'string',
    default: ""
    },
  MdWrap: {
    type: 'string',
    default: ""
    },
  LgWrap: {
    type: 'string',
    default: ""
    },
  XlWrap: {
    type: 'string',
    default: ""
    },
  XxlWrap: {
    type: 'string',
    default: ""
    },
  XsAlignContent: {
    type: 'string',
    default: ""
    },
  SmAlignContent: {
    type: 'string',
    default: ""
    },
  MdAlignContent: {
    type: 'string',
    default: ""
    },
  LgAlignContent: {
    type: 'string',
    default: ""
    },
  XlAlignContent: {
    type: 'string',
    default: ""
    },
  XxlAlignContent: {
    type: 'string',
    default: ""
    },
  XsGx: {
    type: 'number'
    },
  XsGy: {
    type: 'number'
    },
  SmGx: {
    type: 'number'
    },
  SmGy: {
    type: 'number'
    },
  MdGx: {
    type: 'number'
    },
  MdGy: {
    type: 'number'
    },
  LgGx: {
    type: 'number'
    },
  LgGy: {
    type: 'number'
    },
  XlGx: {
    type: 'number'
    },
  XlGy: {
    type: 'number'
    },
  XxlGx: {
    type: 'number'
    },
  XxlGy: {
    type: 'number'
    },
  XsMarginTop: {
    type: 'string',
    default: ""
    },
  XsMarginBottom: {
    type: 'string',
    default: ""
    },
  XsMarginLeft: {
    type: 'string',
    default: ""
    },
  XsMarginRight: {
    type: 'string',
    default: ""
    },
  SmMarginTop: {
    type: 'string',
    default: ""
    },
  SmMarginBottom: {
    type: 'string',
    default: ""
    },
  SmMarginLeft: {
    type: 'string',
    default: ""
    },
  SmMarginRight: {
    type: 'string',
    default: ""
    },
  MdMarginTop: {
    type: 'string',
    default: ""
    },
  MdMarginBottom: {
    type: 'string',
    default: ""
    },
  MdMarginLeft: {
    type: 'string',
    default: ""
    },
  MdMarginRight: {
    type: 'string',
    default: ""
    },
  LgMarginTop: {
    type: 'string',
    default: ""
    },
  LgMarginBottom: {
    type: 'string',
    default: ""
    },
  LgMarginLeft: {
    type: 'string',
    default: ""
    },
  LgMarginRight: {
    type: 'string',
    default: ""
    },
  XlMarginTop: {
    type: 'string',
    default: ""
    },
  XlMarginBottom: {
    type: 'string',
    default: ""
    },
  XlMarginLeft: {
    type: 'string',
    default: ""
    },
  XlMarginRight: {
    type: 'string',
    default: ""
    },
  XxlMarginTop: {
    type: 'string',
    default: ""
    },
  XxlMarginBottom: {
    type: 'string',
    default: ""
    },
  XxlMarginLeft: {
    type: 'string',
    default: ""
    },
  XxlMarginRight: {
    type: 'string',
    default: ""
    },
  XsPaddingTop: {
    type: 'number'
    },
  XsPaddingBottom: {
    type: 'number'
    },
  XsPaddingLeft: {
    type: 'number'
    },
  XsPaddingRight: {
    type: 'number'
    },
  SmPaddingTop: {
    type: 'number'
    },
  SmPaddingBottom: {
    type: 'number'
    },
  SmPaddingLeft: {
    type: 'number'
    },
  SmPaddingRight: {
    type: 'number'
    },
  MdPaddingTop: {
    type: 'number'
      },
  MdPaddingBottom: {
      type: 'number'
      },
  MdPaddingLeft: {
      type: 'number'
      },
  MdPaddingRight: {
      type: 'number'
      },
  LgPaddingTop: {
      type: 'number'
      },
  LgPaddingBottom: {
      type: 'number'
      },
  LgPaddingLeft: {
      type: 'number'
      },
  LgPaddingRight: {
      type: 'number'
        },
  XlPaddingTop: {
      type: 'number'
      },
  XlPaddingBottom: {
      type: 'number'
      },
  XlPaddingLeft: {
      type: 'number'
      },
  XlPaddingRight: {
      type: 'number'
      },
  XxlPaddingTop: {
      type: 'number'
      },
  XxlPaddingBottom: {
      type: 'number'
      },
  XxlPaddingLeft: {
      type: 'number'
      },
  XxlPaddingRight: {
      type: 'number'
      },
  },
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
} );

//The below section is used to add the appropriate classes to the Bootstrap row block in the Gutenberg editor. The coding is similar to the same section for the Bootstrap Container block, so please see the index.js Bootstrap Container block file for comments.
const { createHigherOrderComponent } = wp.compose;
const withStyleClasses = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( props.name !== 'bootstrap-blocks/row' ) {
      return <BlockListBlock { ...props } />
    }
      const {
        XsMarginTop, XsMarginBottom, XsMarginLeft, XsMarginRight, XsPaddingTop, XsPaddingBottom, XsPaddingLeft, XsPaddingRight, XsDisplay, XsJustifyContent, XsAlignItems, XsWrap, XsAlignContent, XsGx, XsGy,
        SmMarginTop, SmMarginBottom, SmMarginLeft, SmMarginRight, SmPaddingTop, SmPaddingBottom, SmPaddingLeft, SmPaddingRight, SmDisplay, SmJustifyContent, SmAlignItems, SmWrap, SmAlignContent, SmGx, SmGy,
        MdMarginTop, MdMarginBottom, MdMarginLeft, MdMarginRight, MdPaddingTop, MdPaddingBottom, MdPaddingLeft, MdPaddingRight, MdDisplay, MdJustifyContent, MdAlignItems, MdWrap, MdAlignContent, MdGx, MdGy,
        LgMarginTop, LgMarginBottom, LgMarginLeft, LgMarginRight, LgPaddingTop, LgPaddingBottom, LgPaddingLeft, LgPaddingRight, LgDisplay, LgJustifyContent, LgAlignItems, LgWrap, LgAlignContent, LgGx, LgGy,
        XlMarginTop, XlMarginBottom, XlMarginLeft, XlMarginRight, XlPaddingTop, XlPaddingBottom, XlPaddingLeft, XlPaddingRight, XlDisplay, XlJustifyContent, XlAlignItems, XlWrap, XlAlignContent, XlGx, XlGy,
        XxlMarginTop, XxlMarginBottom, XxlMarginLeft, XxlMarginRight, XxlPaddingTop, XxlPaddingBottom, XxlPaddingLeft, XxlPaddingRight, XxlDisplay, XxlJustifyContent, XxlAlignItems, XxlWrap, XxlAlignContent, XxlGx, XxlGy, className
      } = props.attributes;

      let classes = 'row '; //we hardcode the "row" class because all Bootstrap row blocks contain this class

      for (const [key, value] of Object.entries(props.attributes)) {
        let breakpointValue = `${key}`.substring(0,2);
        let breakpoint;
        let typeValue;

        typeValue = getAttributeType(`${key}`);

        breakpoint = getBreakpoint(breakpointValue);

        classes += printClasses(value, breakpoint, typeValue);


      }


      return <BlockListBlock { ...props } className={ classes } />;

	};
}, 'withStyleClasses' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'bootstrap-blocks/container', withStyleClasses );
