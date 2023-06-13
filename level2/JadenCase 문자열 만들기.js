function solution(s){
    let ans = [];
    for(let i = 0; i<s.length; i++){
        if(i === 0){
            ans.push(s[i].toUpperCase());
            continue;
        }
        if(s[i-1] === " "){
            ans.push(s[i].toUpperCase());
        } else {
            ans.push(s[i].toLowerCase());
        }
    }

    const answer = ans.join("");    
    return answer;
}
