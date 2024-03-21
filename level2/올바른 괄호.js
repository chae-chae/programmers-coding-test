function solution(s){
    var answer = true;
    let stack = [];
    for(let i = 0; i<s.length; i++){
        if(s[i] === "(" ){
            stack.push("(");
        } else {
            if(stack.length === 0){
                answer = false;
                return answer;
            }
            stack.pop();
        }
    }
    if(stack.length === 0){
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

//

function solution2(s){
    let open = [];
    for(let i = 0; i<s.length; i++){
        let c = s[i];
        if(c === "("){
            open.push(c);
        } else {
            let t = open.pop();
            if(t !== "(") {
                open.push(t);
            }
        }
    }
    if (open.length === 0) return true;
    return false;
}
