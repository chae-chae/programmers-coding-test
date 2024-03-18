function solution(nums) {
    var answer = 0;

    let targetCnt = nums.length / 2;
    let pokeCnt = new Set(nums).size;

    if(targetCnt > pokeCnt) {
        answer = pokeCnt;
    } else {
        answer = targetCnt;
    }

    return answer;
}
