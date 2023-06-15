function solution(n) {
    let arr = new Array(n+1).fill(BigInt(0));
    arr[0] = BigInt(0);
    arr[1] = BigInt(1);
    for(let i = 2; i<=n; i++){
        arr[i] = arr[i-2] + arr[i-1];
    }
    let cnt = arr[n];
    let answer = cnt % BigInt(1234567);
    answer = parseInt(answer.toString());
    return answer;
}
