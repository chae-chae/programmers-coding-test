function solution(name) {
    let answer = 0;
    
    for(let i = 0; i<name.length; i++){
        let code = name.charCodeAt(i);
        answer += Math.min(code - 65, 91 - code);
    }
    
    let move = name.length - 1;
    
    for(let i = 0; i<name.length; i++){
        let next = i + 1;
      
        while(next < name.length && name.charAt(next) === "A"){
            next++;
        }
        
        move = Math.min(move, i*2 + (name.length - next), i + 2*(name.length - next));
    }

    return answer + move;
}
