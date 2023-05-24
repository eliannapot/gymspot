modal1=document.getElementById("sign_up_modal");
modal1.innerHTML = `<div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="sign_up_modal_Title">GymSpot</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="sign_up">
                          <p>Don't have an account?</p>
                          <div id="successMessage">All credentials are valid.</div>
                          <div id="errorMessage"></div>
                          <h2>Sign Up</h2>
                          <form class="signin_form">    
                              <li><label> Username: &nbsp </label> <input type="text" name="username" id="sign_up_username" value="" placeholder="username" /></li>
                              <li><label> Password: &nbsp </label><input type="password" name="password" id="sign_up_password" value="" placeholder="password" /></li>
                              <li><label> Repeat password: &nbsp </label><input type="password" name="password" id="sign_up_password_repeat" value="" placeholder="repeat password" /></li>
                              <li><label> Email: &nbsp </label><input type="email" name="email" id="sign_up_email" value="" placeholder="email" /></li>
                          </form>
                          <button class="btn btn-primary" id="sign_up_button">Sign Up</button>
                        </div>
                        <div class="sign_in">
                          <p>Already have an account?</p>
                          <h2>Log In</h2>
                          <form class="signin_form">
                              <li><label> Username: &nbsp </label><input type="text" name="username" id="sign_in_username" value="" placeholder="username" /></li>
                              <li><label> Password: &nbsp </label><input type="password" name="password" id="sign_in_password" value="" placeholder="password" /></li>
                          </form>
                          <button class="btn btn-primary" id="sign_in_button" data-dismiss="modal">Log In</button>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary closing" data-dismiss="modal">Close</button>
                        <button type="button" class="btn closing btn-primary">Save changes</button> 
                      </div>
                    </div>
                    </div>`;
//the button that have 'closing' in their class automatically close the modal when pressed.


const username = document.getElementById('sign_up_username');
const email = document.getElementById('sign_up_email');
const password = document.getElementById('sign_up_password');  
const passwordConfirm = document.getElementById('sign_up_password_repeat');

const errorElement = document.getElementById('errorMessage');
const successElement = document.getElementById('successMessage');
//button.addEventListener("click", Validation);
email.addEventListener("input", Validation);
username.addEventListener("input", Validation);
password.addEventListener("input", Validation);
passwordConfirm.addEventListener("input", Validation);

function Validation() {
      
  let messages = [];

  //if all fields are filled
  if(!mandatoryTextCheck()) {
      messages.push('All fields are required');
  }

  //checks if the email is valid
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  if (!validateInput(email, emailRegex)) {
      messages.push('Email is not valid');
  }

  //checks if the username  is valid
  var usernameRegex = /^.{6,20}$/
  if (!validateInput(username, usernameRegex)) {
      messages.push('Username should be in between 6 and 20 characters.');
  }

  //if passwords match
  if (password.value !== passwordConfirm.value) {
      messages.push("Passwords do not match.");
  }

  //if password is valid
  var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
  if (!validateInput(password, passwordRegex) || !validateInput(passwordConfirm, passwordRegex) ) {
      messages.push('Password must be between 6 and 20 characters and must have at least one letter and one number');
  }

  if (messages.length > 0) {
      errorElement.innerText = messages.join(', ');
      successElement.style.display = "none";
  } else {
      successElement.style.display = "block";
      errorElement.style.display = "none";
  }
}

//All fields are filled in check
//returns true if theyre all good
function mandatoryTextCheck() {
  if (email.value === '' || email.value == null || 
  username.value === '' || username.value == null ||
  password.value === '' || password.value == null ||
  passwordConfirm.value === '' || passwordConfirm.value == null) {
      return false;
  }
  return true;
};

//Validate input
function validateInput(inputElement, regex) {
  const isValid = regex.test(inputElement.value);

  if (isValid) {
      inputElement.style.color = 'green';
      return true;
  } else {
      inputElement.style.color = 'red';
      return false;
  }
}
 
modal2=document.getElementById("logged_out_modal");
modal2.innerHTML = `<div class="modal-dialog modal-dialog-centered" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="logged_out_modal_Title">GymSpot</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div class="sign_up">
      <p>Successfully logged out!</p>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary closing" data-dismiss="modal">Close</button>
  </div>
</div>
</div>`;