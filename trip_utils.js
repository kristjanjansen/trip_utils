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
          //  console.log(data.nodes[i].node);
          var str = '<a href="' + Drupal.settings.basePath + 'node/' + data.nodes[i].node.nid + '#new">'+ data.nodes[i].node.new_comments + '</a>';
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