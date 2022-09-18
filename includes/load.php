<?php
function load_files($dir) {
$files = array_diff(scandir($dir), array('..', '.', '.DS_Store')); //needed to remove non-PHP entries from files array

foreach ($files as $file) {
    require_once($dir . '/' . $file);
  }
}
  ?>
