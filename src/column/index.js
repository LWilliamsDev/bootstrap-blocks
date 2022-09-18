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
  title:  __( 'Column', 'bootstrap-blocks' ),
  supports: {
    color: {
      gradients: true
    }
  },
  icon: 'layout',
  category: 'design',
  parent: ['bootstrap-blocks/row'],
  attributes: {
    XsCol: {
      type: 'number'
    },
    XsOffset: {
      type: 'boolean'
    },
    XsDisplay: {
      type: 'string',
      default: ""
    },
    XsAlignSelf: {
      type: 'string',
      default: ""
    },
    XsFlexBasis: {
      type: 'string',
      default: ""
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
    SmCol: {
      type: 'number'
    },
    SmOffset: {
      type: 'boolean'
    },
    SmAlignSelf: {
      type: 'string',
      default: ""
    },
    SmFlexBasis: {
      type: 'string',
      default: ""
    },
    SmDisplay: {
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
    MdCol: {
      type: 'number'
    },
    MdOffset: {
      type: 'boolean'
    },
    MdAlignSelf: {
      type: 'string',
      default: ""
    },
    MdFlexBasis: {
      type: 'string',
      default: ""
    },
    MdDisplay: {
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
    LgCol: {
      type: 'number'
    },
    LgOffset: {
      type: 'boolean'
    },
    LgAlignSelf: {
      type: 'string',
      default: ""
    },
    LgFlexBasis: {
      type: 'string',
      default: ""
    },
    LgDisplay: {
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
    XlCol: {
      type: 'number'
    },
    XlOffset: {
      type: 'boolean'
    },
    XlAlignSelf: {
      type: 'string',
      default: ""
    },
    XlFlexBasis: {
      type: 'string',
      default: ""
    },
    XlDisplay: {
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
    XxlCol: {
      type: 'number'
    },
    XxlOffset: {
      type: 'boolean'
    },
    XxlAlignSelf: {
      type: 'string',
      default: ""
    },
    XxlFlexBasis: {
      type: 'string',
      default: ""
    },
    XxlDisplay: {
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

//The below section is used to add the appropriate classes to the Bootstrap column block in the Gutenberg editor. The coding is similar to the same section for the Bootstrap Container block, so please see the index.js Bootstrap Container block file for comments.
const { createHigherOrderComponent } = wp.compose;
const withStyleClasses = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( props.name !== 'bootstrap-blocks/column' ) {
      return <BlockListBlock { ...props } />
    }
    const {
        XsCol, XsOffset, XsAlignSelf, XsFlexBasis, XsDisplay, XsMarginTop, XsMarginBottom, XsMarginLeft, XsMarginRight, XsPaddingTop, XsPaddingBottom, XsPaddingLeft, XsPaddingRight,
        SmCol, SmOffset, SmAlignSelf, SmFlexBasis, SmDisplay, SmMarginTop, SmMarginBottom, SmMarginLeft, SmMarginRight, SmPaddingTop, SmPaddingBottom, SmPaddingLeft, SmPaddingRight,
        MdCol, MdOffset, MdAlignSelf, MdFlexBasis, MdDisplay, MdMarginTop, MdMarginBottom, MdMarginLeft, MdMarginRight, MdPaddingTop, MdPaddingBottom, MdPaddingLeft, MdPaddingRight,
        LgCol, LgOffset, LgAlignSelf, LgFlexBasis, LgDisplay, LgMarginTop, LgMarginBottom, LgMarginLeft, LgMarginRight, LgPaddingTop, LgPaddingBottom, LgPaddingLeft, LgPaddingRight,
        XlCol, XlOffset, XlAlignSelf, XlFlexBasis, XlDisplay, XlMarginTop, XlMarginBottom, XlMarginLeft, XlMarginRight, XlPaddingTop, XlPaddingBottom, XlPaddingLeft, XlPaddingRight,
        XxlCol, XxlOffset, XxlAlignSelf, XxlFlexBasis, XxlDisplay, XxlMarginTop, XxlMarginBottom, XxlMarginLeft, XxlMarginRight, XxlPaddingTop, XxlPaddingBottom, XxlPaddingLeft, XxlPaddingRight, className
    } = props.attributes;

    let classes = '';


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

wp.hooks.addFilter( 'editor.BlockListBlock', 'bootstrap-blocks/column', withStyleClasses );
