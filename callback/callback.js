
// function show(a, rohit){
//     setTimeout(()=>{
//         console.log("photo**", a+1);
//         rohit(a);
//     }, 1000);
// }
// function adda(a) {
//     setTimeout(()=>{
//         console.log("text**",a+2)
//     }, 100)
// }
// show(4, adda);

const student =[
    {name: 'a', id:1},
    {name: 'b', id:2}
]

function showStudent(a, cb){
    setTimeout(()=>{
        student.push(a);
        cb();
    }, 2000)
}

function getStudent(){
    setTimeout(()=>{
        student.forEach((item, i)=>{
            console.log(item);
        })
    }, 1000)
}

const newStd = {name: 'c', id:3};
showStudent(newStd, getStudent);