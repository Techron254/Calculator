function add(...nums){
    return (nums.reduce((a,b) => a+b));
}
function subtract(...nums){
    return (nums.reduce((a,b) => a-b));
}
function multiply(...nums){
    return(nums.reduce((a,b) => a*b));
}
function divide(...nums){
    return (nums.reduce((a,b) => a/b));
}
function power(a,b){
    return Math.pow(a,b);
}