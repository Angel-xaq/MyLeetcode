// function Cnm(n,m){   //计算组合数
//     if(m>n||m==0||n==0)
//         return 0;
//     let fenmu = 1;
//     for(let i = 1;i<=m;i++){
//         fenmu = fenmu*i;
//     }
//     let fenzi = 1;
//     for(let i=0;i<m;i++){
//         fenzi = fenzi*(n-i);
//     }
//     return fenzi/fenmu;
// }

// let result = Cnm(5,2);
// function testWeightBagProblem (weight, value, bagweight) {  //bagweight是背包的最大重量
//     const len = weight.length;
//     const dp = Array(len).fill().map(() => Array(bagweight + 1).fill(0));  //生成二维dp数组，初始化为0
//     // 初始化
//     for(let j = weight[0]; j <= bagweight; j++) {
//         dp[0][j] = value[0];
//     }
//     // weight 数组的长度len 就是物品个数
//     for(let i = 1; i < len; i++) { // 遍历物品
//         for(let j = 0; j <= bagweight; j++) { // 遍历背包容量
//             if(j < weight[i-1]) dp[i][j] = dp[i - 1][j];
//             else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight[i-1]] + value[i-1]); //* 如果能放下，从放和不放两种选择里取最大值，这里要注意，其实完全背包二维数组的代码跟一维只有下面一个下标不同，那就是“放i”这个选择，因为是可以重复放的，所以是dp[i]
//         }
//     }
//     console.table(dp);
//     return dp[len - 1][bagweight];
// }
// function test () {
//     console.log(testWeightBagProblem([1, 3, 4], [15, 20, 30], 4));
// }
// test();
// console.log(result);
// function testMultiPack() {
//     const bagWeight = 10;
//     const weight = [1, 3, 4];
//     const value = [15, 20, 30];
//     const nums = [2, 3, 2];
//     const dp = Array(bagWeight+1).fill(0);
//     for (let i = 0; i < weight.length; i++) {  // 遍历物品
//         for (let k = 0; k < nums[i]; k++) {     // 遍历物品个数
//             for (let j = bagWeight; j >= weight[i]; j--) {  // 遍历背包容量
//                 dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
//             }
//         }
//     }
//     console.log(dp);
//   }
//   testMultiPack();


// var inputs1 = [5,2,4];
// var inputs =[];
// inputs.push([...inputs1]);
// var result = inputs1.map((a)=>a*a);
// for (let r of result){
//     console.log(r);
// }

// var res = new Set(inputs);
//多行输出！
// var element = inputs.map( (e) => (e) );
// console.log(element);

// Array.from(res).sort((a,b)=>a-b).forEach(item=>console.log(item));

// function isSu(num){
//     let flag=0;
//     for(let j=1;j<=num;j++){
//         if(num%j==0){
//             flag++;
//         }
//     }
//     if(flag==2){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
function isSu(num){
    let flag=0;
    for(let j=2;j<=Math.sqrt(num);j++){
        if(num%j==0){
            flag=1;
            return false;
        }
    }
    if(flag==0){
        return true;
    }
}
function jisuan(n){
    let used = Array(n).fill(false);
    let temp=[];
    let count=0;
    let sum=0;
    let usenum=0;
    let result =[];
    function backtrack(n,used,temp){
        if(temp.length==n){
            result.push([...temp]);
            count++;
            return;
        }
        for(let i=0;i<n;i++){
            if(used[i]){
                continue;
            }
            usenum=i+1;
            if(temp.length>0){
                sum=usenum+temp[temp.length-1];
                if(isSu(sum)){
                    continue;
                }
            }
            temp.push(usenum);
            used[i]=true;
            backtrack(n,used,temp);
            temp.pop();
            used[i]=false;
        }
    }
    backtrack(n,used,temp);
    console.log(count);
}
jisuan(5);

console.log(1,2,'\n');
console.log(1,2,'\n');