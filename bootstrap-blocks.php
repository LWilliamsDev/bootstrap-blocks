<?php
/**
 * Plugin Name:       Bootstrap Blocks
 * Description:       Example WordPress Gutenberg Bootstrap blocks
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Lisa Williams
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bootstrap-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

require_once(plugin_dir_path( __FILE__) . 'includes/load.php');

function create_block_bootstrap_blocks_block_init() {

  //Automatically load files from the bootstrap-blocks/register_block_type folder. Each block is its own php file.
  load_files(plugin_dir_path( __FILE__ ) . 'includes/register_block_type');


}
add_action( 'init', 'create_block_bootstrap_blocks_block_init' );

//Automatically load files from the bootstrap-blocks/common_functions folder.
load_files(plugin_dir_path( __FILE__ ) . 'includes/common_functions');

//Automatically load files from the bootstrap-blocks/front_end_render folder. Each block's front end render function is its own php file.
load_files(plugin_dir_path( __FILE__ ) . 'includes/front_end_render');


function load_assets() { //this function handles loading of assets on the front end only
  register_scripts();
	global $post;

  //Load certain stylesheets if a specific block is used
  if ( has_block( 'bootstrap-blocks/row' ) ) {
	   wp_enqueue_style('bootstrap-row');
   }

  if ( has_block( 'bootstrap-blocks/tabs-container' ) ) {
	   wp_enqueue_style('bootstrap-tabs-css');
	   wp_enqueue_script('bootstrap-tabs-js');
   }

  if ( has_block( 'bootstrap-blocks/carousel-container' ) ) {
	   wp_enqueue_style('bootstrap-carousel-css');
	   wp_enqueue_script('bootstrap-carousel-js');
    }

  if ( has_block( 'bootstrap-blocks/accordion-container' ) ) {
	     wp_enqueue_style('bootstrap-accordion');
  }
  if (has_block( 'bootstrap-blocks/collapse-container' )) {
    wp_enqueue_style('bootstrap-collapse-css');
  }
  if ( has_block( 'bootstrap-blocks/accordion-container' )  || has_block( 'bootstrap-blocks/collapse-container' )) {
       wp_enqueue_script('bootstrap-collapse');
       wp_enqueue_style('bootstrap-collapse-css');

  }

//This next section loads styles and scripts based on block attribute values

//Parse blocks to get large array containing data for all blocks on the page
	$blocks = parse_blocks($post->post_content);

  //Must use the recursive iterator when looping through $blocks.
  //If we loop through $blocks without using the recursive iterator, it only hits parent blocks. Nested blocks are stored as the "InnerBlocks" sub array of parent blocks.
  $iterator = new RecursiveIteratorIterator(
    new RecursiveArrayIterator(
        $blocks
    )
  );

  //Use loop to look for the specific attributes that require enqueuing assets.
  //Evaluate value with switch statement and enqueue proper style/script
  foreach($iterator as $key=>$value) {

    $breakpointValue = substr($key, 0, 2); //store breakpoint in a new variable
      if ($breakpointValue == 'Xs') {
	       $breakpoint = 'xs';
	    }
	   else {
		     $breakpoint = getBreakpoint($breakpointValue);
	   }

	  if (!empty($breakpoint)) { //attributes that are not Bootstrap breakpoints will return "" as $breakpoint. We only want to run the following functions if it's a Bootstrap attribute.
		    $attributeType = getAttributeType($breakpointValue, $key); //store $key, without the $breakpointValue, as a separate variable. This creates 2 variables - one with the breakpoint value and one with just the key. For instance, "XsMarginBottom": $breakpoint = Xs and $attributeType = MarginBottom
		    $attribute = transformAttribute($breakpoint, $attributeType, $value, 'loading'); //Take $attributeType and reformat it for loading. For instance, the handle for the XsMarginBottom stylesheet is bootstrap-xs-margin-bottom. In this case, this function transforms MarginBottom to margin-bottom. It is then used to dynamically call the correct style or script in line 138-139 (as of this writing).
	  }

	  if (!empty($breakpoint) && !(empty($attribute))) {
		    if ($attribute == 'bg-img') { //the bg-img attribute does not follow the same naming convention as other attributes
			       if (wp_style_is($attribute) !== 'enqueued') {
				           wp_enqueue_style($attribute);
			       }
		     }
		    else { //all other attributes follow this naming convention for the handle, {} notes a dynamic value - bootstrap-{breakpoint}-{attributeName}.
		         if (wp_style_is('bootstrap-' . $breakpoint . '-' . $attribute) !== 'enqueued') {
		         wp_enqueue_style('bootstrap-' . $breakpoint . '-' . $attribute);
	           }
	      }
	   }

  }

}
add_action( 'wp_enqueue_scripts', 'load_assets' );

function load_block_editor_assets() { //this function loads assets necessary for editing content in the block editor. Front end loading is handled via the load_assets function.
	register_scripts();
	if (has_block('bootstrap-blocks/qr')) { //the QR code block requires this script to be loaded.
		wp_enqueue_script('qr-code');
	}

}
add_action( 'enqueue_block_editor_assets', 'load_block_editor_assets');
