function solution(n) {
    let answer = 0;
    let oneCnt = 0;
    oneCnt = countOne(n);
    let nextBigNum = n + 1;
    let nextBigNumsOneCnt = countOne(nextBigNum);
    while(nextBigNumsOneCnt !== oneCnt){
        nextBigNum++;
        nextBigNumsOneCnt = countOne(nextBigNum);
    }
    answer = nextBigNum;
    return answer;
}

function countOne(n){
    return n.toString(2).match(/1/g).length;
}

//

function solution2(n) {
    let answer = 0;
    let next = n + 1;
    let nOneCnt = 0;
    let binCnt = 0;
    n.toString(2).split("").forEach((c) => c === "1" ? nOneCnt++ : null );
    next.toString(2).split("").forEach((c) => c === "1" ? binCnt++ : null );
    while(nOneCnt !== binCnt){
        binCnt = 0;
        next.toString(2).split("").forEach((c) => c === "1" ? binCnt++ : null );
        if (nOneCnt === binCnt) break;
        next++;
    }
    
    answer = next;
    return answer;
}
