//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
var billStringField = document.querySelector(".billString");

var calculateInstance = CalculateBill();


function calculateBtnClicked() {
    // get the string entered in the textArea
    var billString = billStringField.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    calculateInstance.totalCost(billString);


    //round to two decimals
    if (calculateInstance.getCritical()) {
        billTotalElement.classList.add("danger");
        billTotalElement.classList.remove("warning");
    }
    else if (calculateInstance.getWarning()) {
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger");
    }
    else {
        billTotalElement.classList.remove("warning");
        billTotalElement.classList.remove("danger");
    }

    billTotalElement.innerHTML = calculateInstance.total();


}
//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);