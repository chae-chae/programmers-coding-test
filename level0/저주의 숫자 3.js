function solution(n) {
    let answer = 0;
    for(let _ = 0; _ < n; _++){
        answer++;
        while(answer % 3 === 0 || answer.toString().split("").includes("3")){
            answer++;
        }
    }
    return answer;
}
