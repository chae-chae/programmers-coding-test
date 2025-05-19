function solution(numbers) {
    const digits = numbers.split('');
    const numSet = new Set();

    function getPermutations(arr, r) {
        if (r === 1) return arr.map((v) => [v]);

        const result = [];
        arr.forEach((fixed, index) => {
            const rest = arr.slice(0, index).concat(arr.slice(index + 1));
            const perms = getPermutations(rest, r - 1);
            const combined = perms.map((perm) => [fixed, ...perm]);
            result.push(...combined);
        });

        return result;
    }

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    for (let i = 1; i <= digits.length; i++) {
        const perms = getPermutations(digits, i);
        perms.forEach((perm) => {
            const num = parseInt(perm.join(''), 10);
            numSet.add(num);
        });
    }

    let count = 0;
    numSet.forEach((num) => {
        if (isPrime(num)) count++;
    });

    return count;
}

function solution(numbers) {
    const numArr = numbers.split("");           // 입력 문자열을 배열로
    const uniqueNums = new Set();               // 중복 방지용 Set

    // 소수 판별 결과를 캐싱하는 Map
    const isPrimeMemo = new Map();

    // 소수 판별 함수
    function isPrime(n) {
        if (n < 2) return false;
        if (isPrimeMemo.has(n)) return isPrimeMemo.get(n);

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrimeMemo.set(n, false);
                return false;
            }
        }
        isPrimeMemo.set(n, true);
        return true;
    }

    // 순열 생성 + 숫자 만들기
    function getPermutations(arr, used, current) {
        if (current.length > 0) {
            const num = Number(current.join(""));
            uniqueNums.add(num);
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            current.push(arr[i]);
            getPermutations(arr, used, current);
            current.pop();
            used[i] = false;
        }
    }

    getPermutations(numArr, Array(numArr.length).fill(false), []);

    let count = 0;
    for (let num of uniqueNums) {
        if (isPrime(num)) count++;
    }

    return count;
}
