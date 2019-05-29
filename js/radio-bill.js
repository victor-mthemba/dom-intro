var billItemType = document.querySelector(".billItemTypeRadio");
var checkedRadioBtn = document.querySelector(".radioBillAddBtn");
var callsTotalElemRadio = document.querySelector(".callTotalTwo");
var smsTotalElemRadio = document.querySelector(".smsTotalTwo")
var totalCostElemRadio = document.querySelector(".totalTwo");


var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    if (checkedRadioBtn){
        var billItemType = document.querySelector("input[name='billItemType']:checked");
    }
        // billItemType will be 'call' or 'sms'
        if (billItemType.value === "call"){
            callsTotal += 2.75
        }
        else if (billItemType.value === "sms"){
            smsTotal += 0.75;
        }
        
    
    //update the totals that is displayed on the screen.
    callsTotalElemRadio.innerHTML = callsTotal.toFixed(2);
    smsTotalElemRadio.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElemRadio.innerHTML = totalCost.toFixed(2);

      //color the total based on the criteria
      if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElemRadio.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElemRadio.classList.add("warning");
    }
    
}


 checkedRadioBtn.addEventListener('click', textBillTotal);
