let screen_1 = document.querySelector(".screen-1");
let screen_2 = document.querySelector(".screen-2");
let disp = '';
let t_disp = '';
let init = '';
let t_init = '';
let num = '';
let last = 0;
let t_flag = 0;
let d_flag = 0;
let memory = [];
let temp;
let i = 0;
let j = 0;
let k = 0;
let x = 0;
let last_math = 0;

function btn_call(e) {
    if(e != "Del"){
    disp += e;
    init += e;
    console.log("init");
}

    screen_1.innerHTML = disp;

    if (e == "C") {
        screen_1.innerHTML = 0;
        // screen_1.style.opacity = "0";
        screen_2.innerHTML = 0;
        disp = '';
        init = '';
        num = '';
        last = 0;
        t_flag = 0;
        memory = [];
        i = 0;
        j = 0;
        k = 0;
    }

        if (t_flag == 1) {
            for (k = 0; k <= temp.length - 1; k++) {
                memory[k] = temp[k];
            }
        }

        if (e == "+" || e == "-" || e == "x" || e == "/") {
            i++;
            memory[i] = e;
            i++;
            init = '';
            last = memory.length - 1;
            // screen_1.style.opacity = "1";
            // screen_2.style.opacity = "0"; 
            d_flag = 1;
        }
        else if(e != "Del"){
            last = memory.length - 1;
            memory[i] = parseFloat(init);
            // screen_1.style.opacity = "1"
            // screen_2.style.opacity = "1"
            d_flag = 2;
        }
        if(e == "Del"){
            t_disp = disp.slice(0, -1);
            disp = t_disp;
            screen_1.innerHTML = disp;
            if(d_flag == 1){
                memory.splice(memory.length-1, 1);
                d_flag = 2;
            }
            else if(d_flag == 2){
                x = parseInt(memory[memory.length-1]/10);
                if(x==0){
                    memory.splice(memory.length-1, 1);
                    d_flag = 1;
                }
                else{
                    memory[memory.length-1] = x;
                    t_init = init.slice(0, -1);
                    init = t_init;
                    d_flag = 2;
                }
            }
            
            }
        console.log(memory);
        temp = [...memory];
        t_flag = 1;

        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '/' && j != memory.length-1) {
                num = parseFloat(memory[j - 1]) / parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == 'x' && j != memory.length-1) {
                num = parseFloat(memory[j - 1]) * parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '-' && j != memory.length-1) {
                num = parseFloat(memory[j - 1]) - parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '+' && j != memory.length-1) {
                num = parseFloat(memory[j - 1]) + parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }

        }
                screen_2.innerHTML = parseFloat(memory[0]);

    }

