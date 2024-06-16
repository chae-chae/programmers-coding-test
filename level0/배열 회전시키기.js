function solution(numbers, direction) {
    let answer = [...numbers];
    if(direction === "left"){
        answer.push(answer.shift());
    } else {
        answer.unshift(answer.pop());
    }
    return answer;
}

function solution2(numbers, direction) {
    if(direction === "left"){
        return [...numbers.slice(1), numbers[0]];
    } else {
        return [numbers[numbers.length-1], ...numbers.slice(0, numbers.length-1)];
    }
}
