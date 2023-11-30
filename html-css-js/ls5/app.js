// let val4 = document.getElementById('btn4');
// let val1 = document.getElementById('btn1');
// let val2 = document.getElementById('btn2');
// let val3 = document.getElementById('btn3');
// let val6 = document.getElementById('btn6');
// let val9 = document.getElementById('btn9');
// let val8 = document.getElementById('btn8');
// let val7 = document.getElementById('btn7');
let val5 = document.getElementById('btn5');

var res1 = [4, 2, 1, 7, 5, 3, 8, 9, 6]
var res2 = [7, 4, 1, 8, 5, 2, 9, 6, 3]
var start = 0;
val5.addEventListener("click", () => {
    let a = start == 0 ? res1 : res2;
    start += 1
    for (var i = 0; i < 9; i++) {
        console.log(a[i])
        document.getElementById(`btn${i + 1}`).innerHTML = a[i];
    }
})