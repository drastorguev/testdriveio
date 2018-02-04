import { Selector } from 'testcafe';

const randomstring = require('randomstring');

const username = randomstring.generate();

const email = `${username}@test.com`;

const TEST_URL = process.env.TEST_URL;

fixture('/login').page(`${TEST_URL}/login`);

test(`should display the sign in form`, async (t) => {
  await t
    .navigateTo(`${TEST_URL}/login`)
    .expect(Selector('H1').withText('Login').exists).ok()
    .expect(Selector('form').exists).ok()
});

test(`should allow a user to sign in`, async (t) => {
  // register user
  await t
    .navigateTo(`${TEST_URL}/register`)
    .typeText('input[name="username"]', username)
    .typeText('input[name="email"]', email)
    .typeText('input[name="password"]', 'test')
    .click(Selector('input[type="submit"]'))
  // log a user out
  await t
    .click(Selector('a').withText('Log Out'))
    // log a user in
  await t
    .navigateTo(`${TEST_URL}/login`)
    .typeText('input[name="email"]', email)
    .typeText('input[name="password"]', 'test')
    .click(Selector('input[type="submit"]'))
  // assert user is redirected to '/'
  // assert '/' is displayed properly
const tableRow = Selector('td').withText(username).parent();
  await t
    .expect(Selector('H1').withText('All Users').exists).ok()
    .expect(tableRow.child().withText(username).exists).ok()
    .expect(tableRow.child().withText(email).exists).ok()
    .expect(Selector('a').withText('User Status').exists).ok()
    .expect(Selector('a').withText('Log Out').exists).ok()
    .expect(Selector('a').withText('Register').exists).notOk()
    .expect(Selector('a').withText('Log In').exists).notOk()
    // log a user out
  await t
    .click(Selector('a').withText('Log Out'))
  // assert '/logout' is displayed properly
  await t
    .expect(Selector('p').withText('You are now logged out').exists).ok()
    .expect(Selector('a').withText('User Status').exists).notOk()
    .expect(Selector('a').withText('Log Out').exists).notOk()
    .expect(Selector('a').withText('Register').exists).ok()
    .expect(Selector('a').withText('Log In').exists).ok()
});
