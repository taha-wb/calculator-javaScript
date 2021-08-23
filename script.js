
class Calculator{
  constructor(prev , curr){
    this.prev = prev ;
    this.curr = curr ;
    this.operation = undefined ;
    this
  }
  allClear(){
    curr.textContent = '';
    prev.textContent = '';
  }
  clear(){
  curr.textContent = curr.textContent.toString().slice(0,-1);
  }
  appendNumber(number){
    if(number == '.' && curr.textContent.includes('.')) {
      return ;
    }
    curr.textContent += number ;
  }
  selectOperation(operation){
    if(curr.textContent == '') return ;
    if(prev.textContent != ''){
      this.compute();
    }
    this.operation = operation ;
    curr.textContent += operation ;
    prev.textContent = curr.textContent ;
    curr.textContent = '';
   
  }
  compute(){
  let result ;
  if(isNaN(parseFloat(curr.textContent)) || isNaN(parseFloat(prev.textContent))) return ;
  switch(this.operation){
    case '+': 
    result = parseFloat(curr.textContent) + parseFloat(prev.textContent) ;
    break;
    case '-': 
    result = parseFloat(curr.textContent) - parseFloat(prev.textContent) ;
    break;
    case '*': 
    result = parseFloat(curr.textContent) * parseFloat(prev.textContent) ;
    break;
    case '/': 
    result = parseFloat(curr.textContent) / parseFloat(prev.textContent) ;
    break;
    case '%': 
    result = parseFloat(curr.textContent) % parseFloat(prev.textContent) ;
    break;
   
    default:return;

  }
  curr.textContent = result ;
  prev.textContent = '';
  this.operation = undefined ;   

  }
  display(){

  }
}

const prev = document.querySelector('.prev');
const curr = document.querySelector('.curr');
const keys = document.querySelector('.keys');
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const eq = document.querySelector('.eq');
const allClear = document.querySelector('.all-cl');
const clear = document.querySelector('.cl');


const calculator = new Calculator ;

nums.forEach(num => {
  num.addEventListener('click', e=>{
    calculator.appendNumber(num.textContent);
  })
})


ops.forEach(op => {
  op.addEventListener('click', e=>{
    calculator.selectOperation(op.textContent);
  })
})


allClear.addEventListener('click' , e => {
  calculator.allClear();
})

clear.addEventListener('click' , e => {
  calculator.clear();
})


eq.addEventListener('click' , e => {
  calculator.compute();
})