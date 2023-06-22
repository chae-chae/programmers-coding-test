function solution(n,a,b)
{
    let answer = 0;

    while(a && b){
        answer++;
        let rival;
        if(isEven(a)){
            rival = a-1;
        } else {
            rival = a+1;
        }
        if(rival === b){
            break;
        }
        a = winnersNum(a);
        b = winnersNum(b);
    }
    return answer;
}


function winnersNum(n){
    return Math.ceil(n/2);
}

function isEven(n){
    if(n%2 === 0) return true;
    else return false;
}
