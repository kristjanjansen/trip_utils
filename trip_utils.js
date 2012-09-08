(function ($) {

Drupal.behaviors.test = {
  attach: function (context, settings) {

   var type = getURLParameter('type');
   var page = getURLParameter('page');
    
    $.ajaxSetup({
      cache: false
    });
    
    $.getJSON(Drupal.settings.basePath + 'json/?type=' + type + '&page=' + page, {
      },
      function (data, textStatus) {
        var len = data.nodes.length;
        for (var i = 0; i < len; i++) {
          var str = data.nodes[i].node.new_comments;
          // console.log(str);
          $('.logged-in .view-forum td.views-field-nothing:eq(' + i + ')')
            .html(str);
        }
      }
      );

  }
  };
  
  })(jQuery);
        

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}