function solution(numbers) {
    let n = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    n.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    return +numbers;    
}
