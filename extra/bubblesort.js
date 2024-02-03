function Bubblesort(a) {
	for(let i=0; i<a.length;i++)
	{
		for(let j=0;j<i;j++)
		{
			if(a[i]<a[j])
			{
				let temp= a[i];
				a[i]=a[j];
				a[j]=temp;
			}
		}
	}
	return a;
}
console.log(Bubblesort([4,3]));
