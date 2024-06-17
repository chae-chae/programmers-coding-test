function solution(before, after) {
    return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0;
}

function solution2(before, after) {
    let answer = 1;
    let bArr = [...before].sort();
    let aArr = [...after].sort();
    for(let i = 0; i<bArr.length; i++){
        if(bArr[i] !== aArr[i]){
            return 0;
        }
    }
    return answer;
}
