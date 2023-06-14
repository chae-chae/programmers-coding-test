function solution(n) {
    let answer = 1;

    for(let i = 1; i < parseInt(n/2)+1; i++){
        let sum = i;
        let j = i;
        while(sum < n){
            j++;
            sum += j;
            if(sum === n){
                answer++;
                break; 
            }
        }
    }

    return answer;
}
