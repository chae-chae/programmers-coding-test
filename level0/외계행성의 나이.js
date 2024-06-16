function solution(age) {
    let chr = "abcdefghij";
    return Array.from(age.toString()).map(v => chr[v]).join("");
}

function solution2(age) {
    let answer = "";
    let arr = age.toString().split("");
    for(let item of arr){
        answer += String.fromCharCode(Number(item)+97);
    }
    return answer;
}
