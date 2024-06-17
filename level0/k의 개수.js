function solution(i, j, k) {
    let str = "";
    for(i; i<=j; i++){
        str += i;
    }
    return str.split(k).length - 1;
}

function solution2(i, j, k) {
    let answer = 0;
    for(let q = i; q<=j; q++){
        let arr = Array.from(q.toString());
        arr.forEach(v => v === k.toString() ? answer++: null);
    }
    return answer;
}
