(function ($) {

Drupal.behaviors.test = {
  attach: function (context, settings) {

    function checkWindowSize() {
       var pageWidth = $(window).width();  
       if ( pageWidth <= 480 ) {
       }
       console.log(pageWidth);
    }

        checkWindowSize();
        var id;
        $(window).resize(function() {
            clearTimeout(id);
            id = setTimeout(checkWindowSize, 500);

        });  
    
    
  $('.logged-in .view-test tr').each(function() {
  
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