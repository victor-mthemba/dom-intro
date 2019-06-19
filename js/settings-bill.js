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


var calculateInstanceTwo = TotalBill();

function textBillTotal() {
    var radioAddBtn = document.querySelector(".addBtn");
    if (radioAddBtn) {
        var billItemTypeTwos = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        calculateInstanceTwo.add(billItemTypeTwos.value);
    }
    // //color the total based on the criteria
    colorTest();

    callTotalElement.innerHTML = calculateInstanceTwo.getCallTotal();
    smsTotalElement.innerHTML = calculateInstanceTwo.getSmsTotal();
    totalElement.innerHTML = calculateInstanceTwo.getTotal();
    
}

radioAddBtn.addEventListener('click', textBillTotal);

function updateSettings() {
     settingBtn = document.querySelector(".updateSettings");

     calculateInstanceTwo.updateData(callCostSetting.value,smsCostSetting.value,warningLevelSetting.value,criticalLevelSetting.value);

    colorTest();

}

settingBtn.addEventListener('click', updateSettings);

function colorTest(){
    if (calculateInstanceTwo.checkCritical()) {
        // adding the danger class will make the text red
        totalElement.classList.add("danger");
        radioAddBtn.disabled = true;
    }
    else if (calculateInstanceTwo.checkWarning()) {
        totalElement.classList.add("warning");
        totalElement.classList.remove("danger");
        radioAddBtn.disabled = false;
    }
    else{
        totalElement.classList.remove("warning");
        totalElement.classList.remove("danger");
    }
}