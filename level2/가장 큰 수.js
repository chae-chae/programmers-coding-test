function solution(numbers) {
    const strings = numbers.map(num => num.toString()).sort((a, b) => (b + a).localeCompare(a + b));
    if (strings[0] === '0') return '0';
    return strings.join('');
}
