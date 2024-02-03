// Addition

// usinh recursion
// function add(n)
// {
//     if(n==1) return 1
//     else return n+add(n-1);
// }
// using for loop
// function add(n){
//     let d=0;
//     for(let i=1;i<=n;i++){
//         d=d+i;
//         console.log("d",d);
//     }
//     return d;
// }

// using while loop
// function add(n){
//     let i=1;
//     let d=0;
//     while(i<=n){
//         d=d+i;
//         i++;
//     }
//     return d;
// }

// using do while loop
// function add(n){
//     let i=1;
//     let d=0;
//     do {
//         d=d+i;
//         i++;
//     } while (i<=n);
//     return d;
// }


// function add(a, b){
//     if(a==0){
//         return b;
//     }
//     else if (b==0){
//         return a;
//     }
//     else if(a==0 && b==0){
//         return 0
//     }
//     else {
//     return 1+add(a,b-1);
        
//     }
// }

// function mul(a,b){
//     if(b==0) return a
//     else return mul(a,b-a) + a;
// }

// function div(a,b){
//     if(a - b <= 0){
//         return 1;
//      }
//      else {
//         return div(a - b, b) + 1;
//      }
// }

function sub(a,b){
    if(b==0){
        return a;
    }
    else {
        return sub((a-1),(b-1));
    }
}
console.log(sub(10,7))
