function solution(progresses, speeds) {
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    const answer = [];

    let current = days[0];
    let count = 1;

    for (let i = 1; i < days.length; i++) {
        if (days[i] <= current) {
            count++;
        } else {
            answer.push(count);
            current = days[i];
            count = 1;
        }
    }

    answer.push(count);
    return answer;
}
