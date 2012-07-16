<?php

function trip_utils_views_data() {


 $data['node']['trip_last_comment'] = array(
   'title' => t('Trip last comment date'), 
   'help' => t('The date the last comment was posted.'), 
   'field' => array(
     'handler' => 'views_handler_field_date',
     'click sortable' => TRUE,
   ),
   'sort' => array(
     'handler' => 'views_handler_sort_date',
   ),
   'filter' => array(
     'handler' => 'views_handler_filter_date',
   ),
 );
   
  return $data;
    
}