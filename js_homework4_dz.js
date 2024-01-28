//дз1
function testisNaN(value) {
    return value !== value;
}
let dz1 = 'word' * 5;
console.log(testisNaN(dz1));
console.log(testisNaN("word1" + dz1));
console.log(testisNaN(55));
console.log(testisNaN("test"));
console.log(testisNaN(5 + dz1));
  

//дз2
function test(str, symbol, start, addSymbol) {
    let paddedStr = str;
    const count = addSymbol || 0;
    for (let i = 0; i < count; i++) {
      if (start) {
        paddedStr = symbol + paddedStr;
      } else {
        paddedStr = paddedStr + symbol;
      }
    }
    return paddedStr;
  }
let originalString = 'dz2';
let symbolToAdd = '+';
let addToStart = true; // true || false
let addSymbol = 3;
  
let result = test(originalString, symbolToAdd, addToStart, addSymbol);
console.log(result);


//дз3
function checkProbabilityTheory(count) {
    let totalNumbers = count;
    let evenNumbers = 0;
  
    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * (901) + 100);
  
      if (randomNumber % 2 === 0) {
        evenNumbers++;
      }
    }
  
    let oddNumbers = totalNumbers - evenNumbers;
    let evenPercentage = (evenNumbers / totalNumbers) * 100;
    let oddPercentage = (oddNumbers / totalNumbers) * 100;
  
    console.log(`Кількість згенерованих чисел: ${totalNumbers}`);
    console.log(`Кількість парних чисел: ${evenNumbers}`);
    console.log(`Кількість не парних чисел: ${oddNumbers}`);
    console.log(`Відсоток парних чисел: ${evenPercentage.toFixed(2)}%`);
    console.log(`Відсоток не парних чисел: ${oddPercentage.toFixed(2)}%`);
  
    //let comparison = evenPercentage > oddPercentage
    //'Парних чисел більше, ніж не парних'
    //'Парних чисел менше ніж парних чи рівну кількість'
    //console.log(comparison);
  
    return {
      totalNumbers,
      evenNumbers,
      oddNumbers,
      evenPercentage,
      oddPercentage,
      comparison,
    };
  }
  checkProbabilityTheory(1000);
