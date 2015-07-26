Template.LoginForm.events({

	//When user submits login form
	 'submit #login-form' : function(e, t){

      e.preventDefault();

      // retrieve the input field values

      var 	email = t.find('#login-email').value, 
      		password = t.find('#login-password').value;

        // Trim and validate your fields here.... 

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.

        Meteor.loginWithPassword(email, password, function(err){
        
        if (err)
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed. 
          _alerts.error("error", "Your login attempt has failed.  Please try again.");
        else
          // The user has been logged in.
      	 _alerts.success("success", "You have successfully logged in.  Press any key to continue.")
      });
         return false; 
      }
  });
