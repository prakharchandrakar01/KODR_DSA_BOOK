//Check if the number is Prime or not.
var n;
n=prompt("enter number");
var isPrime=true;
if(n<=1){
    isPrime=false;
}
else{
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            isPrime=false;
            break;
        }
    }
}
if(isPrime){
    console.log(n + " is a prime number.");
}   
else{
    console.log(n + " is not a prime number.");
}