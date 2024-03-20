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

//

function solution2(n, words) {
    let answer = [0, 0];
    let set = new Set();
    set.add(words[0]);
    
    for(let i = 1; i<words.length; i++){
        if(set.has(words[i])){ // 중복이면 해당 사람 리턴
            return [i%n + 1, Math.floor(i/n) + 1];
        } else {
            set.add(words[i]);
        } // 마지막 알파벳과 첫번째 알파벳 비교하여 끝말잇기가 안되면 리턴
        if(words[i-1][words[i-1].length-1] !== words[i][0]){
            return [i%n + 1, Math.floor(i/n) + 1];
        }
    }

    return answer;
}
