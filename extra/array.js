const Arr=['a','b','c','d'];
function AddandFound(Arr, item){
    let i=0;
    let pos=Arr.indexOf(item);
    while(i < Arr.length) {
        if(Arr.indexOf(item))
        {
            let pos=Arr.indexOf(item);
            console.log(`item found =  ${Arr.splice(pos,1)}`);
        }
        i++;
        return Arr;
    }
    
}

console.log(AddandFound(Arr,'d'));