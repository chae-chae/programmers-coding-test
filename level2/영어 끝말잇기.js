function solution(n, words) {
    let answer = [0,0];
    let sets = new Set();
    let cycle = 1;
    words.unshift(0);
    for(let i = 1; i<words.length; i++){
        let current = i%n === 0? n: i%n;
        // console.log("cycle", cycle, "current", current, words[i]);
        if(sets.has(words[i])){
            // console.log("already has ", words[i])
            answer[0] = current;
            answer[1] = cycle;
            return answer;
        } else {
            let length = words[i-1].length-1;
            let beforeChar = words[i-1][length];
            let thistimeChar = words[i][0];
            if(i === 1 || beforeChar === thistimeChar){
                sets.add(words[i]);
            } else {
                // console.log("not linked", words[i-1], words[i]);
                answer[0] = current;
                answer[1] = cycle;
                return answer;
            }
            
        }
        if(current === n) cycle++;
    }
    return answer;
}
