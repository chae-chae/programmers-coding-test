function solution(word) {
    const aeiou = ["A", "E", "I", "O", "U"];
    const words = [];

    const dfs = (str) => {
        if (str.length > 5) return;
        if (str.length > 0) words.push(str);

        for (let i = 0; i < aeiou.length; i++) {
            dfs(str + aeiou[i]);
        }
    };

    dfs("");

    return words.indexOf(word) + 1;
}
