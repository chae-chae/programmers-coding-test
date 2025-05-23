function solution(clothes) {
    const map = new Map();
    for(let [item, type] of clothes){
        map.set(type, (map.get(type) || 0) + 1);
    }
    
    let answer = 1;
    for(let value of map.values()){
        answer *= (value + 1);
    }
    
    return answer - 1;
}
