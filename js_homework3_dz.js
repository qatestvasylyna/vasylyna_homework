//дз 1
function drawTriangle(height, symbol){
    for (let i = 1; i <= height; i++){
        console.log(symbol.repeat(i));
    }
}
drawTriangle(5, '^_^');


//дз 2
function sum(){
    let sum = 0;
    for (let i = 1; i <= 100; i++){
        if (i % 3 !== 0){
            sum += i;}
    }
    return sum;
}
console.log(sum());


//дз 3
function pow(x, y){
    return Math.pow(x, y);}
    
  let result = pow(2, 3);
  console.log(result); 


