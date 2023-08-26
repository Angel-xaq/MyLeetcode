function Cnm(n,m){   //计算组合数
    if(m>n||m==0||n==0)
        return 0;
    let fenmu = 1;
    for(let i = 1;i<=m;i++){
        fenmu = fenmu*i;
    }
    let fenzi = 1;
    for(let i=0;i<m;i++){
        fenzi = fenzi*(n-i);
    }
    return fenzi/fenmu;
}

let result = Cnm(5,2);
console.log(result);