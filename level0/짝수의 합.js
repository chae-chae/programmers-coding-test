function solution(n) {
    let answer = Array(n).fill().map((_, idx) => idx+1).filter((v) => v%2 === 0).reduce((a, c) => a+c, 0);
    return answer;
}
