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

//

function solution2(brown, yellow) {
    let answer = [];
    let sum = brown + yellow;
    for(let x = 1; x<=sum; x++){
        for(let y = 1; y<=x; y++){
            if(x*y === sum){
                if((x-2)*(y-2) === yellow){
                    answer[0] = x;
                    answer[1] = y;
                    break;
                }
                
            }
        }
        if(answer[0] && answer[1]) break;
    }
    return answer;
}
