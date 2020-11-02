const vstup = document.getElementById('number');
const btn = document.getElementById('btn');
const vystup = document.getElementById('vysledek');
let number;
let i = 0;
let control = 0;
let losy = [];

btn.addEventListener("click", function () {
    let count = vstup.value;
    for (i; i < count; i++) {
        number = randomNum();
        losy.forEach(function (value) {
            if (control == 0 && value == number) {
                control = 1;
            }
        });
        if (control == 1) {
            count++;
            control = 0;
        } else {
            losy.push(number);
            control = 0;
        }
    }
    write();
    clean();
});

function randomNum(min = 1, max = 49){
    return (Math.round(Math.random() * (max - min) + min));
}

function clean(){
    losy = [];
    i = 0;
    vstup.value = '';
}
function write() {
    vystup.innerHTML = `Výsledek: `;
    losy.forEach(function (value, index) {
                if (index < (losy.length - 1)) {
                    vystup.innerHTML += `${value}, `;
                } else {
                    vystup.innerHTML += `${value}`;
                }
    })
}