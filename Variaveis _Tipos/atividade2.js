function zerarArray (num){
    if(!num || !num.length ) return -1;
    for (let index = 0; index < num.length; index++) {
        if(num[index] === 0 ){
            console.log(`Na posicao ${index} ja tem o valor 0 !!`);
        }else if(num[index] % 2 === 0) {
            console.log(`Substituindo ${num[index]} por zero!`);
            num[index] = 0 ;
        }
    }
    return num;
}

//let num = [12, 15, 30, 14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = [];

console.log(zerarArray(num));