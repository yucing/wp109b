function prime(a){
    for(var i=2;i<a;i++)
        {
            if(a%i==0)
                return false;
        }
    return true;
}
function p(a,b){
    for(var j=a;j<=b;j++)
        if(prime(j))
            console.log(j)
}

p(3,15)