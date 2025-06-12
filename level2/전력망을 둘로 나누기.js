function solution(n, wires) {
    let answer = Infinity;
    
    for(let i = 0; i<wires.length; i++){
        const graph = Array.from({ length: n + 1}, () => []);
        for(let j = 0; j<wires.length; j++){
            if(i === j) continue;
            const [a, b] = wires[j];
            graph[a].push(b);
            graph[b].push(a);
        }
        
        const visited = Array(n + 1).fill(false);
        
        const dfs = (node) => {
            visited[node] = true;
            let cnt = 1;
            for(let next of graph[node]){
                if(!visited[next]){
                    cnt += dfs(next);
                }
            }
            return cnt;
        };
        
        const cnt1 = dfs(1);
        const cnt2 = n - cnt1;
        
        answer = Math.min(answer, Math.abs(cnt1 - cnt2));
    }
    
    return answer;
}
