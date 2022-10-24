let screen_1 = document.querySelector(".screen-1");
let screen_2 = document.querySelector(".screen-2");
let disp = '';
let t_disp = '';
let init = '';
let t_init = '';
let t_float = 0;
let num = '';
let strng = '';
let last = 0;
let t_flag = 0;
let op_flag = 0;
let first_flag = 0;
let dot_flag = 0;
let d_flag = 0;
let parcent_flag = 0;
let memory = [];
let temp;
let i = 0;
let j = 0;
let k = 0;
let x = 0;
let last_math = 0;

function btn_call(e) {
    if (e != "Del") {
        disp += e;
        init += e;
    }
    screen_1.innerHTML = disp;

    if (e == "C") {
        screen_1.innerText = 0;
        screen_2.innerText = 0;
        disp = '';
        init = '';
        num = '';
        last = 0;
        t_flag = 0;
        first_flag = 0;
        memory = [];
        memory[0] = 0;
        i = 0;
        j = 0;
        k = 0;
    }

    if (e != "C") {
        if (t_flag == 1) {
            for (k = 0; k <= temp.length - 1; k++) {
                memory[k] = temp[k];
            }
        }

        if (e == "+" || e == "-" || e == "x" || e == "/" || e == "%") {
            if (first_flag == 1) {
                if (op_flag == 1) {
                    i--;
                    memory[i] = e;
                    t_disp = disp.slice(0, -2);
                    disp = t_disp;
                    disp += e;
                    screen_1.innerHTML = disp;
                }
                else {
                    i++;
                    memory[i] = e;
                }
                i++;
                init = '';
                last = memory.length - 1;
                d_flag = 1;
                dot_flag = 0;
                op_flag = 1;
                first_flag = 1;
            }
            else {
                init = '';
                disp = '0';
                screen_1.innerHTML = disp;
                t_disp = disp.slice(0, -1);
                disp = t_disp;
            }
        }
        else if (e == "=") {
            t_disp = disp.slice(0, -1);
            disp = t_disp;
            screen_1.innerHTML = disp;
        }
        else if (e == "." && dot_flag == 0) {
            dot_flag = 1;
        }
        else if (e == "." && dot_flag == 1) {
            t_disp = disp.slice(0, -1);
            disp = t_disp;
            t_init = init.slice(0, -1);
            init = t_init;
            screen_1.innerHTML = disp;
        }
        else if (e != "Del") {
            last = memory.length - 1;
            memory[i] = parseFloat(init);
            d_flag = 2;
            op_flag = 0;
            first_flag = 1;
        }

        if (e == "Del") {
            if (disp[disp.length - 2] == ".") {
                t_disp = disp.slice(0, -2);
                t_init = (init.toString()).slice(0, -2);
                init = parseFloat(t_init);
                dot_flag = 0;
                op_flag = 0;
            }
            else if (isNaN(disp[disp.length - 2])) {
                t_disp = disp.slice(0, -1);
                op_flag = 1;
            }
            else {
                t_disp = disp.slice(0, -1);
                t_init = (init.toString()).slice(0, -1);
                init = t_init;
                op_flag = 0;
            }
            disp = t_disp;
            screen_1.innerHTML = disp;
            if (d_flag == 1) {
                memory.splice(memory.length - 1, 1);
                i -= 2;
                init = memory[i];
                d_flag = 2;
            }
            else if (d_flag == 2 && Number.isInteger(memory[memory.length - 1]) == true) {
                x = parseInt(memory[memory.length - 1] / 10);
                if (x == 0 && memory.length != 1) {
                    memory.splice(memory.length - 1, 1);
                    d_flag = 1;
                    init = '';
                }
                else if (x == 0 && memory.length == 1) {
                    i = 0;
                    memory[0] = 0;
                    temp[0] = 0;
                    screen_1.innerText = 0;
                    init = '';
                    first_flag = 0;
                }
                else {
                    memory[memory.length - 1] = x;
                    init = x;
                    d_flag = 2;
                }
            }
            else if (d_flag == 2 && Number.isInteger(memory[memory.length - 1]) == false) {
                strng = (memory[memory.length - 1].toString()).slice(0, -1);
                memory[memory.length - 1] = parseFloat(strng);
            }
        }
        temp = [...memory];
        t_flag = 1;

        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '%') {
                num = parseFloat(memory[j - 1]) / 100;
                memory.splice(j - 1, 2, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '/' && j != memory.length - 1) {
                num = parseFloat(memory[j - 1]) / parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == 'x' && j != memory.length - 1) {
                num = parseFloat(memory[j - 1]) * parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '-' && j != memory.length - 1) {
                num = parseFloat(memory[j - 1]) - parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }
        }
        for (j = 0; j <= last; j++) {
            if (memory.length == 1) {
                break;
            }
            else if (memory[j] == '+' && j != memory.length - 1) {
                num = parseFloat(memory[j - 1]) + parseFloat(memory[j + 1]);
                memory.splice(j - 1, 3, num);
                j = 0;
            }

        }
    }
    if(memory[0] == undefined){
        screen_2.innerHTML = 0;
    }
    else{
        screen_2.innerHTML = parseFloat(memory[0]);
    }

}

