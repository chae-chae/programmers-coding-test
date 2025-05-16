function solution(answers) {
    var answer = [];
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let oneCnt = 0;
    let twoCnt = 0;
    let threeCnt = 0;

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === one[i % one.length]) oneCnt++;
        if(answers[i] === two[i % two.length]) twoCnt++;
        if(answers[i] === three[i % three.length]) threeCnt++;
    }

    const maxScore = Math.max(oneCnt, twoCnt, threeCnt);

    if (oneCnt === maxScore) answer.push(1);
    if (twoCnt === maxScore) answer.push(2);
    if (threeCnt === maxScore) answer.push(3);

    return answer;
}

function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],                     
        [2, 1, 2, 3, 2, 4, 2, 5],            
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]       
    ];

    const scores = patterns.map(p => 
        answers.reduce((acc, cur, i) => acc + (cur === p[i % p.length] ? 1 : 0), 0)
    );

    const max = Math.max(...scores);

    return scores
        .map((score, idx) => score === max ? idx + 1 : null)
        .filter(v => v !== null);
}

function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],                    
        [2, 1, 2, 3, 2, 4, 2, 5],           
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]      
    ];

    const scores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < patterns.length; j++) {
            const pattern = patterns[j];
            if (answers[i] === pattern[i % pattern.length]) {
                scores[j]++;
            }
        }
    }

    const maxScore = Math.max(...scores);

    const result = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            result.push(i + 1); // 수포자 번호는 1부터 시작
        }
    }

    return result;
}

