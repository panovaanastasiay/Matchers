const players = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

const sortedPlayers = [...players].sort((a, b) => b.health - a.health);

export default sortedPlayers;