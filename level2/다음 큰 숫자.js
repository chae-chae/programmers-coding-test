function solution(n) {
    let answer = 0;
    let oneCnt = 0;
    oneCnt = countOne(n);
    let nextBigNum = n+1;
    let nextBigNumsOneCnt = countOne(nextBigNum);
    while(nextBigNumsOneCnt !== oneCnt){
        nextBigNum++;
        nextBigNumsOneCnt = countOne(nextBigNum);
    }
    answer = nextBigNum;
    return answer;
}

function countOne(n){
    return n.toString(2).toString().match(/1/g).length;
}
