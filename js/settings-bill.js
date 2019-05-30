// get a reference to the sms or call radio buttons
var billItemTypeTwos = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var callTotalElement = document.querySelector(".callTotalSettings");
var smsTotalElement = document.querySelector(".smsTotalSettings");
var totalElement = document.querySelector(".totalSettings");
//get a reference to the add button
var radioAddBtn = document.querySelector(".addBtn");
//get a reference to the 'Update settings' button
var settingBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost =0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var totalTwoS = 0;

//add an event listener for when the 'Update settings' button is pressed
//settingBtn.addEventListener('click', );
//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function textBillTotal() {
    var radioAddBtn = document.querySelector(".addBtn");
    if (radioAddBtn) {
        var billItemTypeTwos = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        if (billItemTypeTwos.value === "call") {
            callTotal += callCost;
        }
        else if (billItemTypeTwos.value === "sms") {
            smsTotal += smsCost;
        }
    }
    //update the totals that is displayed on the screen.
    callTotalElement.innerHTML = callTotal.toFixed(2);
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    totalTwoS = callTotal + smsTotal;
    totalElement.innerHTML = totalTwoS.toFixed(2);

    // //color the total based on the criteria
    colorTest();
    
}

radioAddBtn.addEventListener('click', textBillTotal);

function updateSettings() {
    var settingBtn = document.querySelector(".updateSettings");

    callCost = Number(callCostSetting.value);
    smsCost = Number(smsCostSetting.value);
    warningLevel = Number(warningLevelSetting.value);
    criticalLevel = Number(criticalLevelSetting.value);

    colorTest();
}

settingBtn.addEventListener('click', updateSettings);

function colorTest(){
    if (totalTwoS >= criticalLevel) {
        // adding the danger class will make the text red
        totalElement.classList.add("danger");
    }
    else if (totalTwoS >= warningLevel) {
        totalElement.classList.add("warning");
        totalElement.classList.remove("danger");
    }
    else{
        totalElement.classList.remove("warning");
        totalElement.classList.remove("danger");
    }
}