function solution(n) {
    let i = 1;
    let f = 1;
    while(f <= n){
        i++;
        f *= i;
    }
    return i - 1;
}
