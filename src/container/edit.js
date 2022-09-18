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
import { useBlockProps, InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck, MediaPlaceholder } from '@wordpress/block-editor';
import { TextControl, ToggleControl, Panel, PanelBody, PanelRow, SelectControl, RangeControl, Button, ResponsiveWrapper, Spinner } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
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
     XsMarginTop, XsMarginBottom, XsMarginLeft, XsMarginRight, XsPaddingTop, XsPaddingBottom, XsPaddingLeft, XsPaddingRight, XsDisplay, XsContainer,
     SmMarginTop, SmMarginBottom, SmMarginLeft, SmMarginRight, SmPaddingTop, SmPaddingBottom, SmPaddingLeft, SmPaddingRight, SmDisplay, SmContainer,
     MdContainer, MdMarginTop, MdMarginBottom, MdMarginLeft, MdMarginRight, MdPaddingTop, MdPaddingBottom, MdPaddingLeft, MdPaddingRight, MdDisplay,
     LgContainer, LgMarginTop, LgMarginBottom, LgMarginLeft, LgMarginRight, LgPaddingTop, LgPaddingBottom, LgPaddingLeft, LgPaddingRight, LgDisplay,
     XlContainer, XlMarginTop, XlMarginBottom, XlMarginLeft, XlMarginRight, XlPaddingTop, XlPaddingBottom, XlPaddingLeft, XlPaddingRight, XlDisplay,
     XxlContainer, XxlMarginTop, XxlMarginBottom, XxlMarginLeft, XxlMarginRight, XxlPaddingTop, XxlPaddingBottom, XxlPaddingLeft, XxlPaddingRight, XxlDisplay,
     FullWidthContainer, htmlElement,
     XsBgId, XsBgUrl, XsBgWidth, XsBgHeight, XsBgAlt,
     MdBgId, MdBgUrl, MdBgWidth, MdBgHeight, MdBgAlt,
     LgBgId, LgBgUrl, LgBgWidth, LgBgHeight, LgBgAlt,
     myAnchor
   } = attributes;

//media, tabletMedia, and desktopMedia pertain to background iamges. They are used to get the database ids of the selected elements from the media library.
   const media = useSelect((select ) => {
     return select('core').getMedia(XsBgId)
   });

   const tabletMedia = useSelect((select ) => {
     return select('core').getMedia(MdBgId)
   });

   const desktopMedia = useSelect((select ) => {
     return select('core').getMedia(LgBgId)
   });


   const blockProps = useBlockProps();

   const removeMobileBg = () => { //runs when user removes the mobile background image
		   setAttributes({
			      XsBgId: undefined,
			      XsBgUrl: '',
            XsBgWidth: '',
            XsBgHeight: '',
            XsBgAlt: ''
		   });
	  }

 	 const onSelectMobileBg = (media) => { //runs when user adds mobile background image
		   setAttributes({
			      XsBgId: media.id,
			      XsBgUrl: media.url,
            XsBgWidth: media.width,
            XsBgHeight: media.height,
            XsBgAlt: media.alt
		   });
	  }

   const removeTabletBg = (tabletMedia) => { //runs when user removes tablet background image
     setAttributes({
         MdBgId: undefined,
         MdBgUrl: '',
         MdBgWidth: '',
         MdBgHeight: '',
         MdBgAlt: ''
     });
   }

   const onSelectTabletBg = (tabletMedia) => { //runs when user adds tablet background image
     setAttributes({
         MdBgId: tabletMedia.id,
         MdBgUrl: tabletMedia.url,
         MdBgWidth: tabletMedia.width,
         MdBgHeight: tabletMedia.height,
         MdBgAlt: tabletMedia.alt
     });
   }

   const removeDesktopBg = (desktopMedia) => { //runs when user removes desktop background image
     setAttributes({
         LgBgId: undefined,
         LgBgUrl: '',
         LgBgWidth: '',
         LgBgHeight: '',
         LgBgAlt: ''
     });
   }

   const onSelectDesktopBg = (desktopMedia) => { //runs when user adds desktop background image
     setAttributes({
         LgBgId: desktopMedia.id,
         LgBgUrl: desktopMedia.url,
         LgBgWidth: desktopMedia.width,
         LgBgHeight: desktopMedia.height,
          LgBgAlt: desktopMedia.alt

     });
   }

 	return (
     <div { ...blockProps }>
       <InspectorControls key="setting">
         <PanelBody title={__('XS Settings', 'bootstrap-blocks')} initialOpen={false}>
           <PanelRow>
             <ToggleControl
             label={__('Add XS container class', 'bootstrap-blocks')}
             checked={XsContainer}
             onChange={XsContainer => setAttributes({XsContainer})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Display value', 'bootstrap-blocks')}
             value={XsDisplay}
             options={[
               {value: "", label: __('Select Option', 'bootstrap-blocks')},
               {value: "block", label: __('Block', 'bootstrap-blocks')},
               {value: "flex", label: __('Flex', 'bootstrap-blocks')},
               {value: "grid", label: __('Grid', 'bootstrap-blocks')},
               {value: "inline", label: __('Inline', 'bootstrap-blocks')},
               {value: "inline-block", label: __('Inline-Block', 'bootstrap-blocks')},
               {value: "none", label: __('None', 'bootstrap-blocks')}
             ]}
             onChange ={XsDisplay => setAttributes({XsDisplay})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Top', 'bootstrap-blocks')}
             value={XsMarginTop}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XsMarginTop => setAttributes({XsMarginTop})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Bottom', 'bootstrap-blocks')}
             value={XsMarginBottom}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XsMarginBottom => setAttributes({XsMarginBottom})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Left', 'bootstrap-blocks')}
             value={XsMarginLeft}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XsMarginLeft => setAttributes({XsMarginLeft})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Right', 'bootstrap-blocks')}
             value={XsMarginRight}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XsMarginRight => setAttributes({XsMarginRight})}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Top', 'bootstrap-blocks')}
             value={XsPaddingTop}
             allowReset={true}
             onChange={XsPaddingTop => setAttributes({XsPaddingTop})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Bottom', 'bootstrap-blocks')}
             value={XsPaddingBottom}
             allowReset={true}
             onChange={XsPaddingBottom => setAttributes({XsPaddingBottom})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Left', 'bootstrap-blocks')}
             value={XsPaddingLeft}
             allowReset={true}
             onChange={XsPaddingLeft => setAttributes({XsPaddingLeft})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Right', 'bootstrap-blocks')}
             value={XsPaddingRight}
             allowReset={true}
             onChange={XsPaddingRight => setAttributes({XsPaddingRight})}
             min={0}
             max={7}
             />
           </PanelRow>
         </PanelBody>
         <PanelBody title={__('SM Settings', 'bootstrap-blocks')} initialOpen={false}>
           <PanelRow>
             <ToggleControl
             label={__('Add SM container class', 'bootstrap-blocks')}
             checked={SmContainer}
             onChange={SmContainer => setAttributes({SmContainer})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Display value', 'bootstrap-blocks')}
             value={SmDisplay}
             options={[
               {value: "", label: __('Select Option', 'bootstrap-blocks')},
               {value: "block", label: __('Block', 'bootstrap-blocks')},
               {value: "flex", label: __('Flex', 'bootstrap-blocks')},
               {value: "grid", label: __('Grid', 'bootstrap-blocks')},
               {value: "inline", label: __('Inline', 'bootstrap-blocks')},
               {value: "inline-block", label: __('Inline-Block', 'bootstrap-blocks')},
               {value: "none", label: __('None', 'bootstrap-blocks')}
             ]}
             onChange ={SmDisplay => setAttributes({SmDisplay})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Top', 'bootstrap-blocks')}
             value={SmMarginTop}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={SmMarginTop => setAttributes({SmMarginTop})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Bottom', 'bootstrap-blocks')}
             value={SmMarginBottom}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={SmMarginBottom => setAttributes({SmMarginBottom})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Left', 'bootstrap-blocks')}
             value={SmMarginLeft}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={SmMarginLeft => setAttributes({SmMarginLeft})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Right', 'bootstrap-blocks')}
             value={SmMarginRight}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={SmMarginRight => setAttributes({SmMarginRight})}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Top', 'bootstrap-blocks')}
             value={SmPaddingTop}
             allowReset={true}
             onChange={SmPaddingTop => setAttributes({SmPaddingTop})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Bottom', 'bootstrap-blocks')}
             value={SmPaddingBottom}
             allowReset={true}
             onChange={SmPaddingBottom => setAttributes({SmPaddingBottom})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Left', 'bootstrap-blocks')}
             value={SmPaddingLeft}
             allowReset={true}
             onChange={SmPaddingLeft => setAttributes({SmPaddingLeft})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Right', 'bootstrap-blocks')}
             value={SmPaddingRight}
             allowReset={true}
             onChange={SmPaddingRight => setAttributes({SmPaddingRight})}
             min={0}
             max={7}
             />
           </PanelRow>
         </PanelBody>
         <PanelBody title={__('MD Settings', 'bootstrap-blocks')} initialOpen={false}>
           <PanelRow>
             <ToggleControl
            label={__('Add MD container class', 'bootstrap-blocks')}
            checked={MdContainer}
            onChange={MdContainer => setAttributes({MdContainer})}
            />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Display value', 'bootstrap-blocks')}
             value={MdDisplay}
             options={[
               {value: "", label: __('Select Option', 'bootstrap-blocks')},
               {value: "block", label: __('Block', 'bootstrap-blocks')},
               {value: "flex", label: __('Flex', 'bootstrap-blocks')},
               {value: "grid", label: __('Grid', 'bootstrap-blocks')},
               {value: "inline", label: __('Inline', 'bootstrap-blocks')},
               {value: "inline-block", label: __('Inline-Block', 'bootstrap-blocks')},
               {value: "none", label: __('None', 'bootstrap-blocks')}
             ]}
             onChange ={MdDisplay => setAttributes({MdDisplay})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Top', 'bootstrap-blocks')}
             value={MdMarginTop}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={MdMarginTop => setAttributes({MdMarginTop})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Bottom', 'bootstrap-blocks')}
             value={MdMarginBottom}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={MdMarginBottom => setAttributes({MdMarginBottom})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Left', 'bootstrap-blocks')}
             value={MdMarginLeft}
             options={[
             {value: "", label: __('Select Value', 'bootstrap-blocks')},
             {value: "0", label: __('0', 'bootstrap-blocks')},
             {value: "1", label: __('1', 'bootstrap-blocks')},
             {value: "2", label: __('2', 'bootstrap-blocks')},
             {value: "3", label: __('3', 'bootstrap-blocks')},
             {value: "4", label: __('4', 'bootstrap-blocks')},
             {value: "5", label: __('5', 'bootstrap-blocks')},
             {value: "6", label: __('6', 'bootstrap-blocks')},
             {value: "7", label: __('7', 'bootstrap-blocks')},
             {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={MdMarginLeft => setAttributes({MdMarginLeft})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Right', 'bootstrap-blocks')}
             value={MdMarginRight}
             options={[
             {value: "", label: __('Select Value', 'bootstrap-blocks')},
             {value: "0", label: __('0', 'bootstrap-blocks')},
             {value: "1", label: __('1', 'bootstrap-blocks')},
             {value: "2", label: __('2', 'bootstrap-blocks')},
             {value: "3", label: __('3', 'bootstrap-blocks')},
             {value: "4", label: __('4', 'bootstrap-blocks')},
             {value: "5", label: __('5', 'bootstrap-blocks')},
             {value: "6", label: __('6', 'bootstrap-blocks')},
             {value: "7", label: __('7', 'bootstrap-blocks')},
             {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={MdMarginRight => setAttributes({MdMarginRight})}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Top', 'bootstrap-blocks')}
             value={MdPaddingTop}
             allowReset={true}
             onChange={MdPaddingTop => setAttributes({MdPaddingTop})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Bottom', 'bootstrap-blocks')}
             value={MdPaddingBottom}
             allowReset={true}
             onChange={MdPaddingBottom => setAttributes({MdPaddingBottom})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Left', 'bootstrap-blocks')}
             value={MdPaddingLeft}
             allowReset={true}
             onChange={MdPaddingLeft => setAttributes({MdPaddingLeft})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Right', 'bootstrap-blocks')}
             value={MdPaddingRight}
             allowReset={true}
             onChange={MdPaddingRight => setAttributes({MdPaddingRight})}
             min={0}
             max={7}
             />
           </PanelRow>
         </PanelBody>
         <PanelBody title={__('LG Settings', 'bootstrap-blocks')} initialOpen={false}>
           <PanelRow>
             <ToggleControl
             label={__('Add LG container class', 'bootstrap-blocks')}
             checked={LgContainer}
             onChange={LgContainer => setAttributes({LgContainer})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Display value', 'bootstrap-blocks')}
             value={LgDisplay}
             options={[
               {value: "", label: __('Select Option', 'bootstrap-blocks')},
               {value: "block", label: __('Block', 'bootstrap-blocks')},
               {value: "flex", label: __('Flex', 'bootstrap-blocks')},
               {value: "grid", label: __('Grid', 'bootstrap-blocks')},
               {value: "inline", label: __('Inline', 'bootstrap-blocks')},
               {value: "inline-block", label: __('Inline-Block', 'bootstrap-blocks')},
               {value: "none", label: __('None', 'bootstrap-blocks')}
             ]}
             onChange ={LgDisplay => setAttributes({LgDisplay})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Top', 'bootstrap-blocks')}
             value={LgMarginTop}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={LgMarginTop => setAttributes({LgMarginTop})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Bottom', 'bootstrap-blocks')}
             value={LgMarginBottom}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={LgMarginBottom => setAttributes({LgMarginBottom})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Left', 'bootstrap-blocks')}
             value={LgMarginLeft}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={LgMarginLeft => setAttributes({LgMarginLeft})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Right', 'bootstrap-blocks')}
             value={LgMarginRight}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={LgMarginRight => setAttributes({LgMarginRight})}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Top', 'bootstrap-blocks')}
             value={LgPaddingTop}
             allowReset={true}
             onChange={LgPaddingTop => setAttributes({LgPaddingTop})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Bottom', 'bootstrap-blocks')}
             value={LgPaddingBottom}
             allowReset={true}
             onChange={LgPaddingBottom => setAttributes({LgPaddingBottom})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Left', 'bootstrap-blocks')}
             value={LgPaddingLeft}
             allowReset={true}
             onChange={LgPaddingLeft => setAttributes({LgPaddingLeft})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Right', 'bootstrap-blocks')}
             value={LgPaddingRight}
             allowReset={true}
             onChange={LgPaddingRight => setAttributes({LgPaddingRight})}
             min={0}
             max={7}
             />
           </PanelRow>
         </PanelBody>
         <PanelBody title={__('XL Settings', 'bootstrap-blocks')} initialOpen={false}>
           <PanelRow>
             <ToggleControl
             label={__('Add XL container class', 'bootstrap-blocks')}
             checked={XlContainer}
             onChange={XlContainer => setAttributes({XlContainer})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Display value', 'bootstrap-blocks')}
             value={XlDisplay}
             options={[
               {value: "", label: __('Select Option', 'bootstrap-blocks')},
               {value: "block", label: __('Block', 'bootstrap-blocks')},
               {value: "flex", label: __('Flex', 'bootstrap-blocks')},
               {value: "grid", label: __('Grid', 'bootstrap-blocks')},
               {value: "inline", label: __('Inline', 'bootstrap-blocks')},
               {value: "inline-block", label: __('Inline-Block', 'bootstrap-blocks')},
               {value: "none", label: __('None', 'bootstrap-blocks')}
             ]}
             onChange ={XlDisplay => setAttributes({XlDisplay})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Top', 'bootstrap-blocks')}
             value={XlMarginTop}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XlMarginTop => setAttributes({XlMarginTop})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Bottom', 'bootstrap-blocks')}
             value={XlMarginBottom}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XlMarginBottom => setAttributes({XlMarginBottom})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Left', 'bootstrap-blocks')}
             value={XlMarginLeft}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XlMarginLeft => setAttributes({XlMarginLeft})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Right', 'bootstrap-blocks')}
             value={XlMarginRight}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XlMarginRight => setAttributes({XlMarginRight})}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Top', 'bootstrap-blocks')}
             value={XlPaddingTop}
             allowReset={true}
             onChange={XlPaddingTop => setAttributes({XlPaddingTop})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Bottom', 'bootstrap-blocks')}
             value={XlPaddingBottom}
             allowReset={true}
             onChange={XlPaddingBottom => setAttributes({XlPaddingBottom})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Left', 'bootstrap-blocks')}
             value={XlPaddingLeft}
             allowReset={true}
             onChange={XlPaddingLeft => setAttributes({XlPaddingLeft})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Right', 'bootstrap-blocks')}
             value={XlPaddingRight}
             allowReset={true}
             onChange={XlPaddingRight => setAttributes({XlPaddingRight})}
             min={0}
             max={7}
             />
           </PanelRow>
         </PanelBody>
         <PanelBody title={__('XXL Settings', 'bootstrap-blocks')} initialOpen={false}>
           <PanelRow>
             <ToggleControl
             label={__('Add XL container class', 'bootstrap-blocks')}
             checked={XxlContainer}
             onChange={XxlContainer => setAttributes({XxlContainer})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Display value', 'bootstrap-blocks')}
             value={XxlDisplay}
             options={[
               {value: "", label: __('Select Option', 'bootstrap-blocks')},
               {value: "block", label: __('Block', 'bootstrap-blocks')},
               {value: "flex", label: __('Flex', 'bootstrap-blocks')},
               {value: "grid", label: __('Grid', 'bootstrap-blocks')},
               {value: "inline", label: __('Inline', 'bootstrap-blocks')},
               {value: "inline-block", label: __('Inline-Block', 'bootstrap-blocks')},
               {value: "none", label: __('None', 'bootstrap-blocks')}
             ]}
             onChange ={XxlDisplay => setAttributes({XxlDisplay})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Top', 'bootstrap-blocks')}
             value={XxlMarginTop}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XxlMarginTop => setAttributes({XxlMarginTop})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Bottom', 'bootstrap-blocks')}
             value={XxlMarginBottom}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XxlMarginBottom => setAttributes({XxlMarginBottom})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Left', 'bootstrap-blocks')}
             value={XxlMarginLeft}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XxlMarginLeft => setAttributes({XxlMarginLeft})}
             />
           </PanelRow>
           <PanelRow>
             <SelectControl label={__('Margin Right', 'bootstrap-blocks')}
             value={XxlMarginRight}
             options={[
               {value: "", label: __('Select Value', 'bootstrap-blocks')},
               {value: "0", label: __('0', 'bootstrap-blocks')},
               {value: "1", label: __('1', 'bootstrap-blocks')},
               {value: "2", label: __('2', 'bootstrap-blocks')},
               {value: "3", label: __('3', 'bootstrap-blocks')},
               {value: "4", label: __('4', 'bootstrap-blocks')},
               {value: "5", label: __('5', 'bootstrap-blocks')},
               {value: "6", label: __('6', 'bootstrap-blocks')},
               {value: "7", label: __('7', 'bootstrap-blocks')},
               {value: "auto", label: __('auto', 'bootstrap-blocks')},
             ]}
             onChange ={XxlMarginRight => setAttributes({XxlMarginRight})}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Top', 'bootstrap-blocks')}
             value={XxlPaddingTop}
             allowReset={true}
             onChange={XxlPaddingTop => setAttributes({XxlPaddingTop})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Bottom', 'bootstrap-blocks')}
             value={XxlPaddingBottom}
             allowReset={true}
             onChange={XxlPaddingBottom => setAttributes({XxlPaddingBottom})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Left', 'bootstrap-blocks')}
             value={XxlPaddingLeft}
             allowReset={true}
             onChange={XxlPaddingLeft => setAttributes({XxlPaddingLeft})}
             min={0}
             max={7}
             />
           </PanelRow>
           <PanelRow>
             <RangeControl label={__('Padding Right', 'bootstrap-blocks')}
             value={XxlPaddingRight}
             allowReset={true}
             onChange={XxlPaddingRight => setAttributes({XxlPaddingRight})}
             min={0}
             max={7}
             />
           </PanelRow>
         </PanelBody>
         <PanelBody title={__('Background Image', 'bootstrap-blocks')} initialOpen={false}>
           <PanelRow><p><strong>Mobile Image</strong></p></PanelRow>
           <PanelRow>
             <MediaUploadCheck>
 							     <MediaUpload
 								         onSelect={onSelectMobileBg}
 								         value={XsBgId}
 								          allowedTypes={ ['image'] }
 								          render={({open}) => (
                            <Button
										         className={! XsBgId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
										         onClick={open}
            								>
										             {!XsBgId && __('Choose an image', 'bootstrap-blocks')}
                                 { !! XsBgId && ! media && <Spinner /> } //Sometimes it takes awhile to load a preview of the image. In these cases, it should show the spinner.
										             { !!XsBgId && media &&
						            			         <ResponsiveWrapper
									    		             naturalWidth={ media.media_details.sizes.medium.width }
											                 naturalHeight={ media.media_details.sizes.medium.height }
									    	               >
									    		            <img src={media.media_details.sizes.medium.source_url} />
									    	              </ResponsiveWrapper>
						            	     }
									           </Button>
 								          )}
 							     />
 						      </MediaUploadCheck>
           </PanelRow>
           <PanelRow>
 						      { !! XsBgId && media &&
 							        <MediaUploadCheck>
 								          <MediaUpload
 									         title={__('Replace image', 'bootstrap-blocks')}
 									         value={XsBgId}
 									         onSelect={onSelectMobileBg}
 									         allowedTypes={['image']}
 									         render={({open}) => (
 										             <Button onClick={open} variant="primary">{__('Replace image', 'bootstrap-blocks')}</Button>
 									         )}
 								          />
 							        </MediaUploadCheck>
 						       }

 						        {!! XsBgId &&

 							        <MediaUploadCheck>
 								          <Button onClick={removeMobileBg} isLink isDestructive variant="secondary">{__('Remove image', 'bootstrap-blocks')}</Button>
 							        </MediaUploadCheck>
 						         }
           </PanelRow>
           <PanelRow><p><strong>Tablet Image</strong></p></PanelRow>
           <PanelRow>
             <MediaUploadCheck>
                   <MediaUpload
                   onSelect={onSelectTabletBg}
                   value={MdBgId}
                   allowedTypes={ ['image'] }
                   render={({open}) => (
                     <Button
                     className={! MdBgId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                     onClick={open}
                     >
                      {!MdBgId && __('Choose an image', 'bootstrap-blocks')}
                      { !! MdBgId && ! tabletMedia && <Spinner /> }
                      { !!MdBgId && tabletMedia &&
                             <ResponsiveWrapper
                              naturalWidth={ tabletMedia.media_details.sizes.medium.width }
                              naturalHeight={ tabletMedia.media_details.sizes.medium.height }
                             >
                             <img src={tabletMedia.media_details.sizes.medium.source_url} />
                             </ResponsiveWrapper>
                      }
                     </Button>
                   )}
                   />
             </MediaUploadCheck>
           </PanelRow>
           <PanelRow>
             { !! MdBgId && tabletMedia &&
                   <MediaUploadCheck>
                     <MediaUpload
                     title={__('Replace image', 'bootstrap-blocks')}
                     value={MdBgId}
                     onSelect={onSelectTabletBg}
                     allowedTypes={['image']}
                     render={({open}) => (
                       <Button onClick={open} variant="primary">{__('Replace image', 'bootstrap-blocks')}</Button>
                     )}
                    />
                   </MediaUploadCheck>
             }

             {!! MdBgId &&

                   <MediaUploadCheck>
                      <Button onClick={removeTabletBg} isLink isDestructive variant="secondary">{__('Remove image', 'bootstrap-blocks')}</Button>
                   </MediaUploadCheck>
             }
           </PanelRow>
           <PanelRow><p><strong>Desktop Image</strong></p></PanelRow>
           <PanelRow>
             <MediaUploadCheck>
                   <MediaUpload
                   onSelect={onSelectDesktopBg}
                   value={LgBgId}
                   allowedTypes={ ['image'] }
                   render={({open}) => (
                     <Button
                     className={! LgBgId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                     onClick={open}
                     >
                    {!LgBgId && __('Choose an image', 'bootstrap-blocks')}
                    { !! LgBgId && ! desktopMedia && <Spinner /> }
                    { !!LgBgId && desktopMedia &&
                             <ResponsiveWrapper
                             naturalWidth={ desktopMedia.media_details.sizes.medium.width }
                             naturalHeight={ desktopMedia.media_details.sizes.medium.height }
                             >
                              <img src={desktopMedia.media_details.sizes.medium.source_url} />
                             </ResponsiveWrapper>
                    }
                     </Button>
                   )}
                  />
             </MediaUploadCheck>
           </PanelRow>
           <PanelRow>
               { !! LgBgId && desktopMedia &&
                 <MediaUploadCheck>
                    <MediaUpload
                    title={__('Replace image', 'bootstrap-blocks')}
                    value={LgBgId}
                    onSelect={onSelectDesktopBg}
                    allowedTypes={['image']}
                    render={({open}) => (
                      <Button onClick={open} variant="primary">{__('Replace image', 'bootstrap-blocks')}</Button>
                    )}
                    />
                 </MediaUploadCheck>
               }

               {!! LgBgId &&

                 <MediaUploadCheck>
                    <Button onClick={removeDesktopBg} isLink isDestructive variant="secondary">{__('Remove image', 'bootstrap-blocks')}</Button>
                  </MediaUploadCheck>
               }
           </PanelRow>
         </PanelBody>
         <PanelBody title={__('Full Width Settings', 'bootstrap-blocks')} initialOpen={false}>
           <PanelRow>
             <ToggleControl
             label={__('Add full width container class', 'bootstrap-blocks')}
             checked={FullWidthContainer}
             onChange={FullWidthContainer => setAttributes({FullWidthContainer})}
             />
           </PanelRow>
         </PanelBody>
         <PanelBody title={__('HTML Element', 'bootstrap-blocks')}>
             <SelectControl label={__('Choose element', 'bootstrap-blocks')}
             value={htmlElement}
             options={[
               {value: "section", label: __('Section', 'bootstrap-blocks')},
               {value: "div", label: __('Div', 'bootstrap-blocks')},
             ]}
             onChange ={htmlElement => setAttributes({htmlElement})}
             />
         </PanelBody>
         <PanelBody title={__('Anchor', 'bootstrap-blocks')}>
           <TextControl
           label={__('Enter anchor', 'bootstrap-blocks')}
           value={ myAnchor }
           onChange={  myAnchor  => setAttributes( {myAnchor} ) }
           />
         </PanelBody>
       </InspectorControls>
       <Fragment>
        {XsBgUrl && <img src={XsBgUrl} class="d-md-none" /> }
        {MdBgUrl && <img src={MdBgUrl} class="d-none d-md-block" /> }
        {LgBgUrl && <img src={LgBgUrl} class="d-none d-lg-block"  />}

       </Fragment>
       <InnerBlocks placeholder={__('Add blocks here', 'bootstrap-blocks')} />
 		  </div>
 	);
 }
