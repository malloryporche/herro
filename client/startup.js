 Meteor.startup(function () {
    // code to run on server at startup
      sAlert.config({
        effect: 'jelly',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 0
    });

    _alerts = function(type, message, urlTitle) {
         var configOverwrite = {
             effect: 'jelly',
             position: 'top-right',
             timeout: 5000,
             html: false,
             onRouteClose: true,
             stack: true,
             offset: 0
         };

         if (type != undefined ) {
             switch(type) {
             case "searching":
                 var searching = sAlert.success("Searching...", {timeout: 750});
                 break;
             case "success": 
                 var success = sAlert.success(message, configOverwrite);
                 break;
             case "info": 
                 var info = sAlert.info(message, configOverwrite);
                 break;
             case "warning": 
                 var warning = sAlert.warning(message, configOverwrite);
                 break;
             case "error": 
                 var error = sAlert.error(message, configOverwrite);
                 break;
             }
         } else {
             return;
         }

 }
  });