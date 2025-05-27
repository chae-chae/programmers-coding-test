function solution(prices) {
    let answer = [];

    for (let i = 0; i < prices.length; i++) {
        let time = 0;
        for (let j = i + 1; j < prices.length; j++) {
            time++;
            if (prices[j] < prices[i]) break; // 떨어지면 중단
        }
        answer.push(time);
    }

    return answer;
}

