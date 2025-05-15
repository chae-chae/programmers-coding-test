function solution(sizes) {
    let answer = 0;
    const sorted = sizes.map((a) => a.sort((a, b) => b - a));
    let wMax = 0;
    let hMax = 0;
    for(let [w, h] of sorted){
        wMax = Math.max(wMax, w);
        hMax = Math.max(hMax, h);
    }
    answer = wMax * hMax;
    return answer;
}

function solution(sizes) {
    let wMax = 0;
    let hMax = 0;

    sizes.forEach(([w, h]) => {
        const [big, small] = [Math.max(w, h), Math.min(w, h)];
        wMax = Math.max(wMax, big);
        hMax = Math.max(hMax, small);
    });

    return wMax * hMax;
}
