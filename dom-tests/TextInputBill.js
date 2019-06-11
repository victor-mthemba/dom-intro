function totalBillTotal() {
    var callTotal = 0;
    var smsTotal = 0;
    var total = 0;

    function callCost(type)
    {
        if(type === 'call')
        {
            callTotal += 2.75;
        }
        return  callTotal.toFixed(2);
    }

    function smsCost(type)
    {
        if(type === 'sms')
        {
            smsTotal += 0.75;
        }
        return  smsTotal.toFixed(2);
    }

    function totalCost()
    {
        total = callTotal + smsTotal;
        return total;
    }

    function Critical() 
    {
        return total >= 50;
    }

    function Warning()
    {
        return total >= 30;
    }

    return {
        callCost,
        smsCost,
        totalCost,
        Critical,
        Warning,
    }
}
