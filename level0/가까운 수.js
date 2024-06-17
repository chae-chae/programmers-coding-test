function solution(array, n) {
    let answer = 0;
    let obj = {};
    array.map(v => obj[v] = Math.abs(v - n));
    let sortable = [];
    for(let item in obj){
        sortable.push([item, obj[item]]);
    }
    sortable.sort((a, b) => a[1] - b[1]);
    answer = Number(sortable[0][0]);
    return answer;
}
