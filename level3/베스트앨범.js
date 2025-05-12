function solution(genres, plays) {
  const genrePlayCount = new Map();
  const genreMap = new Map();

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    genrePlayCount.set(genre, (genrePlayCount.get(genre) || 0) + play);
    if (!genreMap.has(genre)) genreMap.set(genre, []);
    genreMap.get(genre).push({ idx: i, play });
  }

  const genresSorted = [...genrePlayCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  const answer = [];

  for (let genre of genresSorted) {
    const songs = genreMap.get(genre);
    songs.sort((a, b) => b.play - a.play || a.idx - b.idx);
    for (let i = 0; i < Math.min(2, songs.length); i++) {
      answer.push(songs[i].idx);
    }
  }

  return answer;
}
