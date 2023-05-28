// Get the modals
const modal1=document.getElementById("sign_up_modal");
const modal2=document.getElementById("logged_out_modal");

// LOGIN

function log_in(x){
    let log_in_btn = document.getElementById("sign_in_button");
    log_in_btn.addEventListener("click",function(){x=!x;update_page(x);});
    return x;
}

function update_page(x){
    check_logged_state();
    change_buttons(x);
    changePurchaseModal(x);
    log_out(x);
}

let log_in_state = false;
log_in_state = log_in(log_in_state);

function log_out(x){
    let log_out_btn = document.getElementById("Log-in");
    if (x == true){
        log_out_btn.innerText = "Log Out";
        log_in_state = false;
    } else {
        log_out_btn.innerText = "Log in";
        log_in_state = true;
    }
}

function changePurchaseModal(x){ //function that changes the text of the purchase modal
    let purchase_modal_Title = document.getElementById("purchase_modal_Title");
    let purchase_modal_Body = document.getElementById("purchase_modal_Body");
    if (x == true){
        purchase_modal_Title.innerHTML = `<h5>Thank you for your booking!</h5>`;
        purchase_modal_Body.innerHTML = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
    }
    else{
        purchase_modal_Title.innerHTML = `<h5 class="modal-title" id="purchase_modal_Title">PLEASE LOG IN TO BOOK!</h5>`;
        purchase_modal_Body.innerHTML = `<button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close"> OK!</button>>`;
    }
}

function change_buttons(x){
    let buttons=document.querySelectorAll(".sign_up_button")
    if (x==true){
        buttons.forEach((button) => {
            button.setAttribute('data-target', '#purchase_modal');
            button.textContent="book";
        })
    }
    else{
        buttons.forEach((button) => {
            button.setAttribute('data-target', '#sign_up_modal');
            button.textContent="Sign up";
        })
    }
}


const log_btn = document.getElementById("Log-in");
log_btn.addEventListener("click", check_logged_state);


function check_logged_state() {
    const buttonText = log_btn.textContent;
    if(buttonText === "Log in" || buttonText === "Log In") {
        showModal(modal1);
    } else if(buttonText === "Log Out") {
        showModal(modal2);
        change_buttons(log_in_state);
        changePurchaseModal(log_in_state);
        log_out(log_in_state); 
    } else {
        console.log("error");
    }
}

/// MODALS
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


//Program signup button

const programSignUpBtn = document.getElementById('program-signup');
programSignUpBtn.addEventListener('click', function() {
    const buttonText = programSignUpBtn.innerHTML.trim();
    console.log(buttonText);

    if (buttonText === 'book') {
        console.log('it is book');
        // Redirect to another page
        window.location.href = '/programs/addUserToProgram';

        // After a delay, redirect back to the original page
        setTimeout(function() {
        window.location.href = '/programs';
        }, 1000); // 1000 milliseconds = 1 second
        console.log('success');
    }
});

