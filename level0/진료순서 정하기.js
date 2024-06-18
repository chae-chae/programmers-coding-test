function solution(emergency) {
    let order = emergency.slice().sort((a, b) => b - a);
    return emergency.map(v => order.indexOf(v) + 1);
}
