function TotalBill() {
    var callTotals = 0;
    var smsTotals = 0;
    var totalTwoS = 0;

    //settings
    var callCost = 0;
    var smsCost = 0;
    var warnLevel = 0;
    var critLevel = 0; 

    function updateData (call,sms,warn,crit) {
        callCost = Number(call);
        smsCost = Number(sms);
        warnLevel = Number(warn);
        critLevel = Number(crit);
    }

    function add(billType){
        if(billType === "call") {
            if(totalTwoS <= critLevel)
            {
                callTotals += callCost;
            }
        }

        else if(billType === "sms") {
            if(totalTwoS <= critLevel)
            {
                smsTotals += smsCost;
            }
        }
}

    function getCallTotal(){
        return callTotals.toFixed(2);
    }

    function getSmsTotal(){

        return smsTotals.toFixed(2);
    }

    function getTotal()
    {
        totalTwoS = smsTotals + callTotals
        return totalTwoS.toFixed(2);
    }

    function checkCritical(){
        if(totalTwoS >= critLevel){
            return "critical";
        }
    }

    function checkWarning(){
       if(totalTwoS >= warnLevel){
        return "warning";
       }
    }

   
    // function warningColor() {
    //     if(totalTwoS >= warnLevel)
    //     {
    //         return "warning";
    //     }
    // }

    // function criticalColor() {
    //     if(totalTwoS >= critLevel) {
    //         return "critical";
    //     }
    // }


    return {
        // criticalColor,
        // warningColor,
        getTotal,
        updateData,
        add,
        checkCritical,
        checkWarning,
        getCallTotal,
        getSmsTotal
    }
}