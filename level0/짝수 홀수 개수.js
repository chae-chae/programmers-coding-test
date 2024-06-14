function solution(num_list) {
    // let odd = num_list.filter((v) => v % 2).length;
    // return [num_list.length - odd, odd];
    
    let answer = [0, 0];
    for(item of num_list){
        answer[item % 2]++;
    }
    return answer;
}
