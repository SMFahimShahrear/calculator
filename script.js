let screen_1 = document.querySelector(".screen-1");
let screen_2 = document.querySelector(".screen-2");
let disp = '';
let init = '';
let num = '';
let last = 0;
let t_flag = 0;
let memory = [];
let temp;
let i = 0;
let j = 0;
let k = 0;

function btn_call(e) {
    disp += e;
    init += e;
    screen_1.innerHTML = disp;

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
            last = memory.length - 2;
        }
        else {
            last = memory.length - 1;
            memory[i] = parseFloat(init);
        }
        temp = [...memory];
        t_flag = 1;

        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '/') {
                num = parseFloat(memory[j - 1]) / parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == 'x') {
                num = parseFloat(memory[j - 1]) * parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '-') {
                num = parseFloat(memory[j - 1]) - parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '+') {
                num = parseFloat(memory[j - 1]) + parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }

        }
        if(isNaN(parseFloat(memory[0]))){
        screen_2.innerHTML = " ";
        }
        else{
            screen_2.innerHTML = parseFloat(memory[0]);
        }

        if (e == "C") {
            screen_1.innerHTML = ' ';
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
    }

