<?php

function trip_utils_views_data() {

$data['trip_utils_touch']['table']['group'] = t('trip_utils_touch table');

 $data['trip_utils_touch']['table']['base'] = array(
   'field' => 'nid', 
   'title' => t('trip_utils_touch'), 
   'help' => t('Table what tracks when nodes were touched (changed or commented).'), 
   'weight' => -10,
 );

  $data['trip_utils_touch']['table']['join'] = array(
    'node' => array(
      'left_field' => 'nid', 
      'field' => 'nid',
    ),
  );

  $data['trip_utils_touch']['nid'] = array(
    'title' => t('trip_utils_touch nid'), 
    'help' => t('trip_utils_touch nid what references to node'),
    'relationship' => array(
      'base' => 'node', 
      'field' => 'nid', 
      'handler' => 'views_handler_relationship', 
      'label' => t('trip_utils_touch nid'),
    ),
  );

  $data['trip_utils_touch']['touch'] = array(
    'title' => t('trip_utils_touch touch'), 
    'help' => t('timestamp when node was touched (changed or commented).'), 
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