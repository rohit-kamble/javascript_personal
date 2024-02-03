interface data{
    name:string,
    age:number,
    ischecked:boolean
}

function interfaceTest(test:data){
    let name = test.name;
    let age = test.age;
    let ischecked = test.ischecked;
    if(ischecked){
        return name+ " ," + age;
    }
}

console.log(interfaceTest({name:'rohit',age:30,ischecked:true}))