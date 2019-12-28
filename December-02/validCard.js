let digit ='49927398716';
//reversing
let newdig=[]
for(let i=digit.length;i>=0;i--)
{
	newdig.push(digit[i])
}
newdig=newdig.join('')

//sum for both
let s1=0;
let s2 =0;
for(let i=0;i<newdig.length;i++)
{
	if( i%2 == 0)
	{
		s1 += parseInt(newdig[i]);
	}
	else
	{
		t=parseInt(newdig[i])*2;
		if(t>9)
		{
			t = t.toString();
			let sumDig = 0;
			for(let k=0;k<t.length;k++)
			{
				sumDig+=parseInt(t[k])
			}
			t = sumDig;
		}
		s2+=t;
	}
}

//final Step
let sumFinal = (s1+s2).toString();
if(sumFinal[sumFinal.length-1] == '0')
{
	console.log("PASS",sumFinal);
}
else
{
	console.log("Fail",sumFinal);
}


