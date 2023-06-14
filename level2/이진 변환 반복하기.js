function solution(s) {
    var answer = [0,0];

    while(s !== "1"){
        let news = [];
        for(let i = 0; i<s.length; i++){
            if(s[i] === "1"){
                news.push(1);
            } else {
                answer[1]++;
            }
        }
        let length = news.length;
        let twos = [];
        while(length > 0){
            twos.push(length % 2);
            length = parseInt(length / 2);
        }
        s = twos.reverse().join("");
        answer[0]++;
    }

    return answer;
}
