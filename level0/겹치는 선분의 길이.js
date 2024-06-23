function solution(lines) {
    let newlines = Array(200).fill(0);
    lines.forEach(([min, max]) => {
        for(; min < max; min++){
            newlines[min+100]++;
        }
    })
    return newlines.filter(v => v > 1).length;
}
