<?php function register_scripts() { //this function registers all scripts and styles. The global stylesheet (which contains some Bootstrap styles) is loaded from the theme's functions.php

  wp_register_style('bootstrap-box-sizing', plugins_url('/assets/universal-box-sizing.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');

  //First register all Bootstrap stylesheets, minus the global one that loads in the theme
  wp_register_style('bootstrap-row', plugins_url('/assets/bootstrap/dist/css/row.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');

  wp_register_style('bg-img', plugins_url('/assets/container-block-css/container-bg-cover.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');


  wp_register_style('bootstrap-xs-display', plugins_url('/assets/bootstrap/dist/css/xs/xs-display.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-margin-bottom', plugins_url('/assets/bootstrap/dist/css/xs/xs-margin-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-margin-left', plugins_url('/assets/bootstrap/dist/css/xs/xs-margin-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-margin-right', plugins_url('/assets/bootstrap/dist/css/xs/xs-margin-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-margin-top', plugins_url('/assets/bootstrap/dist/css/xs/xs-margin-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-padding-bottom', plugins_url('/assets/bootstrap/dist/css/xs/xs-padding-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-padding-left', plugins_url('/assets/bootstrap/dist/css/xs/xs-padding-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-padding-right', plugins_url('/assets/bootstrap/dist/css/xs/xs-padding-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-padding-top', plugins_url('/assets/bootstrap/dist/css/xs/xs-padding-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-col', plugins_url('/assets/bootstrap/dist/css/xs/xs-col.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-gutters', plugins_url('/assets/bootstrap/dist/css/xs/xs-gutters.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-justify-content', plugins_url('/assets/bootstrap/dist/css/xs/xs-justify-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-align-content', plugins_url('/assets/bootstrap/dist/css/xs/xs-align-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-align-items', plugins_url('/assets/bootstrap/dist/css/xs/xs-align-items.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-wrap', plugins_url('/assets/bootstrap/dist/css/xs/xs-wrap.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-align-self', plugins_url('/assets/bootstrap/dist/css/xs/xs-align-self.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xs-flex-basis', plugins_url('/assets/bootstrap/dist/css/xs/xs-flex-basis.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');


  wp_register_style('bootstrap-sm-display', plugins_url('/assets/bootstrap/dist/css/sm/sm-display.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-margin-bottom', plugins_url('/assets/bootstrap/dist/css/sm/sm-margin-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-margin-left', plugins_url('/assets/bootstrap/dist/css/sm/sm-margin-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-margin-right', plugins_url('/assets/bootstrap/dist/css/sm/sm-margin-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-margin-top', plugins_url('/assets/bootstrap/dist/css/sm/sm-margin-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-padding-bottom', plugins_url('/assets/bootstrap/dist/css/sm/sm-padding-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-padding-left', plugins_url('/assets/bootstrap/dist/css/sm/sm-padding-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-padding-right', plugins_url('/assets/bootstrap/dist/css/sm/sm-padding-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-padding-top', plugins_url('/assets/bootstrap/dist/css/sm/sm-padding-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-col', plugins_url('/assets/bootstrap/dist/css/sm/sm-col.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-gutters', plugins_url('/assets/bootstrap/dist/css/sm/sm-gutters.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-justify-content', plugins_url('/assets/bootstrap/dist/css/sm/sm-justify-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-align-content', plugins_url('/assets/bootstrap/dist/css/sm/sm-align-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-align-items', plugins_url('/assets/bootstrap/dist/css/sm/sm-align-items.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-wrap', plugins_url('/assets/bootstrap/dist/css/sm/sm-wrap.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-align-self', plugins_url('/assets/bootstrap/dist/css/sm/sm-align-self.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-sm-flex-basis', plugins_url('/assets/bootstrap/dist/css/sm/sm-flex-basis.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');


  wp_register_style('bootstrap-md-display', plugins_url('/assets/bootstrap/dist/css/md/md-display.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-margin-bottom', plugins_url('/assets/bootstrap/dist/css/md/md-margin-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-margin-left', plugins_url('/assets/bootstrap/dist/css/md/md-margin-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-margin-right', plugins_url('/assets/bootstrap/dist/css/md/md-margin-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-margin-top', plugins_url('/assets/bootstrap/dist/css/md/md-margin-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-padding-bottom', plugins_url('/assets/bootstrap/dist/css/md/md-padding-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-padding-left', plugins_url('/assets/bootstrap/dist/css/md/md-padding-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-padding-right', plugins_url('/assets/bootstrap/dist/css/md/md-padding-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-padding-top', plugins_url('/assets/bootstrap/dist/css/md/md-padding-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-col', plugins_url('/assets/bootstrap/dist/css/md/md-col.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-gutters', plugins_url('/assets/bootstrap/dist/css/md/md-gutters.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-justify-content', plugins_url('/assets/bootstrap/dist/css/md/md-justify-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-align-content', plugins_url('/assets/bootstrap/dist/css/md/md-align-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-align-items', plugins_url('/assets/bootstrap/dist/css/md/md-align-items.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-wrap', plugins_url('/assets/bootstrap/dist/css/md/md-wrap.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-align-self', plugins_url('/assets/bootstrap/dist/css/md/md-align-self.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-md-flex-basis', plugins_url('/assets/bootstrap/dist/css/md/md-flex-basis.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');


  wp_register_style('bootstrap-lg-display', plugins_url('/assets/bootstrap/dist/css/lg/lg-display.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-margin-bottom', plugins_url('/assets/bootstrap/dist/css/lg/lg-margin-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-margin-left', plugins_url('/assets/bootstrap/dist/css/lg/lg-margin-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-margin-right', plugins_url('/assets/bootstrap/dist/css/lg/lg-margin-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-margin-top', plugins_url('/assets/bootstrap/dist/css/lg/lg-margin-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-padding-bottom', plugins_url('/assets/bootstrap/dist/css/lg/lg-padding-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-padding-left', plugins_url('/assets/bootstrap/dist/css/lg/lg-padding-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-padding-right', plugins_url('/assets/bootstrap/dist/css/lg/lg-padding-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-padding-top', plugins_url('/assets/bootstrap/dist/css/lg/lg-padding-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-col', plugins_url('/assets/bootstrap/dist/css/lg/lg-col.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-gutters', plugins_url('/assets/bootstrap/dist/css/lg/lg-gutters.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-justify-content', plugins_url('/assets/bootstrap/dist/css/lg/lg-justify-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-align-content', plugins_url('/assets/bootstrap/dist/css/lg/lg-align-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-align-items', plugins_url('/assets/bootstrap/dist/css/lg/lg-align-items.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-wrap', plugins_url('/assets/bootstrap/dist/css/lg/lg-wrap.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-align-self', plugins_url('/assets/bootstrap/dist/css/lg/lg-align-self.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-lg-flex-basis', plugins_url('/assets/bootstrap/dist/css/lg/lg-flex-basis.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');


  wp_register_style('bootstrap-xl-display', plugins_url('/assets/bootstrap/dist/css/xl/xl-display.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-margin-bottom', plugins_url('/assets/bootstrap/dist/css/xl/xl-margin-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-margin-left', plugins_url('/assets/bootstrap/dist/css/xl/xl-margin-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-margin-right', plugins_url('/assets/bootstrap/dist/css/xl/xl-margin-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-margin-top', plugins_url('/assets/bootstrap/dist/css/xl/xl-margin-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-padding-bottom', plugins_url('/assets/bootstrap/dist/css/xl/xl-padding-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-padding-left', plugins_url('/assets/bootstrap/dist/css/xl/xl-padding-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-padding-right', plugins_url('/assets/bootstrap/dist/css/xl/xl-padding-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-padding-top', plugins_url('/assets/bootstrap/dist/css/xl/xl-padding-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-col', plugins_url('/assets/bootstrap/dist/css/xl/xl-col.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-gutters', plugins_url('/assets/bootstrap/dist/css/xl/xl-gutters.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-justify-content', plugins_url('/assets/bootstrap/dist/css/xl/xl-justify-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-align-content', plugins_url('/assets/bootstrap/dist/css/xl/xl-align-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-align-items', plugins_url('/assets/bootstrap/dist/css/xl/xl-align-items.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-wrap', plugins_url('/assets/bootstrap/dist/css/xl/xl-wrap.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-align-self', plugins_url('/assets/bootstrap/dist/css/xl/xl-align-self.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xl-flex-basis', plugins_url('/assets/bootstrap/dist/css/xl/xl-flex-basis.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');


  wp_register_style('bootstrap-xxl-display', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-display.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-margin-bottom', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-margin-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-margin-left', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-margin-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-margin-right', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-margin-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-margin-top', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-margin-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-padding-bottom', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-padding-bottom.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-padding-left', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-padding-left.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-padding-right', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-padding-right.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-padding-top', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-padding-top.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-col', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-col.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-gutters', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-gutters.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-justify-content', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-justify-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-align-content', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-align-content.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-align-items', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-align-items.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-wrap', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-wrap.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-align-self', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-align-self.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_style('bootstrap-xxl-flex-basis', plugins_url('/assets/bootstrap/dist/css/xxl/xxl-flex-basis.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');

  wp_register_style('bootstrap-tabs-css', plugins_url('/assets/bootstrap/dist/css/components/tabs.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_script('bootstrap-tabs-js', plugins_url('/assets/bootstrap/dist/js/tab.min.js', dirname(__FILE__, 2)), '', '5.1.3', true);


  wp_register_style('bootstrap-carousel-css', plugins_url('/assets/bootstrap/dist/css/components/carousel.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_script('bootstrap-carousel-js', plugins_url('/assets/bootstrap/dist/js/carousel.min.js', dirname(__FILE__, 2)), '', '5.1.3', true);

  wp_register_style('bootstrap-collapse-css', plugins_url('/assets/bootstrap/dist/css/components/collapse.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');


  wp_register_style('bootstrap-accordion', plugins_url('/assets/bootstrap/dist/css/accordions.min.css', dirname(__FILE__, 2)), '', '5.1.3', 'all');
  wp_register_script('bootstrap-collapse', plugins_url('/assets/bootstrap/dist/js/collapse.min.js', dirname(__FILE__, 2)), '', '5.1.3', true);
}
?>
