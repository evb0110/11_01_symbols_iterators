import Team from '../src/js/Team';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const magician = {
  name: 'Маг',
  type: 'Bowman',
  health: 100,
  level: 2,
  attack: 50,
  defence: 100,
};

test('testing a team with two characters', () => {
  const team = new Team(bowman, magician);
  const arrResult = [];
  for (const character of team) {
    arrResult.push(character);
  }

  expect(arrResult).toEqual([bowman, magician]);
});

test('testing an empty team, should fail', () => {
  const makeResult = () => new Team();

  expect(makeResult).toThrow('The team cannot be empty!');
});
