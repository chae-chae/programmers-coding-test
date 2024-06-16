function solution(order) {
    return [...order.toString().matchAll(/[369]/g)].length;
}

function solution2(order) {
    let answer = 0;
    Array.from(order.toString()).map(v => v === "3" || v === "6" || v === "9" ? answer++ : null);
    return answer;
}
