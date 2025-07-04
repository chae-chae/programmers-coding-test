function solution(n, costs) {
    // 크루스칼 알고리즘, union-find
    costs.sort((a, b) => a[2] - b[2]);
    
    const parent = Array(n).fill(0).map((_, idx) => idx);
    
    const find = (x) => {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    };
    
    const union = (a, b) => {
        const rootA = find(a);
        const rootB = find(b);
        if(rootA === rootB) return false;
        parent[rootB] = rootA;
        return true;
    };
    
    let answer = 0;
    for(const [a, b, cost] of costs){
        if(union(a, b)){
            answer += cost;
        }
    }
    
    return answer;
}
