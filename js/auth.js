// Function to handle signup
function signUp() {

  // Gettingthe signup form in the HTML document and add an event listener for form submission
  document.querySelector("#signup_form").addEventListener("submit", (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Getting the stored signup data from localStorage, or initialize an empty object if no data exists
    let signup_data = JSON.parse(localStorage.getItem("signup_data")) || {};

    // Getting the values from the signup form inputs
    let userName11 = document.querySelector("#user_full_name1").value;
    let userEmail11 = document.querySelector("#user_email").value;
    let userPassword11 = document.querySelector("#user_password1").value;
    let userConfirmPassword11 = document.querySelector("#user_confirm_password").value;
    // let userProfileImageUrl = document.querySelector("#user_profile_image_url").value;

    // Check if the password and confirm password match
    if (userPassword11 === userConfirmPassword11) {
      // Create an object to store the new user's data
      let newSignUp = {
        username: userName11,
        useremail: userEmail11,
        userpassword: userPassword11,
        // userprofileimage: userProfileImageUrl
      };

      // Add the new user data to the signup data object
      signup_data[userEmail11] = newSignUp;

      // Store the updated signup data in localStorage
      localStorage.setItem("signup_data", JSON.stringify(signup_data));

      // Show a success message
      alert("Signup successful! Redirecting to the login page.");

      // Redirect to the login page
      location.href = "login.html";
      document.querySelector("#signup_form").reset(); 
    } else {
      // Show this message if passwords do not match
      alert("Passwords do not match. Please try again.");
    }
  });
}


// Function to handle login
function logIn() {

  // Gettingthe login form in the HTML document and add an event listener for form submission
  document.querySelector("#login_form").addEventListener("submit", e => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Getting the values from the login form inputs
    let userName22 = document.querySelector("#user_full_name2").value;
    let userPassword22 = document.querySelector("#user_password2").value;
    let userEmail22 = document.querySelector("#user_email2").value;


    // Getting the stored signup data from localStorage
    let signup_data = JSON.parse(localStorage.getItem("signup_data"));

    // Check if signup_data exists 
    if (signup_data) {
      // Check if the username exists in the stored signup data
      if (signup_data[userEmail22]) {
        let signup_username = signup_data[userEmail22].username;
        let signup_userpassword = signup_data[userEmail22].userpassword;

        // Validate the login credentials
        if (signup_username === userName22 && signup_userpassword === userPassword22) {
          alert(`Hello ${signup_username}, this is your dashboard.`);
          location.href = "index.html";
          // clear the form after successful login
          document.querySelector("#login_form").reset(); 
        } else {
          alert("Login failed. Incorrect username or password.");
        }
      } else {
        alert("Login failed. Username not found.");
      }
    } else {
      alert("No signup data found. Please sign up first.");
    }
  });
}


//Logging out script
function logOut() {
  alert("Do you reelly want to log out")
  document.getElementById("btn_header_links1").addEventListener("click", (e) => {
  alert("Do you reelly want to log out")
  location.href="login.html";

});

}

logOut();


// Function to handle password reset
function resetPassword() {

  // Gettingthe reset password form in the HTML document and add an event listener for form submission
  document.querySelector("#reset_password_form").addEventListener("submit", e => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Getting the values from the reset password form inputs
    let resetEmail = document.querySelector("#reset_email").value;
    let resetNewPassword = document.querySelector("#reset_new_password").value;
    let resetConfirmPassword = document.querySelector("#reset_confirm_password").value;

    // Getting the stored signup data from localStorage
    let signup_data = JSON.parse(localStorage.getItem("signup_data"));

    // Check if signup_data exists and if the email is in the signup data
    if (signup_data && signup_data[resetEmail]) {
      // Check if the new password and confirm new password match
      if (resetNewPassword === resetConfirmPassword) {
        // Update the user's password
        signup_data[resetEmail].userpassword = resetNewPassword;

        // Store the updated signup data in localStorage
        localStorage.setItem("signup_data", JSON.stringify(signup_data));

        // Show a success message
        alert("Password reset successful! Redirecting to the login page.");

        // Redirect to the login page
        location.href = "login.html";
      } else {
        // Show an error message if passwords do not match
        alert("Passwords do not match. Please try again.");
      }
    } else {
      // Show an error message if the email is not found
      alert("Email not found. Please check your email and try again.");
    }
  });
}


// Function to handle password reset
function forgetPassword() {

  // Gettingthe reset password form in the HTML document and add an event listener for form submission
  document.querySelector("#forget_password_form").addEventListener("submit", e => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Getting the values from the forget password form inputs
    let forgetEmail = document.querySelector("#forget_password_email").value;
    let forgetUserFullName = document.querySelector("#forget_password_full_name").value;
  

    // Getting the stored signup data from localStorage
    let signup_data = JSON.parse(localStorage.getItem("signup_data"));

    //Checking if signup_data exists and if the email is in the signup data
    if (signup_data && signup_data[forgetEmail]) {
      let forgetKey = signup_data[forgetEmail];
  
     // Checking if the forget password user name and signup data user data are the same
      if (forgetUserFullName === forgetKey.username) {
        //Show a success message
        alert("Redirecting to the reset password page.");

        // Redirect to the reset password page
        location.href = "reset_password2.html";
      } else {
        // Show an error message if user name do not match
        alert("User name do not match. Please try again.");
      }
    } else {
      // Show an error message if the email is not found
      alert("Email not found. Please check your email and try again.");
    }
  });
}
