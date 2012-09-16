(function ($) {

Drupal.behaviors.test = {
  attach: function (context, settings) {

   var page = getURLParameter('page');
    
    $.ajaxSetup({
      cache: false
    });
    
    var path = location.pathname + '/json?page=' + page ;

    $.getJSON(path, {
      },
      function (data, textStatus) {
        var len = data.nodes.length;
        for (var i = 0; i < len; i++) {
          if (data.nodes[i].node.new_comments > 0) {
          var str = '<span>'+ data.nodes[i].node.new_comments + '</span>';
          // console.log(str);
          $('.logged-in .view-forums td.views-field-nothing:eq(' + i + ')')
            .html(str);
          }
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