function solution(phone_book) {
    var answer = true;

    phone_book.sort();

    answer = !(phone_book.some((item, idx) => phone_book[idx+1]?.indexOf(item) === 0));

    return answer;
}
