function solution(s1, s2) {
    return s1.filter(v => s2.includes(v)).length;
}

// function solution(s1, s2) {
//     return s1.length + s2.length - new Set([...s1, ...s2]).size;
// }

// function solution(s1, s2) {
//     let answer = 0;
//     let set2 = new Set(s2);
//     s1.map((item, i) => set2.has(item) ? answer++ : null);
//     return answer;
// }
