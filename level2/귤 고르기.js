function solution(k, tangerine) {
    const objT = {};
    for(let item of tangerine){
        objT[item] = (objT[item] || 0) + 1;
    }
    
    const counts = Object.values(objT).sort((a, b) => b - a);
    
    let sum = 0;
    let answer = 0;
    for(let count of counts){
        sum += count;
        answer++;
        if(sum >= k) break;
    }
    
    return answer;
}
