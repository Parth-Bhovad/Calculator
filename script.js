let str = "";

let buttons = document.querySelectorAll('.button');
let input = document.querySelector('.input');
let equal = document.querySelector('.equal');
let result = document.querySelector('.result');
const clear = document.querySelector('.clear');
let back = document.querySelector('.back');
let sciOpts = document.querySelectorAll('.sciOpts');
const some = document.querySelector('.some');
let someBack = document.querySelector('.someBack');

let equalEvent = () => {
   let ans = eval(str)
   result.innerHTML = `= ${ans}`;
}
let clearEvent = () => {
   input.innerHTML = '';
   result.innerHTML = '';
   str = '';
}
let backEvent = () => {
   let newStr = str.slice(0, eval(str.length - 1));
   str = newStr;
   input.innerHTML = newStr;
   sciOptsInput.innerHTML = `${newStr}`
}

let buttonsArray = Array.from(buttons)
buttonsArray.forEach((button) => {
   button.addEventListener('click', (e) => {
      e.target;
      let inner = button.innerHTML;
      str = str + inner;
      input.innerHTML = str;
   });
});

equal.addEventListener('click', equalEvent);

clear.addEventListener('click', clearEvent);

back.addEventListener('click', backEvent);


//-------------------------------------


some.addEventListener('click', () => {

   const sciOpts = document.querySelectorAll('.sciOpts');
   let arr = Array.from(sciOpts);

   arr.forEach((sciOpt) => {
      sciOpt.classList.remove('display');
   });

   let btns = document.querySelectorAll('.btns');

   let arr2 = Array.from(btns);

   arr2.forEach((btn) => {
      btn.classList.add('button-moreOptions');
      btn.classList.add('trans');
   });
   some.classList.add("display");
   someBack.classList.remove("display");

   equal.removeEventListener('click', equalEvent);
   // clear.removeEventListener('click', clearEvent);
   // back.removeEventListener('click', backEvent);
});


someBack.addEventListener('click', () => {

   const sciOpts = document.querySelectorAll('.sciOpts');
   let arr = Array.from(sciOpts);

   arr.forEach((sciOpt) => {
      sciOpt.classList.add('display');
   });

   let btns = document.querySelectorAll('.btns');

   let arr2 = Array.from(btns);

   arr2.forEach((btn) => {
      btn.classList.remove('button-moreOptions');
      btn.classList.add('trans');
   });
   someBack.classList.add("display");
   some.classList.remove("display");
})

let PI = 3.14159265359

const mixedStringToNumber = (val) => {
   mixedSting = val;
   StingNumbers = mixedSting.split(/\D+/).filter(Boolean).join("");
   toNumber = Number(StingNumbers);
}


let sciOptsInput = document.querySelector('.sci-opts-input');



let sciOptsArr = Array.from(sciOpts);
sciOptsArr.forEach((sciOpt) => {
   sciOpt.addEventListener('click', (e) => {
      e.target;
      let sciOptsFunc = sciOpt.innerHTML;

      switch (sciOptsFunc) {
         case "sin":
            const sinCalc = () => {
               mixedStringToNumber(input.innerHTML)
               sinVal = Math.sin(toNumber);
               result.innerHTML = `=${sinVal}`
               sciOptsInput.innerHTML = `sin<sub>r</sub>(${toNumber})`;
            }
            sinCalc()
            break;

         case "cos":
            const cosCalc = () => {
               mixedStringToNumber(input.innerHTML)
               cosVal = Math.cos(toNumber);
               result.innerHTML = `=${cosVal}`
               sciOptsInput.innerHTML = `cos<sub>r</sub>(${toNumber})`;
            }
            cosCalc()
            break;

         case "tan":
            const tanCalc = () => {
               mixedStringToNumber(input.innerHTML)
               tanVal = Math.tan(toNumber);
               result.innerHTML = `=${tanVal}`
               sciOptsInput.innerHTML = `tan<sub>r</sub>(${toNumber})`;
            }
            tanCalc()
            break;

         case "sqrt":
            const sqrtCalc = () => {
               mixedStringToNumber(input.innerHTML)
               sqrtVal = Math.sqrt(toNumber);
               result.innerHTML = `=${sqrtVal}`
               sciOptsInput.innerHTML = `sqrt(${toNumber})`;
            }
            sqrtCalc()
            break;

         case "lg":
            const logCalc = () => {
               mixedStringToNumber(input.innerHTML)
               logVal = Math.log10(toNumber);
               result.innerHTML = `=${logVal}`
               sciOptsInput.innerHTML = `log<sub>10</sub>(${toNumber})`;
            }
            logCalc()
            break;

            case "fact":
               function factorial(n) {
                  let factorialresult = 1;
                  for (let i = 2; i <= n; i++) {
                      factorialresult *= i;
                  }
                  result.innerHTML = factorialresult;
              }
              factorial(input.innerHTML)
               break;

         default:
            console.log("default hai");
            break;
      }
   });
});
