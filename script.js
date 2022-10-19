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
const temp = [];
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
        op = e;
        for(j=0; j<memory[memory.length-1]; j++){
            if(memory.length == 1){
                op_flag = 1;
                break;
            }
            else if(memory[j] == "/"){
                num = memory[j-1] / memory[j+1];
                memory.splice(j-1, 5 , num, "/");
                i -=2;
                console.log("/:", memory)
            }
        }
        for(j=0; j<memory[memory.length-1]; j++){
            if(memory.length == 1){
                op_flag = 1;
                break;
            }
            else if(memory[j] == "x"){
                num = memory[j-1] * memory[j+1];
                memory.splice(j-1, 5 , num, "x");
                i -=2;
                console.log("x:", memory)
            }
        }
        for(j=0; j<memory[memory.length-1]; j++){
            if(memory.length == 1){
                op_flag = 1;
                break;
            }
            else if(memory[j] == "-"){
                num = memory[j-1] - memory[j+1];
                memory.splice(j-1, 5 , num, "-");
                i -=2;
                console.log("-:", memory)
            }
        }
        for(j=0; j<memory[memory.length-1]; j++){
            if(memory.length == 1){
                op_flag = 1;
                break;
            }
            else if(memory[j] == "+"){
                num = memory[j-1] + memory[j+1];
                memory.splice(j-1, 5 , num, "+");
                i -=2;
                console.log("+:", memory)
            }
        }

        i++;
        memory[i] = e;
        i++;
        init = '';
    }
    else{
        memory[i]= parseFloat(init);
        if(op_flag == 1){
            x= parseFloat(init);
        }
        if(op == "/"){
            screen_2.innerText = parseFloat(memory[0]) / x;
        }
        else if(op == "x"){
            screen_2.innerText = parseFloat(memory[0]) * x;
        }
        else if(op == "-"){
            screen_2.innerText = parseFloat(memory[0]) - x;
        }
        else if(op == "+"){
            screen_2.innerText = parseFloat(memory[0]) + x;
        }
    }
}


