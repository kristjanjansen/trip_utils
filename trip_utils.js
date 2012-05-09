(function ($) {

Drupal.behaviors.test = {
  attach: function (context, settings) {

   $('.logged-in .view-trip-test tr').each(function() {
  
    var nid = $(this).find('td.views-field-nid');
  
    $.ajaxSetup({ cache: false });
   
    $.getJSON(Drupal.settings.basePath + 'json/' + nid.html(), {
      },
      function (data, textStatus) {
      //  console.log(data);
        nid.parent().find('td.views-field-nothing').html(data.nodes[0].node.new_comments);
      }
    );
  
  });



  }
};

})(jQuery);