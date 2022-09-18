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
import { useBlockProps, InspectorControls, InnerBlocks, useInnerBlocksProps, store as blockEditorStore } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, RangeControl } from '@wordpress/components';
import { hasChildBlocks} from '@wordpress/blocks';
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
 export default function Edit({attributes, setAttributes, clientId}) {

  const { hasChildBlocks } = useSelect( //get number of child blocks
      ( select ) => {
        const { getBlockOrder } = select(
          blockEditorStore
        );
        return {
          hasChildBlocks: getBlockOrder( clientId ).length > 0
        };
      },
      [ clientId ]
    );

  const {
     XsMarginTop, XsMarginBottom, XsMarginLeft, XsMarginRight, XsPaddingTop, XsPaddingBottom, XsPaddingLeft, XsPaddingRight, XsDisplay, XsCol, XsOffset, XsFlexBasis, XsAlignSelf,
     SmMarginTop, SmMarginBottom, SmMarginLeft, SmMarginRight, SmPaddingTop, SmPaddingBottom, SmPaddingLeft, SmPaddingRight, SmDisplay, SmCol, SmOffset, SmFlexBasis, SmAlignSelf,
     MdMarginTop, MdMarginBottom, MdMarginLeft, MdMarginRight, MdPaddingTop, MdPaddingBottom, MdPaddingLeft, MdPaddingRight, MdDisplay, MdCol, MdOffset, MdFlexBasis, MdAlignSelf,
     LgMarginTop, LgMarginBottom, LgMarginLeft, LgMarginRight, LgPaddingTop, LgPaddingBottom, LgPaddingLeft, LgPaddingRight, LgDisplay, LgCol, LgOffset, LgFlexBasis, LgAlignSelf,
     XlMarginTop, XlMarginBottom, XlMarginLeft, XlMarginRight, XlPaddingTop, XlPaddingBottom, XlPaddingLeft, XlPaddingRight, XlDisplay, XlCol, XlOffset, XlFlexBasis, XlAlignSelf,
     XxlMarginTop, XxlMarginBottom, XxlMarginLeft, XxlMarginRight, XxlPaddingTop, XxlPaddingBottom, XxlPaddingLeft, XxlPaddingRight, XxlDisplay, XxlCol, XxlOffset, XxlFlexBasis, XxlAlignSelf
  } = attributes;


  const blockProps = useBlockProps();

 	return (
     <div { ...blockProps }>
      <InspectorControls key="setting">
        <PanelBody title={__('XS Settings', 'bootstrap-blocks')} initialOpen={false}>
          <PanelRow>
            <RangeControl label={__('Column Size', 'bootstrap-blocks')}
            value={XsCol}
            allowReset={true}
            onChange={XsCol => setAttributes({XsCol})}
            min={1}
            max={12}
            />
         </PanelRow>
         <PanelRow>
            <RangeControl label={__('Column Offset', 'bootstrap-blocks')}
            value={XsOffset}
            allowReset={true}
            onChange={XsOffset => setAttributes({XsOffset})}
            min={1}
            max={12}
            />
         </PanelRow>
         <PanelRow>
            <SelectControl label={__('Align Self', 'bootstrap-blocks')}
            value={XsAlignSelf}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={XsAlignSelf => setAttributes({XsAlignSelf})}
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
            <SelectControl label={__('Flex Basis', 'bootstrap-blocks')}
            value={XsFlexBasis}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "auto", label: __('Auto', 'bootstrap-blocks')},
              {value: "0", label: __('0', 'bootstrap-blocks')},     ]}
              onChange ={XsFlexBasis => setAttributes({XsFlexBasis})}
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
           <RangeControl label={__('Column Size', 'bootstrap-blocks')}
           value={SmCol}
           allowReset={true}
           onChange={SmCol => setAttributes({SmCol})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <RangeControl label={__('Column Offset', 'bootstrap-blocks')}
           value={SmOffset}
           allowReset={true}
           onChange={SmOffset => setAttributes({SmOffset})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <SelectControl label={__('Align Self', 'bootstrap-blocks')}
           value={SmAlignSelf}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "start", label: __('Start', 'bootstrap-blocks')},
             {value: "end", label: __('End', 'bootstrap-blocks')},
             {value: "center", label: __('Center', 'bootstrap-blocks')},
             {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
             {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
           ]}
           onChange ={SmAlignSelf => setAttributes({SmAlignSelf})}
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
           <SelectControl label={__('Flex Basis', 'bootstrap-blocks')}
           value={SmFlexBasis}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "auto", label: __('Auto', 'bootstrap-blocks')},
             {value: "0", label: __('0', 'bootstrap-blocks')},     ]}
           onChange ={SmFlexBasis => setAttributes({SmFlexBasis})}
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
           <RangeControl label={__('Column Size', 'bootstrap-blocks')}
           value={MdCol}
           allowReset={true}
           onChange={MdCol => setAttributes({MdCol})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <RangeControl label={__('Column Offset', 'bootstrap-blocks')}
           value={MdOffset}
           allowReset={true}
           onChange={MdOffset => setAttributes({MdOffset})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <SelectControl label={__('Align Self', 'bootstrap-blocks')}
           value={MdAlignSelf}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "start", label: __('Start', 'bootstrap-blocks')},
             {value: "end", label: __('End', 'bootstrap-blocks')},
             {value: "center", label: __('Center', 'bootstrap-blocks')},
             {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
             {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
           ]}
           onChange ={MdAlignSelf => setAttributes({MdAlignSelf})}
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
           <SelectControl label={__('Flex Basis', 'bootstrap-blocks')}
           value={MdFlexBasis}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "auto", label: __('Auto', 'bootstrap-blocks')},
             {value: "0", label: __('0', 'bootstrap-blocks')},     ]}
             onChange ={MdFlexBasis => setAttributes({MdFlexBasis})}
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
           <RangeControl label={__('Column Size', 'bootstrap-blocks')}
           value={LgCol}
           allowReset={true}
           onChange={LgCol => setAttributes({LgCol})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <RangeControl label={__('Column Offset', 'bootstrap-blocks')}
           value={LgOffset}
           allowReset={true}
           onChange={LgOffset => setAttributes({LgOffset})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <SelectControl label={__('Align Self', 'bootstrap-blocks')}
           value={LgAlignSelf}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "start", label: __('Start', 'bootstrap-blocks')},
             {value: "end", label: __('End', 'bootstrap-blocks')},
             {value: "center", label: __('Center', 'bootstrap-blocks')},
             {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
             {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
           ]}
           onChange ={LgAlignSelf => setAttributes({LgAlignSelf})}
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
           <SelectControl label={__('Flex Basis', 'bootstrap-blocks')}
           value={LgFlexBasis}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "auto", label: __('Auto', 'bootstrap-blocks')},
             {value: "0", label: __('0', 'bootstrap-blocks')},     ]}
           onChange ={LgFlexBasis => setAttributes({LgFlexBasis})}
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
           <RangeControl label={__('Column Size', 'bootstrap-blocks')}
           value={XlCol}
           allowReset={true}
           onChange={XlCol => setAttributes({XlCol})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <RangeControl label={__('Column Offset', 'bootstrap-blocks')}
           value={XlOffset}
           allowReset={true}
           onChange={XlOffset => setAttributes({XlOffset})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <SelectControl label={__('Align Self', 'bootstrap-blocks')}
           value={XlAlignSelf}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "start", label: __('Start', 'bootstrap-blocks')},
             {value: "end", label: __('End', 'bootstrap-blocks')},
             {value: "center", label: __('Center', 'bootstrap-blocks')},
             {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
             {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
           ]}
           onChange ={XlAlignSelf => setAttributes({XlAlignSelf})}
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
           <SelectControl label={__('Flex Basis', 'bootstrap-blocks')}
           value={XlFlexBasis}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "auto", label: __('Auto', 'bootstrap-blocks')},
             {value: "0", label: __('0', 'bootstrap-blocks')},     ]}
           onChange ={XlFlexBasis => setAttributes({XlFlexBasis})}
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
           <RangeControl label={__('Column Size', 'bootstrap-blocks')}
           value={XxlCol}
           allowReset={true}
           onChange={XxlCol => setAttributes({XxlCol})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <RangeControl label={__('Column Offset', 'bootstrap-blocks')}
           value={XxlOffset}
           allowReset={true}
           onChange={XxlOffset => setAttributes({XxlOffset})}
           min={1}
           max={12}
           />
         </PanelRow>
         <PanelRow>
           <SelectControl label={__('Align Self', 'bootstrap-blocks')}
           value={XxlAlignSelf}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "start", label: __('Start', 'bootstrap-blocks')},
             {value: "end", label: __('End', 'bootstrap-blocks')},
             {value: "center", label: __('Center', 'bootstrap-blocks')},
             {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
             {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
           ]}
           onChange ={XxlAlignSelf => setAttributes({XxlAlignSelf})}
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
           <SelectControl label={__('Flex Basis', 'bootstrap-blocks')}
           value={XxlFlexBasis}
           options={[
             {value: "", label: __('Select Option', 'bootstrap-blocks')},
             {value: "auto", label: __('Auto', 'bootstrap-blocks')},
             {value: "0", label: __('0', 'bootstrap-blocks')},     ]}
           onChange ={XxlFlexBasis => setAttributes({XxlFlexBasis})}
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
      </InspectorControls>

     {/*if hasChildBlocks is undefined, then add the "+" button to the block, which is used to add nested blocks.*/}
      <InnerBlocks
      renderAppender={ hasChildBlocks ? undefined : () => <InnerBlocks.ButtonBlockAppender /> }
      />
 		</div>
 	);
 }
