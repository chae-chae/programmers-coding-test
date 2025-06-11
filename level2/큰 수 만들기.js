function solution(number, k) {
    let stack = [];
    
    for(let i = 0; i<number.length; i++){
        const cur = number[i];
        
        while(k > 0 && stack.length > 0 && stack[stack.length - 1] < cur){
            stack.pop();
            k--;
        }
        
        stack.push(cur);
    }
    
    return stack.slice(0, stack.length - k).join("");
}
