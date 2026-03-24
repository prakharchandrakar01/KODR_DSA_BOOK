//Shop discount
   var sp,cp;
        sp=prompt("enter selling price");
        cp=prompt("enter cost price");
        p=sp-cp;
        l=cp-sp;
        if(sp>cp)
    {
        console.log("it's a profit");
    }
    if(cp>sp)
    {
        console.log("it's a loss");
    }
    if(sp==cp)
    {
        console.log("it's a break even");
    }