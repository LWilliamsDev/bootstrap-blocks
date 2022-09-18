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
  title:  __( 'Container', 'bootstrap-blocks' ),
  supports: {
    color: {
      gradients: true
    }
  },
  icon: 'layout',
  category: 'design',
  attributes: {
    htmlElement: {
      type: 'string',
      default: 'section'
    },
    XsContainer: {
      type: 'boolean'
    },
    SmContainer: {
      type: 'boolean'
    },
    XlContainer: {
      type: 'boolean'
    },
    XxlContainer: {
      type: 'boolean'
    },
    FullWidthContainer: {
      type: 'boolean'
    },
    myAnchor: {
      type: 'string'
    },
    XsDisplay: {
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
    MdContainer: {
      type: 'boolean'
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
    LgContainer: {
      type: 'boolean'
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
    XlContainer: {
      type: 'boolean'
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
    XxlContainer: {
      type: 'boolean'
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
    XsBgId: {
      type: 'number'
    },
    XsBgUrl: {
      type: 'string'
    },
    XsBgAlt: {
      type: 'string'
    },
    XsBgWidth: {
      type: 'number'
    },
    XsBgHeight: {
      type: 'number'
    },
    MdBgId: {
      type: 'number'
    },
    MdBgUrl: {
      type: 'string'
    },
    MdBgAlt: {
      type: 'string'
    },
    MdBgWidth: {
      type: 'number'
    },
    MdBgHeight: {
      type: 'number'
    },
    LgBgId: {
      type: 'number'
    },
    LgBgUrl: {
      type: 'string'
    },
    LgBgAlt: {
      type: 'string'
    },
    LgBgWidth: {
      type: 'number'
    },
    LgBgHeight: {
      type: 'number'
    }
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
//The below section is used to add the appropriate classes to the Bootstrap container block in the Gutenberg editor
const { createHigherOrderComponent } = wp.compose;
const withStyleClasses = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( props.name !== 'bootstrap-blocks/container' ) {
      return <BlockListBlock { ...props } />
    }
    const {
        XsContainer, XsDisplay, XsMarginTop, XsMarginBottom, XsMarginLeft, XsMarginRight, XsPaddingTop, XsPaddingBottom, XsPaddingLeft, XsPaddingRight,
        SmContainer, SmDisplay, SmMarginTop, SmMarginBottom, SmMarginLeft, SmMarginRight, SmPaddingTop, SmPaddingBottom, SmPaddingLeft, SmPaddingRight,
        MdContainer, MdDisplay, MdMarginTop, MdMarginBottom, MdMarginLeft, MdMarginRight, MdPaddingTop, MdPaddingBottom, MdPaddingLeft, MdPaddingRight,
        LgContainer, LgDisplay, LgMarginTop, LgMarginBottom, LgMarginLeft, LgMarginRight, LgPaddingTop, LgPaddingBottom, LgPaddingLeft, LgPaddingRight,
        XlContainer, XlDisplay, XlMarginTop, XlMarginBottom, XlMarginLeft, XlMarginRight, XlPaddingTop, XlPaddingBottom, XlPaddingLeft, XlPaddingRight,
        XxlContainer, XxlDisplay, XxlMarginTop, XxlMarginBottom, XxlMarginLeft, XxlMarginRight, XxlPaddingTop, XxlPaddingBottom, XxlPaddingLeft, XxlPaddingRight,
        XsBgUrl, MdBgUrl, LgBgUrl, FullWidthContainer, className
    } = props.attributes;

    let classes = ''; //start out with an empty string for the classes for this block


    for (const [key, value] of Object.entries(props.attributes)) { //loop through block attributes
        let breakpointValue = `${key}`.substring(0,2); //Get breakpoint for attribute. For instance, "XsMarginBottom" returns Xs. This is not perfect, because some attributes don't have breakpoints (FullWidthContainer) while others are more than 2 characters (XxlMarginBottom).
        let breakpoint;
        let typeValue;

        typeValue = getAttributeType(`${key}`); //return the attribute name minus the breakpoint. For instance, should return "MarginBottom" from "XsMarginBottom."

        breakpoint = getBreakpoint(breakpointValue); //transform the breakpoint so that it matches the breakpoint in the bootstrap class name. Usually, this will be changing from mixed to lower case (for instance, "Sm" to "sm", for container-sm).
        if (typeValue == 'BgUrl') { //if the value equals BgUrl, this is an attribute for a background image. Add the background image classes to the block, which do not match other Bootstrap classes.
          classes += 'd-grid bg-img';        }
        else { //in all other classes, dynamically build and print the correct Bootstrap class.
          classes += printClasses(value, breakpoint, typeValue);
        }

    }


    return <BlockListBlock { ...props } className={ classes } />;

	};
}, 'withStyleClasses' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'bootstrap-blocks/container', withStyleClasses );
