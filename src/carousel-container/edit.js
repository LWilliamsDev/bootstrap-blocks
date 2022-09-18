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
import { TextControl, ToggleControl, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { useSelect, dispatch } from '@wordpress/data';

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
     myAnchor, className, carouselControls
    } = attributes;

  if (!myAnchor) {
    setAttributes({myAnchor: 'carousel-'+clientId});
  }

  const ALLOWED_BLOCKS = ['bootstrap-blocks/carousel-item'];
  const blockProps = useBlockProps();
  const childBlocks = useSelect( (select) => select('core/block-editor').getBlock(clientId).innerBlocks);

  for (let i = 0; i < childBlocks.length; i++) {
    if (i == 0) {
      dispatch('core/block-editor').updateBlockAttributes(childBlocks[i].clientId, {isFirstBlock: true})
    }
    else {
      dispatch('core/block-editor').updateBlockAttributes(childBlocks[i].clientId, {isFirstBlock: false})

    }
  }


 	return (
     <div { ...blockProps }>
      <InspectorControls key="setting">
        <PanelBody title={__('Carousel Options', 'bootstrap-blocks')}>
          <PanelRow>
            <ToggleControl
              label={__('Include Previous/Next buttons on each slide?', 'bootstrap-blocks')}
              checked={carouselControls}
              onChange={carouselControls => setAttributes({carouselControls})}
            />
          </PanelRow>
        </PanelBody>
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
     <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} placeholder={__('Add blocks here', 'bootstrap-blocks')} />
 		</div>
 	);
 }
