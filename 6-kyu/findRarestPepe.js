function findRarestPepe(pepes) {
  var map = new Map;
  pepes.forEach(pepe => map.set(pepe, (map.get(pepe) || 0) + 1));
  var min = 5, rare = [];
  for (let [pepe, occur] of map) {
    if (occur < min) {
      min = occur;
      rare = [pepe];
    } else if (occur == min) {
      rare.push(pepe);
    }
  }
  if (5 <= min) return 'No rare pepes!';
  if (rare.length == 1) return rare[0];
  return rare.sort();
}
