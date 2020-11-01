const vstup = document.getElementById('number');
const btn = document.getElementById('btn');
const vystup = document.getElementById('vysledek');
let number;
let i = 0;
let control = 0;
let count = vstup.value;
let losy = [];

function randomNum(min = 1, max = 49){
    return (Math.floor(Math.random() * (max - min) + min));
}

function clean(){
    losy = [];
    i = 0;
    vstup.value = '';
}

function addNum(num){
    losy.forEach(function (value){
        if(num == value){
            control++;
        }
    })
    if(control > 0){
        count++; 
    }else{
        losy.push(num);
        control = 0;
    }
}

btn.addEventListener("click", function(){
    vystup.innerHTML = ``;
    for(i; i < count; i++){
        number = randomNum();
        addNum(number);
        vystup.innerHTML += `${losy[i]},`
    }
    console.log(losy);
    clean()
})

