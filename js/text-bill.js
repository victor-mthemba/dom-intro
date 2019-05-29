var billTypeTextElem = document.querySelector(".billTypeTexts");
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne")
var totalCostElem = document.querySelector(".totalOne");

var callsTotalOne = 0;
var smsTotalOne = 0;

function textBillTotal(){
    
    var billTypeEntered = billTypeTextElem.value;
    
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotalOne += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotalOne += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotalOne.toFixed(2);
    smsTotalElem.innerHTML = smsTotalOne.toFixed(2);
    var totalCostOne = callsTotalOne + smsTotalOne;
    totalCostElem.innerHTML = totalCostOne.toFixed(2);

     //color the total based on the criteria
     if (totalCostOne >= 50){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCostOne >= 30){
        totalCostElem.classList.add("warning");
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);