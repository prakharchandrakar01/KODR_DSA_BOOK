
var n;
n=prompt("enter number");
console.log("Factors of " + n + " are:");
for(i=1;i<=n;i++){
    if(n%i==0){
        console.log(i);
    }
}