function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow;

    for(let i = 1; i<=sum; i++){
        for(let j = 1; j<=i; j++){
            if(i*j === sum){
                if(i >= j){
                    if((i-2)*(j-2) === yellow){
                        answer[0] = i;
                        answer[1] = j;
                        break;
                    }
                }
            }
        }
        if(answer[0] && answer[1]) break;
    }

    return answer;
}
