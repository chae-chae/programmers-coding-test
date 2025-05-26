function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let totalWeight = 0;
    
    while(truck_weights.length > 0 || totalWeight > 0){
        time++;
        
        let out = bridge.shift();
        totalWeight -= out;
        
        if(truck_weights.length > 0){
            let next = truck_weights[0];
            
            if(totalWeight + next <= weight){
                bridge.push(next);
                totalWeight += next;
                truck_weights.shift();
            } else {
                bridge.push(0);
            }
        } else {
            bridge.push(0);
        }
    }
    return time;
}
------------------------------------------------------------
function solution(bridge_length, weight, truck_weights) {
  // 현재 다리 위에 있는 트럭 목록 큐 qu [[트럭무게, 이 트럭이 다리를 빠져나갈 시간]]
  // 처음에는 0 무게의 트럭이 0초에 나간 걸로 세팅
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;
  
  // 현재 다리 위 트럭이 남았거나, 아직 기다리는 트럭이 있다면 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 만약 다리 위의 첫 번째 트럭이 나갈 시간이 현재 time과 같다면
    // 트럭을 내보내고 qu.shift(), 그 트럭의 무게만큼 다리 위 무게 줄이기
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    // 만약 현재 다리의 총 무게 + 다음 트럭의 무게 <= 다리가 견디는 무게라면
    if (weightOnBridge + truck_weights[0] <= weight) {
      // 다리 위 무게에 다음 트럭의 무게를 더해주기
      weightOnBridge += truck_weights[0];
      // 대기 중인 첫 트럭을 트럭 목록에서 꺼내고 shift()
      // 나갈 시간은 현재 시간 + 다리 길이
      qu.push([truck_weights.shift(), time + bridge_length]);

    // 트럭을 다리에 올릴 수 없는 경우, 즉 무게가 초과 된 경우  
    } else {
      // 다음 트럭이 올라올 수 없는 상황이면
      // 그냥 다음에 트럭이 나갈 때까지 기다리지 말고 시간을 미리 점프
      // 예: 지금이 3초, qu[0][1]이 6이면 굳이 4, 5초 반복하지 않고 
      // 바로 time = 5로 설정 (이후 time++로 6초가 되기 때문)
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 루프가 돌 때마다 1초 증가
    time++;
  }

  return time;
}
