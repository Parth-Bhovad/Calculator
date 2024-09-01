let str = "";

let btns = document.querySelectorAll('.btn');
let buttons = document.querySelectorAll('button');
let input = document.querySelector('.input');
let equal = document.querySelector('.equal');
let result = document.querySelector('.result');
const clear = document.querySelector('.clear');
let back = document.querySelector('.back');

let arr = Array.from(btns);

arr.forEach((btn) => {
   btn.addEventListener('click', (e) => {
      e.target;
      let inner = btn.innerHTML;
      str = str + inner;
      input.innerHTML = str;
   })

})

equal.addEventListener('click', () => {
   let ans = eval(str)
   result.innerHTML = `= ${ans}`;
})


clear.addEventListener('click', () => {
   input.innerHTML = '';
   result.innerHTML = '';
   str = '';
});

back.addEventListener('click', () => {
   let newStr = str.slice(0, eval(str.length - 1));
   str = newStr;
   input.innerHTML = newStr;
});