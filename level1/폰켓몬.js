function solution(nums) {
    const set = new Set(nums);
    const maxCnt = nums.length / 2;
    
    return Math.min(set.size, maxCnt);
}

// function solution(nums) {
//     var answer = 0;

//     let targetCnt = nums.length / 2;
//     let pokeCnt = new Set(nums).size;

//     if(targetCnt > pokeCnt) {
//         answer = pokeCnt;
//     } else {
//         answer = targetCnt;
//     }

//     return answer;
// }
