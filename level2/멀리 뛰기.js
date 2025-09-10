function solution(n) {
    const MOD = 1234567;
    let a = 1;
    let b = 2;

    if(n === 1) return 1;
    if(n === 2) return 2;

    for(let i = 3; i <= n; i++){
        const temp = (a + b) % MOD;
        a = b;
        b = temp;
    }

    return b;
}
