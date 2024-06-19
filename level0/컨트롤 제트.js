function solution(s) {
    let res = [];
    let arr = s.split(" ");
    arr.forEach((v) => v === "Z"? res.pop() : res.push(+v));
    let answer = res.reduce((a, c) => a + c, 0);
    return answer;
}
