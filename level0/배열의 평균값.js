function solution(numbers) {
    var answer = numbers.reduce((a, c) => a+c, 0) / numbers.length;
    return answer;
}
