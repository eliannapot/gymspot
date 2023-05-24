const timeFrames = ["1 month","3 months","6 months","12 months"]; //in months
const prices = [100, 90, 80, 70]; //in euros


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

function initialisePrices(){ //function that initialises the prices of the packages when the page loads
    changeText(prices[0],document.getElementById("globalPackageSelect"),1);
    changeText(prices[0],document.getElementById("localPackageSelect"),1);
}

function log_in(x){ //function that changes the log in button to log out and vice versa
    let log_in_btn = document.getElementById("sign_in_button");
    log_in_btn.addEventListener("click",function(){x=!x;update_page(x);});
    return x;
}

function update_page(x){ //function that updates the page when the log in button is pressed
    log_out(x);
    changeSignUp(x);
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

const selectGlobal = document.getElementById("globalPackageSelect"); //get the select elements
const selectLocal = document.getElementById("localPackageSelect");
let log_in_state = false; //initialise the log in state
log_in_state = log_in(log_in_state); //call the log in function

initialisePrices(); 

selectLocal.addEventListener("change", function(event){ //add event listeners to the select elements that call the findTimeFrame function when the value changes 
    selectedLocalOption = event.target.value;
    findTimeFrame(selectedLocalOption,event.target);
});

selectGlobal.addEventListener("change", function(event){
    selectedGlobalOption = event.target.value;
    findTimeFrame(selectedGlobalOption,event.target);
});