function log_in(x){ //function that changes the log in button to log out and vice versa
    let log_in_btn = document.getElementById("sign_in_button");
    log_in_btn.addEventListener("click",function(){x=!x;update_page(x);});
    return x;
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

function update_page(x){ //function that updates the page when the log in button is pressed
    log_out(x);
    change_buttons(x);
    changePurchaseModal(x);
}

function log_out(x){ //function that changes the text of the log in button
    let log_out_btn = document.getElementById("Log-in");
    if (x == true){
        log_out_btn.innerText = "Log Out";}
    else{
        log_out_btn.innerText = "Log In";
    }
}

let log_in_state = false; //initialise the log in state
log_in_state = log_in(log_in_state); //call the log in function