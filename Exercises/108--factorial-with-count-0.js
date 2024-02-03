function factirialWithZero(n){
    let ans=1;
    let count=0;
    for(let i=1;i<=n;i++)
    {
        ans= ans* i;
        if(n==i)
        {
            let data = ans.toString().split('');
            for(let j=0;j<data.length;j++){
                if( data[j]==0)
                {
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(factirialWithZero(8))