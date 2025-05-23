function solution(priorities, location) {
    const queue = priorities.map((v, i) => [v, i]);
    let count = 0;
    
    while(queue.length){
        const current = queue.shift();
        
        if(queue.some(([v]) => v > current[0])){
            queue.push(current);
        } else {
            count++;
            if(current[1] === location) return count;
        }
    }
}
