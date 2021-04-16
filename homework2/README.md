# 作業二
## 第一題
檔案:star.js
```
function star(n){
    for(var i=0;i<n;i++)
    console.log("*")
}

star(5)
```

## 第二題
檔案:integer.js
```
function int(a,b){
    for(var i=a;i<=b;i++)
    console.log(i)
}

int(3,8)
```

## 加分題
檔案:prime.js
```
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
```