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
 import { useBlockProps, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
 import { ToggleControl, Panel, PanelBody, PanelRow, SelectControl, RangeControl } from '@wordpress/components';
 import { Fragment } from '@wordpress/element';

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
    XsMarginTop, XsMarginBottom, XsMarginLeft, XsMarginRight, XsPaddingTop, XsPaddingBottom, XsPaddingLeft, XsPaddingRight, XsDisplay, XsJustifyContent, XsAlignItems, XsWrap, XsAlignContent, XsGx, XsGy,
    SmMarginTop, SmMarginBottom, SmMarginLeft, SmMarginRight, SmPaddingTop, SmPaddingBottom, SmPaddingLeft, SmPaddingRight, SmDisplay, SmJustifyContent, SmAlignItems, SmWrap, SmAlignContent, SmGx, SmGy,
    MdMarginTop, MdMarginBottom, MdMarginLeft, MdMarginRight, MdPaddingTop, MdPaddingBottom, MdPaddingLeft, MdPaddingRight, MdDisplay, MdJustifyContent, MdAlignItems, MdWrap, MdAlignContent, MdGx, MdGy,
    LgMarginTop, LgMarginBottom, LgMarginLeft, LgMarginRight, LgPaddingTop, LgPaddingBottom, LgPaddingLeft, LgPaddingRight, LgDisplay, LgJustifyContent, LgAlignItems, LgWrap, LgAlignContent, LgGx, LgGy,
    XlMarginTop, XlMarginBottom, XlMarginLeft, XlMarginRight, XlPaddingTop, XlPaddingBottom, XlPaddingLeft, XlPaddingRight, XlDisplay, XlJustifyContent, XlAlignItems, XlWrap, XlAlignContent, XlGx, XlGy,
    XxlMarginTop, XxlMarginBottom, XxlMarginLeft, XxlMarginRight, XxlPaddingTop, XxlPaddingBottom, XxlPaddingLeft, XxlPaddingRight, XxlDisplay, XxlJustifyContent, XxlAlignItems, XxlWrap, XxlAlignContent, XxlGx, XxlGy
  } = attributes;
  const blockProps = useBlockProps();
  const ALLOWED_BLOCKS = [ 'bootstrap-blocks/column'];
  const innerBlocksProps = useInnerBlocksProps( blockProps, {
          allowedBlocks: ALLOWED_BLOCKS,
          placeholder: __('Add blocks', 'bootstrap-blocks')
  } );
	return (
    <div { ...blockProps }>
      <InspectorControls key="setting">
        <PanelBody title={__('XS Settings', 'bootstrap-blocks')} initialOpen={false}>
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
            <SelectControl label={__('Justify Content', 'bootstrap-blocks')}
            value={XsJustifyContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "between", label: __('Between', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "evenly", label: __('Evenly', 'bootstrap-blocks')}
            ]}
            onChange ={XsJustifyContent => setAttributes({XsJustifyContent})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Items', 'bootstrap-blocks')}
            value={XsAlignItems}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={XsAlignItems => setAttributes({XsAlignItems})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Flex Wrap', 'bootstrap-blocks')}
            value={XsWrap}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "nowrap", label: __('No Wrap', 'bootstrap-blocks')},
              {value: "wrap", label: __('Wrap', 'bootstrap-blocks')},
            ]}
            onChange ={XsWrap => setAttributes({XsWrap})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Content', 'bootstrap-blocks')}
            value={XsAlignContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={XsAlignContent => setAttributes({XsAlignContent})}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Horizontal Gutters', 'bootstrap-blocks')}
            value={XsGx}
            allowReset={true}
            onChange={XsGx => setAttributes({XsGx})}
            min={0}
            max={7}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Vertical Gutters', 'bootstrap-blocks')}
            value={XsGy}
            allowReset={true}
            onChange={XsGy => setAttributes({XsGy})}
            min={0}
            max={7}
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
            <SelectControl label={__('Justify Content', 'bootstrap-blocks')}
            value={SmJustifyContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "between", label: __('Between', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "evenly", label: __('Evenly', 'bootstrap-blocks')}
            ]}
            onChange ={SmJustifyContent => setAttributes({SmJustifyContent})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Items', 'bootstrap-blocks')}
            value={SmAlignItems}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={SmAlignItems => setAttributes({SmAlignItems})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Flex Wrap', 'bootstrap-blocks')}
            value={SmWrap}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "nowrap", label: __('No Wrap', 'bootstrap-blocks')},
              {value: "wrap", label: __('Wrap', 'bootstrap-blocks')},
            ]}
            onChange ={SmWrap => setAttributes({SmWrap})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Content', 'bootstrap-blocks')}
            value={SmAlignContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={SmAlignContent => setAttributes({SmAlignContent})}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Horizontal Gutters', 'bootstrap-blocks')}
            value={SmGx}
            allowReset={true}
            onChange={SmGx => setAttributes({SmGx})}
            min={0}
            max={7}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Vertical Gutters', 'bootstrap-blocks')}
            value={SmGy}
            allowReset={true}
            onChange={SmGy => setAttributes({SmGy})}
            min={0}
            max={7}
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
            <SelectControl label={__('Justify Content', 'bootstrap-blocks')}
            value={MdJustifyContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "between", label: __('Between', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "evenly", label: __('Evenly', 'bootstrap-blocks')}
            ]}
            onChange ={MdJustifyContent => setAttributes({MdJustifyContent})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Items', 'bootstrap-blocks')}
            value={MdAlignItems}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={MdAlignItems => setAttributes({MdAlignItems})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Flex Wrap', 'bootstrap-blocks')}
            value={MdWrap}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "nowrap", label: __('No Wrap', 'bootstrap-blocks')},
              {value: "wrap", label: __('Wrap', 'bootstrap-blocks')},
            ]}
            onChange ={MdWrap => setAttributes({MdWrap})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Content', 'bootstrap-blocks')}
            value={MdAlignContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={MdAlignContent => setAttributes({MdAlignContent})}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Horizontal Gutters', 'bootstrap-blocks')}
            value={MdGx}
            allowReset={true}
            onChange={MdGx => setAttributes({MdGx})}
            min={0}
            max={7}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Vertical Gutters', 'bootstrap-blocks')}
            value={MdGy}
            allowReset={true}
            onChange={MdGy => setAttributes({MdGy})}
            min={0}
            max={7}
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
            <SelectControl label={__('Justify Content', 'bootstrap-blocks')}
            value={LgJustifyContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "between", label: __('Between', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "evenly", label: __('Evenly', 'bootstrap-blocks')}
            ]}
            onChange ={LgJustifyContent => setAttributes({LgJustifyContent})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Items', 'bootstrap-blocks')}
            value={LgAlignItems}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={LgAlignItems => setAttributes({LgAlignItems})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Flex Wrap', 'bootstrap-blocks')}
            value={LgWrap}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "nowrap", label: __('No Wrap', 'bootstrap-blocks')},
              {value: "wrap", label: __('Wrap', 'bootstrap-blocks')},
            ]}
            onChange ={LgWrap => setAttributes({LgWrap})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Content', 'bootstrap-blocks')}
            value={LgAlignContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={LgAlignContent => setAttributes({LgAlignContent})}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Horizontal Gutters', 'bootstrap-blocks')}
            value={LgGx}
            allowReset={true}
            onChange={LgGx => setAttributes({LgGx})}
            min={0}
            max={7}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Vertical Gutters', 'bootstrap-blocks')}
            value={LgGy}
            allowReset={true}
            onChange={LgGy => setAttributes({LgGy})}
            min={0}
            max={7}
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
            <SelectControl label={__('Justify Content', 'bootstrap-blocks')}
            value={XlJustifyContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "between", label: __('Between', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "evenly", label: __('Evenly', 'bootstrap-blocks')}
            ]}
            onChange ={XlJustifyContent => setAttributes({XlJustifyContent})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Items', 'bootstrap-blocks')}
            value={XlAlignItems}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={XlAlignItems => setAttributes({XlAlignItems})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Flex Wrap', 'bootstrap-blocks')}
            value={XlWrap}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "nowrap", label: __('No Wrap', 'bootstrap-blocks')},
              {value: "wrap", label: __('Wrap', 'bootstrap-blocks')},
            ]}
            onChange ={XlWrap => setAttributes({XlWrap})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Content', 'bootstrap-blocks')}
            value={XlAlignContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={XlAlignContent => setAttributes({XlAlignContent})}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Horizontal Gutters', 'bootstrap-blocks')}
            value={XlGx}
            allowReset={true}
            onChange={XlGx => setAttributes({XlGx})}
            min={0}
            max={7}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Vertical Gutters', 'bootstrap-blocks')}
            value={XlGy}
            allowReset={true}
            onChange={XlGy => setAttributes({XlGy})}
            min={0}
            max={7}
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
            <SelectControl label={__('Justify Content', 'bootstrap-blocks')}
            value={XxlJustifyContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "between", label: __('Between', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "evenly", label: __('Evenly', 'bootstrap-blocks')}
            ]}
            onChange ={XxlJustifyContent => setAttributes({XxlJustifyContent})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Items', 'bootstrap-blocks')}
            value={XxlAlignItems}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "baseline", label: __('Baseline', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={XxlAlignItems => setAttributes({XxlAlignItems})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Flex Wrap', 'bootstrap-blocks')}
            value={XxlWrap}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "nowrap", label: __('No Wrap', 'bootstrap-blocks')},
              {value: "wrap", label: __('Wrap', 'bootstrap-blocks')},
            ]}
            onChange ={XxlWrap => setAttributes({XxlWrap})}
            />
          </PanelRow>
          <PanelRow>
            <SelectControl label={__('Align Content', 'bootstrap-blocks')}
            value={XxlAlignContent}
            options={[
              {value: "", label: __('Select Option', 'bootstrap-blocks')},
              {value: "start", label: __('Start', 'bootstrap-blocks')},
              {value: "end", label: __('End', 'bootstrap-blocks')},
              {value: "center", label: __('Center', 'bootstrap-blocks')},
              {value: "around", label: __('Around', 'bootstrap-blocks')},
              {value: "stretch", label: __('Stretch', 'bootstrap-blocks')},
            ]}
            onChange ={XxlAlignContent => setAttributes({XxlAlignContent})}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Horizontal Gutters', 'bootstrap-blocks')}
            value={XxlGx}
            allowReset={true}
            onChange={XxlGx => setAttributes({XxlGx})}
            min={0}
            max={7}
            />
          </PanelRow>
          <PanelRow>
            <RangeControl label={__('Vertical Gutters', 'bootstrap-blocks')}
            value={XxlGy}
            allowReset={true}
            onChange={XxlGy => setAttributes({XxlGy})}
            min={0}
            max={7}
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
      <Fragment {...innerBlocksProps} />
    </div>
 );
}
