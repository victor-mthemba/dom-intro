function calculateBill () 
{
    var billTotal = 0;
    function totalCost (Type)
    {
        if(Type === 'call')
        {
            billTotal += 2.75;
        }
        else if(Type === 'sms')
        {
            billTotal += 0.75;
        }

        return "R" + billTotal.toFixed(2);
    }


    function getCritical() 
    {
        return billTotal >= 30;
    }

    function getWarning()
    {
        return billTotal >= 20;
    }



    return  {
      
        totalCost,
        getCritical,
        getWarning,
    }
}
