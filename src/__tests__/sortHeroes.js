import sortHeroes from '../sortHeroes';

test('sort heroes by health descending', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroes(input)).toEqual(expected);
});

test('not mutate original array', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const copy = [...input];

  sortHeroes(input);

  expect(input).toEqual(copy);
});
