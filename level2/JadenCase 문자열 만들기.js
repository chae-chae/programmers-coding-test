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

function solution2(s) {
    var answer;
    let inputArr = s.split(" ");
    let sentence = [];
    
    inputArr.map((word) => word.split("").map((c) => c.toLowerCase()).join("")).map((word, index) => sentence.push(word.slice(0,1).toUpperCase() + word.slice(1)));
    
    answer = sentence.join(" ");
    
    return answer;
}
