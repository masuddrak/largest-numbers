let numbers=[5,41,5,2];
function oldestNumber(numbers){
    let oldnumber=0;
    for(let i=0; i<numbers.length; i++){
        let elemt=numbers[i]
        if(elemt>oldnumber){
            oldnumber=elemt
        }
    }return oldnumber;
}
let result=oldestNumber(numbers);
console.log(result);