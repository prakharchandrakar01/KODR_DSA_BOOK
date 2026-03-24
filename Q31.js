
var n;
n=prompt("enter number");
var sum=0;
for(i=1;i<=n;i++){
    if(n%i==0){
        sum=sum+i;
    }
}
console.log("Sum of factors of " + n + " is: " + sum);