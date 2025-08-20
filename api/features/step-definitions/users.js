import { Given } from '@cucumber/cucumber';
import { expect } from 'chai';

import users from '../../features/functions/users.js';
import helpers from '../helpers-api/users.js';

Given('Create User', async function () {
  const createResponse = await users.createUser();
  expect(createResponse.statusCode).to.equal(200) //200 means Create user successfully
  expect(createResponse.body.message).to.equal(`${helpers.id}`)
  console.log(await createResponse.body);
  console.log("\n");
});

Given('Get Detail User', async function () {
  const getResponse = await users.getUser();
  console.log(await getResponse.body);
  expect(getResponse.statusCode).to.equal(200)
});
