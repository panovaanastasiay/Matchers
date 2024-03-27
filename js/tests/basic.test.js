import sortedPlayers from '../basic';

const expectedArray = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('sort players in descending order', () => {
  expect(sortedPlayers).toEqual(expectedArray);
});