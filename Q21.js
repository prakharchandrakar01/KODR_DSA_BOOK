//Bijli bill

  var unit,p;
            unit=Number(prompt("enter unit"));
            if( unit>=1 && unit<=100 )
        {
            p=unit*2;
            console.log("the price is ",p);
        }
        if( unit>=101 && unit<=200 )
        {
            p=unit*3;
            console.log("the price is ",p);
        }
        if( unit>=201 && unit<=300 )
        {
            p=unit*4;
            console.log("the price is ",p);
        }
        if( unit>=301 && unit<=400 )
        {
            p=unit*5;
            console.log("the price is ",p);
        }


