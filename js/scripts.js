var site = {
   init: function(){
      'use strict';
      site.misc.dataHeight();
   },
   misc: {
     init: function(){
       'use strict';
     },
     dataHeight: function() {
       'use strict';

       var elem = $('body').find('div[data-height]'),
           dataHeight = elem.data('height'),
           valueHeight = 'height:'+dataHeight+'px';

       elem.attr('style', valueHeight);
     }
   }
};

$(document).ready(function(){
   'use strict';

   site.init();
});
