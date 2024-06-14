function solution(array, height) {
    // var answer = 0;
    // for (i of array){
    //     if(i > height) answer++;
    // }
    return array.filter((v) => height < v).length;
}
