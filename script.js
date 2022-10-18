let screen_1 = document.querySelector(".screen-1");
let screen_2 = document.querySelector(".screen-2");
let value = '';
let disp = '';
let init = '';
let num = '';
let op ='';
let e1 ='';
const memory = [];
let flag = 0;
let op_flag = 0;
let i = 0;
let j = 0;
let start = 0;

function btn_call(e) {
    disp += e;
    init += e;
    screen_1.innerHTML = disp;

    if (e == "+" || e == "-" || e == "x" || e == "/" || e == "=") {
        i++;
        memory[i] = e;
        i++;
        init = '';
    }
    else{
        memory[i]= parseFloat(init);
    }
    // console.log(memory);    
    console.log(memory.length);    
    console.log(memory[j]);

    // for(j=1; j<= memory.length; j+=2){
    //     // console.log(memory[j]);
    //     if(memory[j] == '+'){
    //         // num = memory[j+1];
    //     //     console.log(memory[j+1]);
    //     //     // num = 5 + 10;

    //     //     // // console.log(typeof(num));
    //     //     // console.log(num);
    //     // memory.splice(j, 0 , num);
    //     console.log(memory.legnth);
    //     console.log(j);
    //     }
        
            // console.log(memory[j+1]);
            
    // }
}


