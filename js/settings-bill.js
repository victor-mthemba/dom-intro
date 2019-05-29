// get a reference to the sms or call radio buttons
 var billItemTypeRadio= document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var radioAddBtn = document.querySelector(".addBtn");
//get a reference to the 'Update settings' button
var settingBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var waringLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal  = 0;
var totalTwo = 0;

//add an event listener for when the 'Update settings' button is pressed
settingBtn.addEventListener('click', textBillTotal);
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
