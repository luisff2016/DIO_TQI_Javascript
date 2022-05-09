let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    if(count < 10 ){
        count++;
        CURRENT_NUMBER.innerHTML = count;
    }
}

function decrement() {
    if(count > -10){
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }
}

function test() {
	kdowkdpo;
}