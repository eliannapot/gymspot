/// data
const timeFrames = ["1 month","3 months","6 months","12 months"]; //in months
const prices = [100, 90, 80, 70]; //in euros

/// INITIALISERS

function initialisePrices(){ //function that initialises the prices of the packages when the page loads
    changeText(prices[0],document.getElementById("globalPackageSelect"),1);
    changeText(prices[0],document.getElementById("localPackageSelect"),1);
}

initialisePrices();

//// PACKAGE PRICES
// get updates on "change"

function changeText(price,select,time){ //function that changes the text of the price field
    if (select === document.getElementById("globalPackageSelect")){ //if the select is the global one
        const field = document.getElementById("globalPrice"); //get the field
        field.innerHTML = `${price + 0.3*price}$ / month or ${(price + 0.3*price)*time}$ total` ; //change the text
    }
    else if(select === document.getElementById("localPackageSelect")){ //if the select is the local one
        const field = document.getElementById("localPrice");
        field.innerHTML = `${price}$ / month or ${price*time}$ total` ;
    }
}

function findTimeFrame(timeFrame,select){ //function that finds the time frame and calls the changeText function
    for (let i = 0; i < timeFrames.length; i++) { 
        if (timeFrame === timeFrames[i]) { //if the time frame is found
            time= parseInt(timeFrames[i]); //get the time as an integer
            changeText(prices[i],select,time); //call the changeText function
        }
    }
}

const selectGlobal = document.getElementById("globalPackageSelect"); //get the select elements
const selectLocal = document.getElementById("localPackageSelect");

selectLocal.addEventListener("change", function(event){ //add event listeners to the select elements that call the findTimeFrame function when the value changes 
    selectedLocalOption = event.target.value;
    findTimeFrame(selectedLocalOption,event.target);
});

selectGlobal.addEventListener("change", function(event){
    selectedGlobalOption = event.target.value;
    findTimeFrame(selectedGlobalOption,event.target);
});

/////// LOG IN

function log_in(x){
    let log_in_btn = document.getElementById("sign_in_button");
    log_in_btn.addEventListener("click",function(){
        x=!x;update_page(x);});
    return x;
}

function update_page(x){
   // check_logged_state();
    changeSignUp(x);
    changePurchaseModal(x);
    log_out(x); 
}

let log_in_state = false;
log_in_state = log_in(log_in_state);

function log_out(x){
    let log_out_btn = document.getElementById("Log-in");
    if (x == true){
        log_out_btn.innerText = "Log Out";
        // log_in_state = false;
    } else {
        log_out_btn.innerText = "Log in";
        log_in_state = true;
    }
}

function changeSignUp(x){ //function that changes the text of the sign up button
    let signUpLocal = document.getElementById("localPurchase");
    let signUpGlobal = document.getElementById("globalPurchase");
    if (x == true){
        signUpLocal.innerHTML=`<button class="btn btn-primary other-service-btn" data-toggle="modal" data-target="#purchase_modal">Purchase</button> `;
        signUpGlobal.innerHTML=`<button class="btn btn-primary other-service-btn" data-toggle="modal" data-target="#purchase_modal">Purchase</button> `;
    }
    else{
        signUpLocal.innerHTML=`<button class="btn btn-primary other-service-btn" data-toggle="modal" data-target="#sign_up_modal">Sign Up</button> `;
        signUpGlobal.innerHTML=`<button class="btn btn-primary other-service-btn" data-toggle="modal" data-target="#sign_up_modal">Sign Up</button> `;
    }
}

function changePurchaseModal(x){ //function that changes the text of the purchase modal
    let purchase_modal_Title = document.getElementById("purchase_modal_Title");
    let purchase_modal_Body = document.getElementById("purchase_modal_Body");
    if (x == true){
        purchase_modal_Title.innerHTML = `<h5>Thank you for your purchase!</h5>`;
        purchase_modal_Body.innerHTML = `<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
    }
    else{
        purchase_modal_Title.innerHTML = `<h5 class="modal-title" id="purchase_modal_Title">PLEASE LOG IN TO PURCHASE!</h5>`;
        purchase_modal_Body.innerHTML = `<button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close"> OK!</button>>`;
    }
}

// Get the modals
const modal1=document.getElementById("sign_up_modal");
const modal2=document.getElementById("logged_out_modal");

const log_btn = document.getElementById("Log-in");
log_btn.addEventListener("click", check_logged_state);


function check_logged_state() {
    const buttonText = log_btn.textContent;
    if(buttonText === "Log in" || buttonText === "Log In") {
        showModal(modal1);
    } else if(buttonText === "Log Out") {
        log_in_state = false;
        showModal(modal2);
        update_page(log_in_state)
    } else {
        console.log("error");
    }
}

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