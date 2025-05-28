// 최소힙 연습 문제
// 나중에 다시 해보기
function solution(scoville, K) {
  let answer = 0;
  const heap = [];

  function insert(val) {
    // 맨 뒤에 값 추가
    heap.push(val);
    // 새로 추가한 값의 인덱스 저장
    let i = heap.length - 1;

    while (i > 0) {
      // 부모 인덱스 계산
      const p = Math.floor((i - 1) / 2);
      // 부모의 값이 더 작아지면 break
      if (heap[p] <= heap[i]) break;
      // 부모와 자식의 위치를 스왑
      [heap[i], heap[p]] = [heap[p], heap[i]];
      // i를 부모로 바꿔서 계속 위로 올라가도록 만들기
      i = p;
    }
  }

  function pop() {
    // 0번 인덱스에 최소값이 들어가있음
    const min = heap[0];
    // 맨 뒤의 값을 하나 꺼내서 last에 저장. last는 위로 올려서 정렬할 값임
    const last = heap.pop();
    // heap이 비면 최소값 리턴하고 끝
    if (heap.length === 0) return min;
    // last를 맨 앞으로 올림
    heap[0] = last;

    let i = 0;
    while (true) {
      const left = i * 2 + 1;
      const right = i * 2 + 2;
      // 현재 인덱스를 가장 작다고 가정하고 진행 시작
      let smallest = i;

      // 두 자식 중 더 작은 걸 찾고 지금 값과 자리를 바꿀지 결정함
      if (left < heap.length && heap[left] < heap[smallest]) smallest = left;
      if (right < heap.length && heap[right] < heap[smallest]) smallest = right;
      // 더 이상 내려갈 필요가 없으므로 break
      if (smallest === i) break;

      // 조건을 다 거쳤으면 자리 스왑하기
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      // 아래로 내려가서 다시 비교 시작
      i = smallest;
    }

    return min;
  }

  // 최소 힙으로 값 넣기
  for (let s of scoville) insert(s);

  // 음식이 2개 이상 남았고, 제일 안 매운 게 K보다 작으면 반복
  while (heap.length >= 2 && heap[0] < K) {
    // 최소 힙에서 pop하면 가장 안 매운 것이 나옴
    const first = pop();
    // 이제 그 다음 안 매운 것을 pop
    const second = pop();
    // 두 개를 섞음
    const mixed = first + second * 2;
    // 섞은 것을 다시 넣기
    insert(mixed);
    // 그때마다 정답값++
    answer++;
  }

  // 다 섞은 뒤에 남은 음식이 K 이상이면 answer 아니면 -1 반
  return heap[0] >= K ? answer : -1;
}
