

function log_in(x){
    console.log("whennnn 3")
    let log_in_btn = document.getElementById("sign_in_button");
    log_in_btn.addEventListener("click",function(){x=!x;update_page(x);});
    return x;
}

function update_page(x){
    console.log("whennnn 2")
    check_logged_state();
    weekly_streak(x);
    log_out(x);
}

function log_out(x){
    console.log("whennnn1")
    let log_out_btn = document.getElementById("Log-in");
    if (x == true){
        log_out_btn.innerText = "Log Out";}
    else{
        log_out_btn.innerText = "Log In";
    }
}

function weekly_streak(x){
    let weekly_streak= document.getElementById("weekly_streak");
    if (x==true){
        weekly_streak.innerHTML = "You have a weekly streak of 3 days";
    }
    else{
        weekly_streak.innerHTML = "Please Log in to see your weekly streak";
    }
}

let log_in_state = false;
log_in_state = log_in(log_in_state);

// Get the modals
const modal1=document.getElementById("sign_up_modal");
const modal2=document.getElementById("logged_out_modal");

const log_btn = document.getElementById("Log-in");
log_btn.addEventListener("click", check_logged_state);

function check_logged_state() {

    const buttonText = log_btn.textContent;
    if(buttonText === "Log in") {
        console.log("it says log in")
        showModal(modal1);
    } else if(buttonText === "Log Out") {
        console.log("it says log out");
        // modal2.classList.add('show');
        showModal(modal2);
    } else {
        console.log("error");
    }
}

// Get the button element



// Function to show a modal
function showModal(modal) {
    modal.classList.add('show');
    modal.style.display = 'block';
    
}

// Function to hide a modal
function hideModal(modal) {
  modal.classList.remove('show');
  modal.style.display = 'none'
}

var closeButtons1 = document.getElementsByClassName('close');
var closeButtons2 = document.getElementsByClassName('closing');

// Attach click event listeners to the close buttons
for (var i = 0; i < closeButtons1.length; i++) {
    closeButtons1[i].addEventListener('click', function () {
      modal1.style.display = 'none';
      modal2.style.display = 'none';
    });
  }

for (var i = 0; i < closeButtons2.length; i++) {
    closeButtons2[i].addEventListener('click', function () {
      modal1.style.display = 'none';
      modal2.style.display = 'none';
    });
  }

// Add click event listeners to close buttons within modals
// document.querySelectorAll('.close').forEach(function(closeButton) {
//   closeButton.addEventListener('click', function() {
//     // Get the parent modal element
//     const modal = this.parentElement.parentElement;

//     // Hide the modal when the close button is clicked
//     // modal1.style.display = 'none'
//     // modal2.style.display = 'none'
//     hideModal(modal);
//   });
// });