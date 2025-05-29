function getPermutations(arr, n) {
    if(n === 1) return arr.map(v => [v]);
    const result = [];
    
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(0, idx).concat(origin.slice(idx + 1));
        const perms = getPermutations(rest, n - 1);
        const attached = perms.map(p => [fixed, ...p]);
        result.push(...attached);
    });
    return result;
}

function solution(k, dungeons) {
    const permutations = getPermutations(dungeons, dungeons.length);
    let maxCnt = 0;
    
    for(let order of permutations){
        let fatigue = k;
        let cnt = 0;
        for(let [min, cost] of order){
            if(fatigue >= min){
                fatigue -= cost;
                cnt++;
            } else {
                break;
            }
        }
        maxCnt = Math.max(maxCnt, cnt);
    }
    return maxCnt;
}

// DFS로도 풀어보기
