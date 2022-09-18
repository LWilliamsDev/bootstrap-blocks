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
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl, Panel, PanelBody, PanelRow } from '@wordpress/components';
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
 export default function Edit({attributes, setAttributes}) {
  const {
     myAnchor, className
    } = attributes;


  const blockProps = useBlockProps();
  let classes;
  if (className) {
     classes = className + ' accordion';
   }
  else {
     classes = 'accordion';
  }
  const ALLOWED_BLOCKS = ['bootstrap-blocks/accordion-item'];
 	return (
     <div { ...blockProps } className={classes}>
      <InspectorControls key="setting">
        <PanelBody title={__('Anchor', 'bootstrap-blocks')}>
          <TextControl
           label={__('Enter anchor', 'bootstrap-blocks')}
           value={ myAnchor }
           onChange={  myAnchor  => setAttributes( {myAnchor} ) }
           />
        </PanelBody>
      </InspectorControls>
      <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } placeholder={__('Add blocks here', 'bootstrap-blocks')} />
 		</div>
 	);
 }
