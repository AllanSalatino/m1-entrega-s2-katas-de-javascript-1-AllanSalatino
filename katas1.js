console.log('1. oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20')
console.log('Exercício:')

function oneThroughTwenty(){
let numbers = []
  for(let i=1; i<=20; i++){
    numbers.push(i)
  }
  return numbers
}
console.log(oneThroughTwenty())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('2. evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)')
console.log('Exercícios:')

function evensToTwenty(){
let evensNumbers = []
  for(let i=2;i<=20;i++){
    if(i % 2 === 0){
     evensNumbers.push(i)
    }
  }
  return evensNumbers
}
console.log(evensToTwenty())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('3. oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)')
console.log('Exercício:')

function oddsToTwenty(){
let oddsNumbers = []
for(let i=1;i<=20;i++){
  if(i % 2 !== 0){
   oddsNumbers.push(i)
  }
}
return oddsNumbers
}
console.log(oddsToTwenty())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('4. multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)')
console.log('Exercício:')

function multiplesOfFive(){
let multiples = []
let x = 5
let resultMult = 0
  for(let i=1;resultMult<100; i++){  
    resultMult = (x*i)
    multiples.push(resultMult)
  }    
    return multiples
}
console.log(multiplesOfFive())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('5. squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)')
console.log('Exercício:')

function squareNumbers(){  
let square = []
let result = 0
  for(let i = 1;result<100;i++){
  result = i*i
  square.push(result)
  }
  return square
}
console.log(squareNumbers())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('6. countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)')
console.log('Exercício:')

function countingBackwards(){
let backwards = []
  for(let i= 20; i>=1;i--){
    backwards.push(i)
  }
  return backwards
}
console.log(countingBackwards())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('7. evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)')
console.log('Exercício:')

function evenNumbersBackwards(){
evenBackwards = []
  for(let i = 20;i>=1; i--){
    if(i % 2 === 0){
      evenBackwards.push(i)
    } 
  }
  return evenBackwards
}
console.log(evenNumbersBackwards())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('8. oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)')
console.log('Exercício:')

function oddNumbersBackwards(){
let oddsBackwards = []
  for(i = 20; i>=1; i--){
    if(i % 2 !== 0){
      oddsBackwards.push(i)
    }
  }  
  return oddsBackwards
}
console.log(oddNumbersBackwards())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('9. multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)')
console.log('Exercício:')

function multiplesOfFiveBackwards(){
  let multiplesBackwards = []
  let x = 5
  let resultMult = 0
    for(let i=1;resultMult<100; i++){  
      resultMult = (x*i)
      multiplesBackwards.unshift(resultMult)
    }    
      return multiplesBackwards
  }
  console.log(multiplesOfFiveBackwards())

console.log('----------------------------------------------------------------------------------------------------------------------------------')
console.log('10. squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)')
console.log('Exercício:')

function squareNumbersBackwards(){  
  let squareBackwards = []
  let result = 0
    for(let i = 1;result<100;i++){
    result = i*i
    squareBackwards.unshift(result)
    }
    return squareBackwards
  }
  console.log(squareNumbersBackwards())
