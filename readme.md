## WordPress Gutenberg Bootstrap Blocks
This WordPress plugin is intended to provide a framework for WordPress Gutenberg Bootstrap Blocks. It is not comprehensive (as in, it currently does not include ALL Bootstrap components and utilities). However, it offers a framework where these things can be added.

Additionally, there are some Bootstrap styles that you may want to load globally. Since that is different from website to website, this plugin does not do that.

## When to Choose These Blocks Over Another Package
These blocks are appropriate in situations where:
* You want to optimize for site speed (Core Web Vitals)
* Your team includes a technical person who uses the blocks to create custom patterns. Your non-technical staff then creates pages based on your custom patterns.
* You need to take advantage of more Bootstrap utilities in order to have maximum flexibility in the layouts you can create.

## Core Web Vitals Optimization
On the front end, these blocks generally load only styles/scripts that are being used. This is achieved by:

* Using the Bootstrap 5 NPM package to break down Bootstrap into multiple stylesheets and/or scripts
* Having a loading function that hook into wp_enqueue_scripts. The loading function detect block(s) on the page, block attribute values, and then loads the appropriate stylesheets/scripts based on either a) if a specific block is present (for components) or b) attribute values (for example, if a column block has an attribute for the LG columns, then load the LG columns stylesheet)

## Editor VS Front End Rendering
This code provides an approximation of what the blocks look like in the Gutenberg Editor. Due to special styling considerations for the editor - many blocks have slightly different CSS rules than what is used on the front end. For the most accurate preview, you need to click the preview button, and select the option to preview in a new window.

## Why Dynamic Blocks? (PHP front end rendering)
Why did I decide to use PHP for front end rendering, instead of the native JavaScript front end rendering?

Eventually, you need to upgrade Bootstrap. This involves changing the HTML markup of the blocks. To me, the easiest way to accomplish this is to a) update the HTML markup in the PHP front end rendering functions and b) use search/replace queries to update block attributes if necessary.

Alternatively, you could update your code and then do database search/replace queries to update the saved HTML markup in the database. However, a) this method involves way more search/replace queries than the chosen method and b) due to the higher number and scope of the search/replace queries, I believe this method may be more prone to errors and/or unintended consequences.

## Organization
This section outlines the general structure of the plugin.

* **assets:** contains assets, like Bootstrap, that get loaded in the front end and/or editor
* **includes:** contains PHP functions that are autoloaded in the main plugin PHP file
* **includes/common_functions:** contains PHP functions that are repeatedly used in other PHP functions. Each function has its own PHP file.
* **includes/front_end_render:** contains PHP front end render functions. Each render function has its own PHP file.
* **includes/register_block_type:** contains PHP functions that registers blocks. Each register block function has its own PHP file.
* **src:** contains all of the JS code for each individual block. Each subfolder represents 1 block. There are some JS files in the root of the src folder, and they represent functions that are used in multiple blocks.

## Packages Used
* WordPress Create Block(https://www.npmjs.com/package/@wordpress/create-block)
* Bootstrap(https://www.npmjs.com/package/bootstrap)
