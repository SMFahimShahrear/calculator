let screen_1 = document.querySelector(".screen-1");
let screen_2 = document.querySelector(".screen-2");
let value = '';
let disp = '';
let init = '';
let num = '';
let op ='';
let x = 0;
let y = 1;
const memory = [];
let flag = 0;
let op_flag = 0;
let i = 0;
let j = 0;
let limit = 0;

function btn_call(e) {
    disp += e;
    init += e;
    screen_1.innerHTML = disp;

    if (e == "+" || e == "-" || e == "x" || e == "/" || e == "=") {

        if(e == "+"){
            
        }

        i++;
        memory[i] = e;
        i++;
        init = '';
    }
    else{
        memory[i]= parseFloat(init);
    }
    // console.log(memory[memory.length-1])
}


