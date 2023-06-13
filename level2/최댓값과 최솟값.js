function solution(s) {
    let arr = s.split(" ").map(Number);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let ans = `${min} ${max}`;
    return ans;
}
