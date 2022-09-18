/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, InspectorControls, } from '@wordpress/block-editor';
import { ToggleControl, TextControl, Panel, PanelBody, PanelRow } from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
 export default function Edit({attributes, setAttributes, clientId}) {
   const {
     className, tabNavContent, tabTarget, isActive, myAnchor
   } = attributes;


   const blockProps = useBlockProps();
   let classes;
   if (className) {
     classes = className + ' nav-item';
   }
   else {
     classes = 'nav-item';
   }

   if (!myAnchor) {
     setAttributes({myAnchor: clientId})
   }
   //const ALLOWED_BLOCKS = ['bootstrap-blocks/accordion-item'];
 	return (
    <li { ...blockProps } className={classes}>
      <InspectorControls key="setting">
        <PanelBody title={__('Initial Behavior', 'bootstrap-blocks')} initialOpen={false}>
          <PanelRow>
            <ToggleControl
            label={__('Automatically open tab upon page load?', 'bootstrap-blocks')}
            checked={isActive}
            onChange={isActive => setAttributes({isActive})}
            />
          </PanelRow>
        </PanelBody>
        <PanelBody title={__('Target', 'bootstrap-blocks')} initialOpen={false}>
          <PanelRow>
            <TextControl
            label={__('Enter anchor of panel that this opens', 'bootstrap-blocks')}
            value={ tabTarget }
            onChange={ tabTarget  => setAttributes( {tabTarget} ) }
            />
          </PanelRow>
        </PanelBody>
        <PanelBody title={__('Anchor', 'bootstrap-blocks')}>
          <PanelRow>
            <TextControl
            label={__('Enter anchor for this item', 'bootstrap-blocks')}
            value={ myAnchor }
            onChange={  myAnchor  => setAttributes( {myAnchor} ) }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <RichText
        { ...blockProps }
           tagName="h3"
           value={ attributes.tabNavContent } // Any existing content, either from the database or an attribute default
           allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
           onChange={ ( tabNavContent ) => setAttributes( { tabNavContent } ) } // Store updated content as a block attribute
           placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
      />
 		</li>
 	);
}
