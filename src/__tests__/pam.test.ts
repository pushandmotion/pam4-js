import { PAM } from '../index';

var pamExampleURL = 'https://pam-mock-url.com';

test('PAM initialize', () => {
  var pam = new PAM(pamExampleURL);
  expect(pam.getPamURL()).toBe(pamExampleURL);
});

test('url end with slash', () => {
  var pam = new PAM(pamExampleURL + '/');
  expect(pam.getPamURL()).toBe(pamExampleURL);
});

test('get event api url', () => {
  var pam = new PAM(pamExampleURL + '/');
  expect(pam.trackerURL).toBe(pamExampleURL + '/trackers/events');
});
