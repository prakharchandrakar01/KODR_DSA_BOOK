
var n;
n=prompt("enter number");
var evenSum=0;
var oddSum=0;
for(i=1;i<=n;i++){
    if(i%2==0){
        evenSum=evenSum+i;
    }
    else{
        oddSum=oddSum+i;
    }
}
console.log("Sum of even numbers: " + evenSum);
console.log("Sum of odd numbers: " + oddSum);