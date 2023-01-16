import Daemon from '../daemon';
import Magician from '../magician';

const daemon = new Daemon();
const magician = new Magician();

test('getStoned should return correct stoned status', () => {
  expect(daemon.getStoned()).toBeFalsy();
});

test('setStoned should set correct stoned status', () => {
  magician.setStoned(true);
  expect(magician.getStoned()).toBeTruthy();
});

test('getAttack should return correct attack', () => {
  expect(magician.getAttack()).toBe(100);
});

test('setAttack should return correct new attack without stoned status', () => {
  daemon.setAttack(2);
  expect(daemon.getAttack()).toBe(90);
});

test('setAttack should return correct new attack with stoned status', () => {
  magician.setStoned(true);
  magician.setAttack(2);
  expect(magician.getAttack()).toBe(85);
});
