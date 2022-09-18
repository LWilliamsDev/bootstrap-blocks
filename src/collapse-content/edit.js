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
 export default function Edit({attributes, setAttributes, clientId}) {
   const {
     myAnchor, className
    } = attributes;

   const blockProps = useBlockProps();

   if (!myAnchor) {
     setAttributes({myAnchor: 'collapse-'+clientId});
   }


 	return (
     <div { ...blockProps }>
      <InspectorControls key="setting">
        <PanelBody title={__('Anchor', 'bootstrap-blocks')}>
          <PanelRow>
            <TextControl
            label={__('Enter anchor', 'bootstrap-blocks')}
            value={ myAnchor }
            onChange={  myAnchor  => setAttributes( {myAnchor} ) }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <InnerBlocks templateLock={false} placeholder={__('Add blocks here', 'bootstrap-blocks')} />
 		</div>
 	);
 }
