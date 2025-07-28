function solution(routes){
    routes.sort((a, b) => a[1] - b[1]);

    let answer = 0;
    let camera = -30001;

    for(const [start, end] of routes){
        if(camera < start){
            answer++;
            camera = end;
        }
    }

    return answer;
}
