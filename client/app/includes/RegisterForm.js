Template.RegisterForm.events({

	//When Registration form is submitted
    'submit #register-form' : function(e, t) {

      e.preventDefault();

      var email = t.find('#account-email').value,
          password = t.find('#account-password').value;

        // Trim and validate the input

      Accounts.createUser({email: email, password : password}, function(err){
          if (err) {
            // Inform the user that account creation failed
            _alerts.error("error", "Account creation failed");
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
             _alerts.success("success", "Account created successfully.  Press any key to continue.");
          }

        });

      return false;
    }
  });
