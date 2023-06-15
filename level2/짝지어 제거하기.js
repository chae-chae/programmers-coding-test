function solution(s)
{
    let answer = 0;
    let stack = [];
    let input = s.split("");
    
    for(let i = input.length-1; i>=0; i--){
        if(input[i] === stack.at(-1)){
            stack.pop();
        } else {
            stack.push(input[i]);
        }
    }
    
    if(stack.length === 0){
        answer = 1;
    }
    
    return answer;
}
